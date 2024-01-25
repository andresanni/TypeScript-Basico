//JAVASCRIPT
const ERROR_TYPES = {
    NOT_FOUND: 'notFound',
    UNAUTHORIZED: 'unauthorized',
    FORBIDDEN: 'forbidden'
}
function mostrarMensaje(tipoDeError){
    if(tipoDeError === ERROR_TYPES.NOT_FOUND){
        console.log('No se encuentra el recurso');
    }
    else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
        console.log('No tienes permisos para acceder');
    }
    else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
        console.log('No tienes permisos');
    } 
}

//TYPESCRIPT : ENUMS
enum ERROR_TYPE {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}

function mostrarMensaj(tipoDeError: ERROR_TYPE){
    if(tipoDeError === ERROR_TYPE.NOT_FOUND){
        console.log('No se encuentra el recurso');
    }
    else if(tipoDeError === ERROR_TYPE.UNAUTHORIZED){
        console.log('No tienes permisos para acceder');
    }
    else if(tipoDeError === ERROR_TYPE.FORBIDDEN){
        console.log('No tienes permisos');
    } 
}
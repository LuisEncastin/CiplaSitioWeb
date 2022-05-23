import {useRef, useEffect} from 'react'

/**
 * Custom hook para para definir el valor previo de alguna variable pasada como argumento.
 * Cada vez que el valor pasado como argumento cambie, el valor será actualizado.
 * @param {String} value Variable de la que se guardará el valor previo.
 * @returns 
 */

function usePrevious(value){

    const ref = useRef()

    useEffect(()=>{
      ref.current = value;
    }, [value]);
    return ref.current;

}

export default usePrevious;
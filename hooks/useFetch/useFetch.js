import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    const isMounted = useRef(true);   // Mantiene la referencia mientras el hook esta montado
    const [state, setState] = useState( { data: null, loading: true, error: null } );

    useEffect(() => {
        return () => {  // El return se ejecuta siempre que se desmonta el componente
            isMounted.current = false;
        }
    }, [])
    

    useEffect(() => {
        setState( { data: null, loading: true, error: null } );

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data,
                    })
                }
                else {
                    console.log('setState no se llamó');
                }
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info',
                })
            })
    }, [url])
    

    return state;
}

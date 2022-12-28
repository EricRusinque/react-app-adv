import { useEffect, useRef,  } from 'react'
import { useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
    value?: number
    initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMounted = useRef( false );

    const increaseBy = ( value:number ) => {

        let newValue = Math.max( counter + value, 0 )
        if( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount );
        }


        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        setCounter( value );
        
    }, [ value ]);
    
    useEffect(() => {
        isMounted.current = true
    }, []);
    

    return {
        increaseBy,
        counter,
        maxCount: initialValues?.maxCount,
    }
}

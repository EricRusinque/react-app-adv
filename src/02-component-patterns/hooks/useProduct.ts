import { useEffect,  } from 'react'
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

    
    const increaseBy = ( value:number ) => {
        const newValue = Math.max( counter + value, 0 )
        setCounter( prev => Math.max( prev + value, 0));

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        
        setCounter( value );

    }, [ value ]);
    

    return {
        increaseBy,
        counter
    }
}

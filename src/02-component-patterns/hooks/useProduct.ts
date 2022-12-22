import React from 'react'
import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
}

export const useProduct = ( { onChange, product }: useProductArgs ) => {

    const [ counter, setCounter ] = useState(0)
    
    const increaseBy = ( value:number ) => {

        const newValue = Math.max( counter + value, 0 )
        setCounter( prev => Math.max( prev + value, 0));

        onChange && onChange({ count: newValue, product });
    }

    return {
        increaseBy,
        counter
    }
}

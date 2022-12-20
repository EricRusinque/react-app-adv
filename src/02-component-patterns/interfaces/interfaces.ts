import { ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductButtonsProps {
    counter: number;
    increaseBy: ( value: number) => void;
}


export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number) => void;
    product: Product
}


export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: ({ title } : { title?: string}) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}
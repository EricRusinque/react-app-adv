import { Props as ProductButtonProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';


export interface Product {
    id: string;
    title: string;
    img?: string;
}

/* export interface ProductButtonsProps {
    counter: number;
    increaseBy: ( value: number ) => void;
}
 */

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product
}


export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps ): JSX.Element,
    Title: ( Props: ProductTitleProps ) => JSX.Element,
    Image: ( Props: ProductImageProps ) => JSX.Element,
    Buttons: ( Props: ProductButtonProps ) => JSX.Element
}


export interface onChangeArgs {
    product: Product;
    count: number;
}
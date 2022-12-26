import styles from "../styles/styles.module.css";
import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';





export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void; 
    value?: number;
}


export const ProductCard = ({ product, children, className, style, value, onChange }: Props ) => {
 
    const { counter, increaseBy} = useProduct({
        onChange, 
        product,
        value
    });


   
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${styles.productCard} ${className}` }
                style={ style }
            > 

                {
                    children
                }

                {/*   <ProductImage 
                img={ product.img} 
                /> 

                <ProductTitle 
                title={ product.title }
                />

                <ProductButtons 
                counter={ 0 } 
                increaseBy={ increaseBy }
                /> */}

            </div>
        </Provider>
  )
}

/* 
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
 */
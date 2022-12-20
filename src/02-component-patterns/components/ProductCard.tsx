import styles from "../styles/styles.module.css";
import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
}


export const ProductCard = ({ product, children, className }: Props ) => {
 
    const { counter, increaseBy} = useProduct();
   
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ `${styles.productCard} ${className}` }> 

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
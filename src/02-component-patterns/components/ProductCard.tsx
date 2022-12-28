import styles from "../styles/styles.module.css";
import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';





export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children?: ( mensaje: string ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void; 
    value?: number;
    initialValues?: InitialValues
}


export const ProductCard = ({ product, children, className, style, onChange, initialValues }: Props ) => {
 
    const { counter, increaseBy} = useProduct({
        onChange, 
        product,
        initialValues
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
                    children('hola mundo')
                }


            </div>
        </Provider>
  )
}


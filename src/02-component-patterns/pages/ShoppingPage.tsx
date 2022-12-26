import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css'
import { useState } from 'react';


const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}
const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [ product1, product2 ];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {

  const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({})

  const onProductCountChange = ({ count, product }:{ count: number, product: Product }) => {
      // console.log('onProductCountChange', { count, product } )

      setShoppingCart( oldShoppingCart => {
        
        if( count === 0 ) {
          
          const { [product.id]: toDelete, ...rest  } = oldShoppingCart

          return rest;
        }

        return {
          ...oldShoppingCart,
          [ product.id ]: { ...product, count }
        }

      });
  }  
  return (
    <div>
        <h1>Shopping Store </h1>
        <hr/>
 
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}
            
        >

          {
            products.map( product => (
              <ProductCard 
                key={ product.id }
                product={ product }
                className='bg-dark'
                onChange={ onProductCountChange }
              >
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white text-bold"/>
                <ProductButtons className="custom-buttons"/>              
              </ProductCard>

            ))
          }
      
            
       


        </div>
        <div 
          className='shopping-cart'
          
        >
             {
              Object.entries(shoppingCart).map( ([ key, product ]) => (
                  <ProductCard 
                  product={ product2 }
                  key={ key }
                  className='bg-dark'
                  style={{
                    width: '100px'
                  }}
                >
                  <ProductImage className="custom-image" />
                  <ProductButtons 
                    className="custom-buttons"
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  />              
                  </ProductCard>
              ))
             }
        </div>
    </div>
  )
}

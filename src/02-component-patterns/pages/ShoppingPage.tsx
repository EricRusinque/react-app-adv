import '../styles/custom-styles.css';

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';


export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();
 
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
                value={ shoppingCart[product.id]?.count  || 0 }
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
                  product={ product }
                  key={ key }
                  onChange={ onProductCountChange }
                  value={ product.count }
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

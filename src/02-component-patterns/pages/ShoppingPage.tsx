import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css'


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

const products: Product[] = [ product1, product2 ]

export const ShoppingPage = () => {


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
             <ProductCard 
                product={ product2 }
                className='bg-dark'
                style={{
                  width: '100px'
                }}
              >
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons"/>              
              </ProductCard>
             <ProductCard 
                product={ product1 }
                className='bg-dark'
                style={{
                  width: '100px'
                }}
              >
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons"/>              
              </ProductCard>
        </div>
    </div>
  )
}

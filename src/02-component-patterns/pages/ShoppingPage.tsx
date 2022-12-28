
import '../styles/custom-styles.css'


import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

const product = products[0]

export const ShoppingPage = () => {


  return (
    <div>
        <h1>Shopping Store </h1>
        <hr/>

        <ProductCard 
          product={ product }
          className='bg-dark'
          initialValues={{
            count: 0,
            maxCount: 10
          }}
        >
          {
            ({ reset }) => (
              <>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white text-bold"/>
                <ProductButtons className="custom-buttons"/>     
                <button onClick={ reset }>Reset</button>
              </>
            )
          }
        </ProductCard>
    </div>
  )
}

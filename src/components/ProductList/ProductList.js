import React from 'react'

import './ProductList.sass'

import { Product, Title } from '../../components'
import { ProductConsumer } from '../../context'

const ProductList = () => {
  return (
    <>
      <div className='py-5'>
        <div className='container'>
          <Title name='our' title='products' />
          <div className='row'>
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList

import React from 'react'
import { Title } from '../../components'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart } = value
          if (cart.length > 0) {
            return (
              <>
                <Title name='your' title='cart' />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </>
            )
          } else {
            return <EmptyCart />
          }
        }}
      </ProductConsumer>
    </section>
  )
}

export default Cart

import React from 'react'

import './Product.sass'

import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../context'
import PropTypes from 'prop-types'

import { FaCartPlus } from 'react-icons/fa'

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product
  return (
    <div className='productWrapper col-9 mx-auto col-md-6 col-lg-3 mb-4 '>
      <div className='card'>
        <ProductConsumer>
          {(value) => (
            <div
              className='img-container p-5'
              onClick={() => {
                value.handleDetail(id)
              }}
            >
              <Link to='/details'>
                <img src={img} alt={title} className='card-img-top' />
              </Link>
              <button
                className='cart-btn'
                disabled={inCart ? true : false}
                cursor={inCart ? 'default !important' : 'pointer !important'}
                onClick={() => {
                  value.addToCart(id)
                  value.openModal(id)
                }}
              >
                {inCart ? (
                  <p className='text-capitalize mb-0'>in cart</p>
                ) : (
                  <FaCartPlus />
                )}
              </button>
            </div>
          )}
        </ProductConsumer>

        {/* card footer */}
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>{title}</p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>{price}$</span>
          </h5>
        </div>
      </div>
    </div>
  )
}
//requiring that the data be in these types
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
}

export default Product

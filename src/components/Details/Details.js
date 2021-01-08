import React from 'react'
import './Details.sass'
import { ProductConsumer } from '../../context'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          company,
          img,
          info,
          price,
          title,
          inCart,
        } = value.detProduct

        return (
          <div className='detailsWrapper container py-5'>
            {/* product title */}
            <div className='row'>
              <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className='row'>
              <div className='col-10 mx-auto col-md-6 my-3'>
                <img src={img} className='img-fluid' alt='product' />
              </div>
              <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                <h3>model: {title}</h3>
                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                  made by : <span className='text-uppercase'>{company}</span>
                </h4>
                <h4 className='text-blue'>
                  <strong>
                    price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                  some info about product
                </p>
                <ul className='text-muted lead'>
                  {info.map((singleInfo, index) => {
                    return <li key={index}>{singleInfo}</li>
                  })}
                </ul>
                <div>
                  <Link to='/'>
                    <button>back to products</button>
                  </Link>
                  <button
                    className='text-orange'
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id)
                      value.openModal(id)
                    }}
                  >
                    {inCart ? 'inCart' : 'add to cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}

export default Details

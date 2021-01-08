import React from 'react'
import './Modal.sass'
import { ProductConsumer } from '../../context'
import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value
        const { img, title, price } = value.modalProduct
        return (
          modalOpen && (
            <div className='modalWrapper'>
              <div className='container'>
                <div className='row'>
                  <div
                    id='modal'
                    className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'
                  >
                    <h5>item added to the cart</h5>
                    <img src={img} alt={title} className='img-fluid' />
                    <h5>{title}</h5>
                    <h5 className='text-muted'>price: $ {price}</h5>
                    <Link to='/'>
                      <button onClick={() => closeModal()}>store</button>
                    </Link>
                    <Link to='/cart'>
                      <button
                        className='text-orange'
                        onClick={() => closeModal()}
                      >
                        go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      }}
    </ProductConsumer>
  )
}

export default Modal

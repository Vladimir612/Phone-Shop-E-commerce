import React, { useState, useEffect } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [detProduct, setProduct] = useState(detailProduct)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState(detProduct)
  const [cart, setCart] = useState([])
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [cartTax, setCartTax] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const setProductsDefault = () => {
    let products = []
    storeProducts.forEach((item) => {
      const singleItem = { ...item }
      products = [...products, singleItem]
    })
    setProducts(products)
  }
  useEffect(() => {
    setProductsDefault()
  }, [])

  const getItem = (id) => {
    const product = products.find((item) => item.id === id)
    return product
  }

  const handleDetail = (id) => {
    const product = getItem(id)
    setProduct(product)
  }

  const addToCart = (id) => {
    let tempProducts = [...products]
    const index = tempProducts.indexOf(getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    setProducts(tempProducts)
    setCart([...cart, product])
  }

  useEffect(() => {
    addTotals()
  }, [cart])

  const openModal = (id) => {
    const product = getItem(id)
    setModalProduct(product)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const increment = (id) => {
    let tempCart = [...cart]
    const selectedProduct = tempCart.find((item) => item.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count += 1
    product.total = product.count * product.price

    setCart([...tempCart])
  }

  const decrement = (id) => {
    let tempCart = [...cart]
    const selectedProduct = tempCart.find((item) => item.id === id)
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count -= 1
    if (product.count === 0) {
      removeItem(id)
    } else {
      product.total = product.count * product.price
      setCart([...tempCart])
    }
  }

  const removeItem = (id) => {
    let tempProducts = [...products] //we need this to know on which item we should change values
    let tempCart = [...cart]
    tempCart = tempCart.filter((item) => item.id !== id)
    const index = tempProducts.indexOf(getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0
    setCart([...tempCart])
    setProducts([...tempProducts])
  }
  const clearCart = () => {
    setCart([])
    setProductsDefault()
  }

  const addTotals = () => {
    let subTotal = 0
    cart.map((item) => (subTotal += item.total))

    const tempTax = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))

    const total = subTotal + tax

    setCartSubTotal(subTotal)
    setCartTax(tax)
    setCartTotal(total)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        detProduct,
        handleDetail,
        addToCart,
        openModal,
        modalOpen,
        closeModal,
        modalProduct,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        increment,
        decrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
const ProductConsumer = ProductContext.Consumer
export { ProductProvider, ProductConsumer }

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../actions/productsActions"
import Products from "./views/Products"

const ProductList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadProducts = () => dispatch(fetchProducts())

    loadProducts()
  }, [])

  const products = useSelector((state) => state.products.products)

  return <Products products={products} />
}

export default ProductList

import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'
import productsData from '../products.js'
// import productsData from '../../../server/data/Products.js'


const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])


  return (
    <>
      <h3>Carefully curated Baltimore Orioles Products</h3>
      <Row>
        {productsData.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
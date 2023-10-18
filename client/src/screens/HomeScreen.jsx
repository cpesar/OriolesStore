// import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
// import axios from 'axios'
import Product from '../components/Product'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import { Fragment } from 'react';


const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products')
  //     setProducts(data)
  //   }
  //   fetchProducts()
  // }, [])


  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.message}</Message>
      ) : (
        <Fragment>
          <h3>Carefully curated Baltimore Orioles Products</h3>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Fragment>
      )
      }

    </Fragment>
  )
}



export default HomeScreen
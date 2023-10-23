// import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import { Fragment } from 'react';


const HomeScreen = () => {
  const { data: product, isLoading, error } = useGetProductsQuery();


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
            {product.map((p) => (
              <Col key={p._id} sm={12} md={6} lg={4} xl={3} >
                <Product product={p} />
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
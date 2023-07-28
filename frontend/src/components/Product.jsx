import React from 'react'
import { Card, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <>
      <Stack>
        <Card className="my-3 p-3 rounded" style={{ height: '100%' }}>
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} width="50" height="250" variant="top" />
          </Link>
          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as="div" className='product-title'>
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            <Card.Text as="div">
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>
            <Card.Text as="div">
              <strong className='my-3'>${product.price}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </Stack>
    </>
  )
}

export default Product
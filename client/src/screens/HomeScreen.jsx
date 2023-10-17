import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'
// import { useGetProductQuery } from '../slices/productApiSlice.js'


const HomeScreen = () => {
  // const { data: products, isLoading, error } = useGetProductQuery();
  // console.log(products)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])


  //   return (
  //     <>
  //       {isLoading ?
  //         (<h4>Loading...</h4>
  //         )
  //         : error ? (<div>{error?.data?.message || error.message}</div>)
  //           : (
  //             <><h3>Carefully curated Baltimore Orioles Products</h3 >
  //               <Row>
  //                 {products.map((product) => (
  //                   <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
  //                     <Product product={product} />
  //                   </Col>
  //                 ))}
  //               </Row></>)
  //       }

  //     </>
  //   )
  // }

  return (
    <>
      {/* <h1>The BirdHouse</h1> */}
      <h3>Carefully curated Baltimore Orioles Products</h3>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
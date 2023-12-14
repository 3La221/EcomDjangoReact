import React, { useEffect, useState } from 'react'
import  { Row , Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Messsage from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import {listProducts} from '../actions/productActions'



const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error , loading , products} = productList

    
    useEffect(()=>{

        dispatch(listProducts())

        
        
    },[dispatch])

    console.log('loading:',loading)
  return (
    <div>
        <h1>Latest Products</h1>
        {loading ? <Loader/>
        : error ? <Messsage variant='danger'>{error}</Messsage>:
        <Row>
            
        {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>
        
        }
        
    </div>
  )
}

export default HomeScreen

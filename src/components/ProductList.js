import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
//import { storeProducts } from '../data';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
    // state = {
    //     products: storeProducts
    // }
    render() {
        //console.log(this.state.products)
        // const { isAuthenticated, login } = this.props.auth;
        // console.log(isAuthenticated)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        {this.props.auth.isAuthenticated() ? (
                            <Link to="/profile">View Profile</Link>
                        ) : (
                                <div>
                                    <button onClick={this.props.auth.login}>Log In</button>
                                </div>
                            )}

                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    //console.log(value);
                                    return value.products.map((product) => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>


        )
    }
}

import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../context';
import EmptyCart from './EmptyCart';


export default class Cart extends Component {
    render() {
        return (
            <section>

                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0){
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart"></Title>
                                    <CartColumns />
                                </React.Fragment>
                                
                            )
                        }
                    }}

                </ProductConsumer>

                <EmptyCart />

                
            </section>
        )
    }
}

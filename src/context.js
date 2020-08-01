import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
import { ThemeConsumer } from 'styled-components';

const ProductContext = React.createContext();
class ProductProvider extends Component {
    //in version in src-1 we are having reference issue
    //please check video 2:39:00
    //changing line 10 to an emppty array , previously we ave storeProducts
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        //cart: storeProducts,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };


    componentDidMount() {
        this.setProducts();
    }

    //creating a method on line 14 to fix reference issue
    // here we copy the values in storeProduct instead of referecing it
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach((item) => {
            const singleItem = { ...item } // copying values of storeProduct to the empty object
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {
                products: tempProducts
            }
        })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        //console.log(product)
        return product;
    }

    handleDetail = (id) => {
        // console.log('hello from detail');
        const product = this.getItem(id);
        //console.log(product)
        this.setState(() => {
            return { detailProduct: product }
        })
    };
    addToCart = (id) => {
        //console.log(`hello from add to cart.id is ${id}`);
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        //console.log(product)
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] }
        }, () => {
            //console.log(this.state)
            this.addTotal();
        })
    }

    //modal
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }

    increment = (id) => {
        //console.log('this is increment method');
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find((item) => item.id === id);
        //console.log(selectedProduct)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotal()
        })
    }
    decrement = (id) => {
        //console.log('this is decrement method');
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find((item) => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return { cart: [...tempCart] };
            }, () => {
                this.addTotal();
            })
        }
    }
    removeItem = (id) => {
        //console.log('item removed');
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter((item) => item.id !== id);
        //console.log(tempCart)

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotal();
        })
    }
    clearCart = () => {
        //console.log('cart cleared');
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProducts();
            this.addTotal();
        })
    }

    addTotal = () => {
        let subTotal = 0;
        //console.log(this.state.cart)
        this.state.cart.map((item) => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{

                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
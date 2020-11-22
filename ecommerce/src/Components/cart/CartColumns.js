import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p>products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>name of products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p>total</p>
                    </div>
                </div>
            </div>
        )
    }
}

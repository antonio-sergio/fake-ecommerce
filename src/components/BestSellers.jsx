import React, { Component } from "react";
import Slider from "react-slick";
import api from '../services/api';
import { Link } from 'react-router-dom';


export default class MultipleItems extends Component {

    state = {
        products: [],
    }

    async componentDidMount() {
        const response = await api.get('/products');

        this.setState({ products: response.data });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        const { products } = this.state;


        const orderedProducts = products.sort(function compare(a, b) {
            if (a.rating.count < b.rating.count) {
                return -1;
            }
            if (a.rating.count > b.rating.count) {
                return 1;
            }
            return 0;
        });

        orderedProducts.reverse();

        const stars = (count) => {
            const [int = 0, decimal = 0] = count.toString()
                .split('.')
                .map((num) => parseInt(num));
            const elements = [];
            for (let i = 0; i < int; i++) {
                elements.push(React.createElement("i", { className: "bi bi-star-fill text-info", key: i }));
            }
            if(decimal > 0){
                elements.push(React.createElement("i", { className: "bi bi-star-half text-info", key: 4343 }));
            }
            if(int < 5){
                let dif = 5 - int;
                if (decimal > 0) dif -= 1;
                 
                for(let i = 0; i < dif; i++){

                    elements.push(React.createElement("i", { className: "bi bi-star text-info", key: i + "a" }));
                }
            }
            const element = React.createElement("div", { className: "text-center" }, elements);
            return element;
        }

        return (

            <div className="container container-list-products mt-5">
                <h2 className="text-center p-3">OS MAIS VENDIDOS DA LAROCHE</h2>
                <Slider {...settings}>
                    {orderedProducts.slice(0, 6).map(product => {

                        return (
                            <div className="card p-4 " key={product.id}>
                              <Link to={`/products/${product.id}`}><img className="card-img-top" src={product.image} alt={product.title} height="450px" /></Link>  
                                <h5 className="card-title text-center mt-5">{product.title}</h5>
                                <p className="card-text text-center lead fw-bold price">${product.price}</p>
                                {stars(product.rating.rate)}
                            </div>
                        )


                    })}
                </Slider>
            </div>
        );
    }
}
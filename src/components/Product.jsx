import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const stars = (count) => {
        const [int = 0, decimal = 0] = count.toString()
            .split('.')
            .map((num) => parseInt(num));
        const elements = [];
        for (let i = 0; i < int; i++) {
            elements.push(React.createElement("i", { className: "bi bi-star-fill text-info", key: i }));
        }
        if (decimal > 0) {
            elements.push(React.createElement("i", { className: "bi bi-star-half text-info", key: 4343 }));
        }
        if (int < 5) {
            let dif = 5 - int;
            if (decimal > 0) dif -= 1;

            for (let i = 0; i < dif; i++) {

                elements.push(React.createElement("i", { className: "bi bi-star text-info", key: i + "a" }));
            }
        }
        const element = React.createElement("div", { className: "text-center" }, elements);
        return element;
    }

    const getStars = (ob) => {
        let x = "";
        if(ob.rating){
            return ob.rating.rate
        }
        
        return x;
    }
    const ShowProduct = () => {
        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb p-3 ">
                        <li className="breadcrumb-item"><a href="/">Laroche Products </a></li>
                        <li className="breadcrumb-item"><Link to={`/${product.category}`.replace("'", "").split(" ").join("")} >{product.category}</Link ></li>
                        <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                    </ol>
                </nav>
                <h1 className="fs-4 pb-3">
                    {product.title}
                </h1>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h3 className="display-6 price my-4">
                        $ {product.price}
                    </h3>
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                    <h6>
                    {stars(getStars(product))}
                    </h6>
                        
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" >
                        Add to cart
                    </button>
                    <Link to="/" className="btn btn-dark ms-2 px-3 py-2">
                        Go to cart
                    </Link>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container pt-0 ">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductListt = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();

    }, []);
    const getProducts = async () => {
        let result = await fetch("http://localhost:3006/products",{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();

        setProducts(result);

    }
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:3006/product/${id}`, {
            method: "Delete"
        });
        result = await result.json()
        if (result) {
            getProducts();
        }

    }

    const searchhandle = async (event) => {

        let key = event.target.value
        if (key) {
            let result = await fetch(`http://localhost:3006/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result)
            }

        }else{
            getProducts();
        }

    }
    return (
        <div className="product-list">
            <h3>Product List</h3>
            <input type="text" className="search_product_boox" placeholder="search Product"
                onChange={searchhandle}
            />
            <ul>
                <li>Serial.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>category</li>
                <li>company</li>
                <li>operation</li>

            </ul>
            {
                products.length> 0? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)} >Delete</button>
                            <Link to={"/update/" + item._id}>Update</Link>
                        </li>
                    </ul>

                )
               : <h1>no result found</h1>
            }
        </div>
    )
}
export default ProductListt;
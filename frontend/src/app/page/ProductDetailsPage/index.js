import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../layout/footer'
import Header from '../../layout/header'
import ProductDetails from "../../components/products/ProductDetails";
import SuggestedProduct from "../../components/products/SuggestedProduct";
import { useSelector } from 'react-redux';

const ProductDetailsPage = () => {
  const {allProducts} = useSelector((state) => state.products);
    
    const {name} = useParams();
    const [data,setData] = useState(null);
    const productName = name.replace(/-/g," ");

    useEffect(() => {
        const data = allProducts && allProducts.find((i) => i.name === productName);
        setData(data);
    }, []);
    
  return (
    <div>
        <Header />
        <ProductDetails data={data} />
         {
            data && <SuggestedProduct data={data} />
         }
        <Footer /> 
    </div>
  )
}

export default ProductDetailsPage
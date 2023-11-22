import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
 const[products,setProducts]=useState([])
 const[error,setError]=useState(false)
 const[loading,setLoading]=useState(true)
 const subTotal=products.reduce((total,item)=>(item.price*item.dampingRate*item.amount)+total,0)

 const BASE_URL="https://63f4e5583f99f5855db9e941.mockapi.io/products"
 const getData=async()=>{ 
  try{ 
  const {data}= await axios(BASE_URL)
   setProducts(data)
 }catch(error){
  setError(true)
 }finally{
  setLoading(false)
  }
 }
 useEffect(() => {
    getData()
   
 }, [])
 
if(error){
  return <p>Something went wrong...</p>;
} 

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {loading===true ? (<p>Loading...</p>):(<>
            <article id="product-panel" className="col-md-6">
              {products.map((product)=> (
                <ProductCard key={product.id} product={product} getData={getData} />
              ))}
            </article>
            <article className="col-md-4 m-3">
              <CardTotal subTotal={subTotal}/>
            </article>
          </>)}
          
        
      </div>
    </div>
  );
};

export default ProductList;

import React,{useState} from "react";
import './AddProduct.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function AddProduct(){
    const navigate=useNavigate
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setcategory]=useState('')
    const[stock,setstock]=useState('')
    const[description,setdescription]=useState('')
    const userRole=localStorage.getItem('userRole')
    async function addProduct(){
        const newProduct={name,price,category,description,stock,role:userRole}
        console.log(newProduct)
        const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/add`,newProduct)
        if(response.status===201){
            navigate("/cart")
        }
        else{
            console.log("product not added")
        }
    }
    return(
        <div className="add-product-container">
            <div className="form-group">
                <label>product name</label>
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>product price:</label>
                <input
                value={price}
                onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>stock</label>
                <input
                value={stock}
                onChange={(e)=>setstock(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>description</label>
                <input
                value={description}
                onChange={(e)=>setdescription(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>category</label>
                <input
                value={category}
                onChange={(e)=>setcategory(e.target.value)}/>
            </div>
            <button onClick={addProduct}>submit</button>
        </div>
    )

}
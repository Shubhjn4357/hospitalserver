import {useState,useEffect} from "react";
import useFetch from "../utils/useFetch"
import FormModel from "./FormModel";
import "./cart.css"
const Cart =()=>{
  const { response ,error } = useFetch('https://hospitalserver-lxvrfqldz-shubhjn4357.vercel.app/api/getall',{});
  const [rooms,setRoom]=useState(response);
  const [model,setModel]=useState(false);
  const [pay,setPay]=useState(false);
  useEffect(()=>{
    return setRoom(response)
  },[response])
  
  const TotalPrice=()=>{
    let sum=0;
        rooms?.map((i)=>{
          return sum+=(i.price*i.cartitem);
        })
     return sum
  }
  const Closeform=()=>{
    setModel(!model)
    setPay(!pay)
  }
  const handleRoom=async(e)=>{
    const item=e.item.cartitem >= 0 && e.item.cartitem <= 10?e.type==="inc"?e.item.cartitem+1:e.item.cartitem-1:e.item.cartitem;
    if(item >= 0 && item<11){
     try{
      const res =await fetch(`https://hospitalserver-lxvrfqldz-shubhjn4357.vercel.app/api/update/${e.item._id}`,
      {
       method:"PATCH",
       headers: { 
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
       },
       body:JSON.stringify({
          cartitem:item
        })
      })
     const data=await res.json()
     setRoom(rooms.map((i)=>{
         return i._id===data._id?{...data}:i
       }))
     }
     catch(error){
        console.log(error)
      }
    }
    }
  return (
    <>
   <div className="container-fluid mb-5 pb-5">
   <div className="row">
    <div className="col-12 cart-bar p-4 d-flex flex-start">
      <i className="fa-solid fa-cart-shopping fa-fade h3 mx-2"></i> <h3>Check Out Your Cart</h3>
    </div>
    <div className="col-12 cart">
      {error?<div className="text-danger display-3">{error.message}</div>:""}
      {rooms?.map((i,k)=>{
      if(i?.cartitem>0){
        return <div key={k} className={`cart-card ${i.name==="Premium"?"gold":"platinum"}`}>
              <div className="cart-content p-2">
                <h5>{i?.name}</h5>
                <div className="cart-rating">
                {[...Array(i?i.rating:1)].map((x, i) =>
                    <i className="fa-solid fa-star h6" key={i} ></i>
                  )}
                </div>
                <h6 className="text-primary bg-light rounded-pill fw-bold mt-1">@{i?.price}/D</h6>
              </div>
      
               <div className="addtocart ms-auto my-1">
                <button className="btn btn-small btn-primary btn-neg" onClick={()=>handleRoom({"type":"dec","item":i})}> - </button>
                  <div className="cartItem">{i?.cartitem}</div>
                <button className="btn btn-small btn-primary btn-pos" onClick={()=>handleRoom({"type":"inc","item":i})}> + </button>
              </div>
             
            </div>
      }
      return <div key={k}></div>
      })}
    </div>
    <div className="col-12 price">
     {rooms?.map((i,k)=>{
       if(i?.cartitem>0){
        
        return <div className="my-1" key={k}>{i?.price} x {i?.cartitem}</div>
       }
       return <div key={k}></div>
     })}
     <button className="p-2 my-1 btn rounded-pill btn-primary ms-auto me-2" onClick={()=>setModel(!model)}>Total {TotalPrice()} To Pay <i className="fa-solid fa-arrow-right"></i></button>
    </div>
    <FormModel open={model} close={Closeform} pay={pay} payClose={()=>setPay(!pay)}/>
   </div>
  </div>
    </>
    )
}
export default Cart;
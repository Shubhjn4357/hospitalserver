import {
 useLoaderData,Outlet
} from "react-router-dom";
import {useState} from "react";
import Carder from "./Carder";
const Hotel =()=>{
  const Room=useLoaderData();
  const [rooms,setRoom]=useState([...Room]);
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
    <div className="container-fluid p-2 ">
      <div className="row">
        <div className="col-12 col-md-8 cards p-2">
          {rooms.map((i,k)=>{return <Carder key={k} props={i} fun={(e)=>handleRoom(e)}/>})}
        </div>
        <div className="col-12 col-md-4">
          <Outlet/>
        </div>
      </div>
    </div>
    </>
    )
}
export default Hotel;
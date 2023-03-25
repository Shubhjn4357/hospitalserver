import {
  createBrowserRouter
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { Suspense, lazy } from 'react';
const Hotel= lazy(()=>import("./hotel/Hotel"));
const Dummy= lazy(()=>import("./hotel/dummy"));
const Cart= lazy(()=>import("./hotel/Cart"));
const About= lazy(()=>import("./pages/About"));
const Root= lazy(()=>import("./pages/Root"));
const Login= lazy(()=>import("./pages/Login"));
const Standard= lazy(()=>import("./hotel/standard/Standard"));
const Premium= lazy(()=>import("./hotel/premium/Premium"));
const Loader=async()=>{
  try{
          const res = await fetch("https://hospitalserver-lxvrfqldz-shubhjn4357.vercel.app/api/getall",
          {
              ContentType : "application/json",
          });
          if(!res.ok){throw new Error("Data Not Found")}
          const data=res.json();
          return data;
  }
  catch(error){
    return [{
      image:"",
      name:"404 NotFound",
      link:"/",
      rating:0,
      cartitem:null,
    }]
  }
}
const Routers=createBrowserRouter([
  {
    path:"/",
    element:<Suspense fallback={<div>Loading...</div>}><Login/></Suspense>,
    errorElement:<ErrorPage/>,
  },
  {
    path:"/root",
    element:<Suspense fallback={<div>Loading...</div>}><Root/></Suspense>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'',
        loader:Loader,
        errorElement:<ErrorPage/>,
        element:<Suspense fallback={<div>Loading...</div>}>
                  <Hotel/>
                </Suspense>,
        children:[
              {
                index:true,
                path:'',
                element:(<Suspense fallback={<div>Loading...</div>}>
                          <Dummy/>
                        </Suspense>)
              },
              {
                path:'hotel/standard/:id',
                element:(<Suspense fallback={<div>Loading...</div>}>
                          <Standard/>
                        </Suspense>)
              },
              {
                path:'hotel/premium/:id',
                element:(<Suspense fallback={<div>Loading...</div>}>
                          <Premium/>
                        </Suspense>)
              },
            ]
      },
      {
            path:'cart',
            errorElement:<ErrorPage/>,
            element:(<Suspense fallback={<div>Loading...</div>}>
                      <Cart/>
                    </Suspense>)
      },
      {
            path:'about',
            errorElement:<ErrorPage/>,
            element:(<Suspense fallback={<div>Loading...</div>}>
                      <About/>
                    </Suspense>)
      },
     ]
  },

  ])
  export default Routers;
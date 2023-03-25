import Navigation from "../nav/Navigation"
import {Outlet} from "react-router-dom"
const Root=()=>{
 
  return (<>
  <div className="container-fluid">
   <div className="row">
    <div className="col-12 app-bar p-4 d-flex flex-start">
      <i className="fa-solid fa-arrow-left fa-beat-fade h3 mx-2"></i> <h3>XYZ Hospital Rooms</h3>
    </div>
    <Outlet/>
    <Navigation/>
   </div>
  </div>
  </>)
}
export default Root;
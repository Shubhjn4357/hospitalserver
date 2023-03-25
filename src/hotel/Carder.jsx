import "./card.css";
import {Link} from "react-router-dom"
const Carder=({props,fun})=>{
  return (<>
  <Link className="carder rounded p-2 container-fluid text-decoration-none text-dark" to={`${decodeURIComponent(props?.link)}/${props?._id}`}>
    <div className="row">
      <div className="col-6 card-image">
        <img src={decodeURIComponent(props?.image)} alt="hotel-room"/>
      </div>
      <div className="col-6 card-content">
      <div className="card-detail">
        <h4 className="mt-1">{props?.name}</h4>
        <h6 className="mt-1 card-rating">
        {[...Array(props?props.rating:1)].map((x, i) =>
            <i className="fa-solid fa-star" key={i} ></i>
          )}
        </h6>
        <div className="fw-bold h5 text-primary bg-light rounded-pill mt-1">@{props?.price}/D</div>
       </div>
        <div className="addtocart ms-auto my-1">
          <button className="btn btn-small btn-primary btn-neg" onClick={()=>fun({"type":"dec","item":props})}> - </button>
            <div className="cartItem">{props?.cartitem}</div>
          <button className="btn btn-small btn-primary btn-pos" onClick={()=>fun({"type":"inc","item":props})}> + </button>
        </div>
     </div>
    </div>
  </Link>
  </>)
}
export default Carder;
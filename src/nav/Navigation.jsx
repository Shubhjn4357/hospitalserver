import {NavLink} from "react-router-dom";
import "./nav.css";
const Navigation=()=>{
  const links=[
      {
        name:"Home",
        icon:"fa-house",
        link:"/root"
      },
      {
        name:"Cart",
        icon:"fa-cart-shopping",
        link:"/root/cart"
      },
      {
        name:"About",
        icon:"fa-spa",
        link:"/root/about"
      },
    ]
  return (<>
    <div className="conatiner-fluid navigation-bar">
      <div className="row nav-tab">
        {links.map((item,i)=>{
            return <NavLink key={i} className={`col link-tab ${({isActive,isPending})=>isActive?"isActive":""}`} to={item.link}><i className={`fa-classic ${item.icon}`}>{item.name}</i></NavLink>
        })}
      </div>
    </div>
  </>)
}
export default Navigation;
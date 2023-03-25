import useFetch from "../../utils/useFetch";
import {useParams} from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Premium =()=>{
  const {id}=useParams();
  const { response ,error } = useFetch(`https://hospitalserver-lxvrfqldz-shubhjn4357.vercel.app/api/getone/${id}`,{});
  
  return (
    <div>
    {error?<div className="text-danger display-3">{error.message}</div>:""}
    {response?<div className="container">
      <div className="row">
        <div className="col-12 gold p-2">
          <h3 className="text-light">Premium Rooms</h3>
        </div>
        <div className="col-12">
          <Table>
            <thead>
              <tr>
                <th>NO.</th>
                <th>Service</th>
                <th>Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Rating</td>
                <td>{[...Array(response?response.rating:1)].map((x, i) =>
                    <i className="fa-solid fa-star h6 text-warning" key={i} ></i>
                  )}</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>A/C. Room</td>
                <td><i className="fa-solid fa-check text-dark"></i></td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Utility Services</td>
                <td><i className=" fa-solid fa-check text-dark"></i></td>
              </tr>
              <tr>
                <td>4.</td>
                <td>24/7 Availability</td>
                <td><i className="fa-solid fa-check text-dark"></i></td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Prime Benefits</td>
                <td><i className="fa-solid fa-check text-dark"></i></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>:
    <div className="text-danger">404 Not Found</div>
    }    
    </div>
    )
}
export default Premium;
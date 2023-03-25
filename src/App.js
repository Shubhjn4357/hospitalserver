import './App.css';
import {RouterProvider} from "react-router-dom";
import Routes from "./Routers";

function App() {
  return (
   
      <div className="App">
          <RouterProvider router={Routes} />
      </div>
  );
}

export default App;

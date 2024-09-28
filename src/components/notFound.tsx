import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
const NotFoundPage = () => {
    // if the user search the wrong url this component will be appeard
    return ( 
        <div className="flex flex-col pb-5 items-center justify-center text-white ">
            <img className="w-1/2" src={logo} alt="" />
            <h1 className="text-2xl lg:text-5xl">404 This Page Does Not Exist</h1>
            <Link className="bg-red-700 inline-block active-btn px-4 lg:px-8 py-2 my-8 lg:my-12 rounded-md " to={"/"}>Back To Home Page</Link>
        </div>
     );
}
 
export default NotFoundPage;
import netflixLogo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
const DashboardNavigation = () => {
    return ( 
       <nav className="flex flex-col items-center justify-center gap-y-12 sm:gap-y-10">
            <div className="w-full px-5 flex items-center justify-center sm:justify-between text-white ">
              <img className=" hidden sm:block w-40" src={netflixLogo} alt="" />
               <div className="flex items-center child:text-sm child::xs:text-base child:md:text-lg child:lg:text-2xl gap-x-2 xs:gap-x-6 sm:gap-x-4 child:py-0">
               <Link className= "bg-red-700 text-white px-2 py-1 rounded-md active-btn" to={"/"}>Home</Link>
               <Link to={"/"}>Animation</Link>
                <Link to={"/"}>Action</Link>
                <Link to={"/"}>Adventure</Link>
                <Link to={"/"}>Horror</Link>
               </div>
            </div>
  <div className="flex gap-x-2 w-4/5 border-2 text-white py-2 sm:py-4 pl-3  rounded-sm bg-black">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 xs:size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
  <input className="outline-none text-lg xs:text-xl bg-black w-full" type="search" placeholder="search for movies" />
  </div>
       </nav>
     );
}
 
export default DashboardNavigation;
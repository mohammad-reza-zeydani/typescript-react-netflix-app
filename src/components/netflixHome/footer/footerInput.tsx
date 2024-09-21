import { Link } from "react-router-dom";
const FooterInput = () => {
    return ( 
        <div className=" flex justify-center items-center bg-black py-8 md:py-12 lg:py-20 myborder">
        <div className="flex flex-col items-start justify-center w-11/12 md:w-1/2  gap-y-2 md:gap-y-4 text-white">
          <h3 className="text-base md:text-lg">
            Ready to watch? Enter your email to create or 
            restart your membership
          </h3>
          <input placeholder="Email address" className="w-full input p-3 md:p-5" type="text" />
          <Link to={"/sign_up"} className="block bg-red-700 px-4 py-2 rounded-md active-btn">GetStarted</Link>
        </div>
        </div>
     );
}
 
export default FooterInput;
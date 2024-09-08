import { TFooter } from "../../../types/types";
import { FooterData } from "./footerData";
const Footer = () => {
    return ( 
            <div className="flex flex-col  justify-between items-start lg:flex-row lg:items-center pl-10 md:px-20 lg:px-40 xl:px-56 text-neutral-200 underline py-3 md:py-12 border-t-4 sm:border-t-8 border-t-gray-800 ">
            <div>
                {
                    FooterData.slice(0,4).map((item:TFooter)=>{
                        return(
                            <a className="mt-3" href="#">{item.text}</a>
                        )
                    })
                }
            </div>
            <div>
                {
                    FooterData.slice(5,8).map((item:TFooter)=>{
                        return(
                            <a className="mt-3"  href="#">{item.text}</a>
                        )
                    })
                }
            </div>
            <div>
                {
                    FooterData.slice(9,12).map((item:TFooter)=>{
                        return(
                            <a className="mt-3"  href="#">{item.text}</a>
                        )
                    })
                }
            </div>
            <div>
                {
                    FooterData.slice(12,16).map((item:TFooter)=>{
                        return(
                            <a className="mt-3"  href="#">{item.text}</a>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Footer;
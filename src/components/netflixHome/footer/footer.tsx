import { TFooter } from "../../../types/types";
import { FooterData } from "./footerData";
const Footer = () => {
    return ( 
            <footer className="flex flex-col  justify-between items-start xl:flex-row xl:items-center pl-10 md:px-20 lg:px-40 xl:px-56 text-neutral-200 underline py-3 md:py-12 border-t-4 sm:border-t-8 border-t-gray-800 ">
            <div>
                {/*FAQ & Investor Relations &Privacy & Speed Test */}
                {
                    FooterData.slice(0,4).map((item:TFooter)=>{
                        return(
                            <a className="footer" href="#">{item.text}</a>
                        )
                    })
                }
            </div>
            <div>
            {/* Help Center & Jobs & Cookie Preferences & Legal Guarantee */}
                {
                    FooterData.slice(4,8).map((item:TFooter)=>{
                        return(
                            <a className="footer"  href="#">{item.text}</a>
                        )
                    })
                }
            </div>
            <div>
            {/* Account & Ways to Watch & Corporate Information & Legal Notices */}
                {
                    FooterData.slice(8,12).map((item:TFooter)=>{
                        return(
                            <a className="footer" href="#">{item.text}</a>
                        )
                    })
                }
            </div>
            <div>
            {/* Media Center & Terms of Use & Contact Us & Only on Netflix */}
                {
                    FooterData.slice(12,16).map((item:TFooter)=>{
                        return(
                            <a className="footer" href="#">{item.text}</a>
                        )
                    })
                }
            </div>
        </footer>
     );
}
 
export default Footer;
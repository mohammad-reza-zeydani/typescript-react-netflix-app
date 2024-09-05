import { BodyData } from "./bodyData";
import { TBody } from "../../../types/types";
const Body = () => {
    return ( 
        <div className="bg-black text-white divide-y-4 sm:divide-y-8 divide-gray-800 flex flex-col md:gap-y-4  border-b-4 sm:border-b-8 border-b-gray-800 ">
            {
                BodyData.map((item:TBody)=>{
                    return (
                        item.reverse ? (
                            <div key={item.id} className=" flex flex-col px-5 lg:px-20 xl:px-32 py-4 gap-y-5 md:gap-y-3 lg:flex-row justify-center items-center">
                                <img src={item.image} alt="" />
                                <div className="flex flex-col">
                                    <h2 className=" text-lg md:text-4xl font-bold">{item.title}</h2>
                                    <p className="text-base md:text-2xl">{item.text}</p>
                                </div>
                            </div>
                        ):(
                        <div key={item.id} className="flex flex-col-reverse gap-y-5 px-5 py-4 lg:px-20 xl:px-32 lg:flex-row justify-center items-center">
                            <div className="flex flex-col">
                            <h2 className="text-lg md:text-4xl font-bold">{item.title}</h2>
                            <p className="text-base md:text-2xl">{item.text}</p>
                            </div>
                            <img src={item.image} alt="" />
                        </div>
                        )
                    )
                })
            }
        </div>
     );
}
 
export default Body;
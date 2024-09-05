import Header from "./header";
import Body from "./body/body";
import Accordion from "./accordion/accordion";
import { AccordionData } from "./accordion/accordionData";
import Input from "./accordion/input";
const Home = () => {
    return ( 
        <>
        <Header/>
        <Body/>
        <div className="flex  flex-col justify-center items-center w-full pt-9 bg-black text-white gap-y-7 sm:gap-y-9 ">
        <h1 className=" font-sans font-bold text-xl sm:text-2xl lg:text-4xl tracking-normal md:tracking-wider">Frequntley Asked Questions</h1>
        <div className="w-full child:pt-3">
                {AccordionData .map((item) => {
                    return (
                      <Accordion
                        key={item.id}
                        title={item.title}
                        text={item.text}
                      ></Accordion>
                    );
                  })}
        </div>
        </div>
        <Input/>
        </>
     );
}
 
export default Home;
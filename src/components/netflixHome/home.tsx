import Navigation from "./homeNavigation";
import Body from "./body/body";
import FooterInput from "./footer/footerInput";
const Home = () => {
    return ( 
        <>
        {/* netflixHomepage navigation */}
        <Navigation/>
         {/* netflixHomepage body */}
        <Body/>
         {/*my footer's input*/}
        <FooterInput/>
        </>
     );
}
 
export default Home;
import Home from "./components/Home/home"
import SignIn from "./components/signIn&signUp&signOut/signIn"
import SignUp from "./components/signIn&signUp&signOut/signUp"
import SignOUt from "./components/signIn&signUp&signOut/signOut"
import { Route,Routes} from "react-router-dom"
import Footer from "./components/Home/footer/footer"
import NetFlixDashBoard from "./components/netflix/netflixDashBoard"
import NotFoundPage from "./components/notFound"
import PrivateRoutes from "./components/privateRoutes"
function App() {
  return (
    <>
       <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/netflix" element={<NetFlixDashBoard/>}/>
        <Route path="/sign_out"element={<SignOUt/>}/>
        </Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="/sign_in" element={<SignIn/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App

import Home from "./components/Home/home"
import SignIn from "./components/signIn&signUp&signOut/signIn"
import SignUp from "./components/signIn&signUp&signOut/signUp"
import SignOUt from "./components/signIn&signUp&signOut/signOut"
import { Route,Routes,Navigate } from "react-router-dom"
import Footer from "./components/Home/footer/footer"
import NetFlixDashBoard from "./components/netflix/netflix"
import MyContextProvider from "./components/Home/context/myContext"
import NotFoundPage from "./components/notFound"
function App() {
  const isAuth=localStorage.getItem("token")
  return (
    <MyContextProvider>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="/sign_in" element={<SignIn/>}/>
        <Route path="/netflix" element={isAuth ?<NetFlixDashBoard/>:<Navigate to={"/"}/>}/>
        <Route path="/sign_out"element={isAuth ?<SignOUt/>:<Navigate to={"/"}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </MyContextProvider>
  )
}

export default App

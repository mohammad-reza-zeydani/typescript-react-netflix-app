import Home from "./components/netflixHome/home"
import SignIn from "./components/signIn&signUp&signOut/signIn"
import SignUp from "./components/signIn&signUp&signOut/signUp"
import SignOUt from "./components/signIn&signUp&signOut/signOut"
import { Route,Routes} from "react-router-dom"
import Footer from "./components/netflixHome/footer/footer"
import NetFlixDashBoard from "./components/netflixDashBoard/netflixDashBoard"
import NotFoundPage from "./components/notFound"
import PrivateRoutes from "./components/privateRoutes"
import MyContextProvider from "./components/context/context"
import MoreInfo from "./components/netflixDashBoard/moreInfoPage"
import MarkedMovies from "./components/netflixDashBoard/dashBoardBody/markedMoviePage/markedMovies"
function App() {
  return (
    <MyContextProvider>
       <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/netflix" element={<NetFlixDashBoard/>}/>
        <Route path="/sign_out"element={<SignOUt/>}/>
        <Route path="/informaiton/:id"element={<MoreInfo/>}/>
        <Route path="/markedMoviesPage"element={<MarkedMovies/>}/>
        </Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="/sign_in" element={<SignIn/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      </MyContextProvider>
  )
}

export default App

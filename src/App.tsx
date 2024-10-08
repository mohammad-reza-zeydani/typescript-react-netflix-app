import Home from "./components/netflixHome/home";
import SignIn from "./components/signIn&signUp&signOut/signIn";
import SignUp from "./components/signIn&signUp&signOut/signUp";
import SignOUt from "./components/signIn&signUp&signOut/signOut";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/netflixHome/footer/footer";
import NetFlixDashBoard from "./components/netflixDashBoard/netflixDashBoard";
import NotFoundPage from "./components/notFound";
import PrivateRoutes from "./components/privateRoutes";
import MyContextProvider from "./components/context/context";
import MoreInfo from "./components/netflixDashBoard/moreInfoPage";
import MarkedMovies from "./components/netflixDashBoard/markedMoviePage/markedMovies";
import Action from "./components/netflixDashBoard/movieGenres/action";
import Adventure from "./components/netflixDashBoard/movieGenres/adventure";
import Animation from "./components/netflixDashBoard/movieGenres/animation";
import Horror from "./components/netflixDashBoard/movieGenres/horror";
function App() {
  return (
    // context provider element
    <MyContextProvider>
      <Routes>
        {/* private routes  */}
        <Route element={<PrivateRoutes />}>
          <Route path='/netflixDashboard' element={<NetFlixDashBoard />} />
          <Route path='/sign_out' element={<SignOUt />} />
          <Route path='/informaiton/:id' element={<MoreInfo />} />
          <Route path='/markedMoviesPage' element={<MarkedMovies />} />
          <Route path='/action' element={<Action />} />
          <Route path='/adventure' element={<Adventure />} />
          <Route path='/horror' element={<Horror />} />
          <Route path='/animation' element={<Animation />} />
        </Route>
        {/* non private routes */}
        <Route path='/' element={<Home />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {/* footer input that i want to be appeard under all of my pages */}
      <Footer />
    </MyContextProvider>
  );
}

export default App;

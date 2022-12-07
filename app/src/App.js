import { Outlet } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
//import NavBar from './components/NavBar';
import GetHeader from './components/Header';
import Footer from "./components/Footer";


function App() {
  return (
    <GlobalProvider>
      <GetHeader />
      <h1>{process.env.REACT_APP_MYENVVAR}</h1>
      <Outlet />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
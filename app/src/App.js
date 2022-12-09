import { Outlet } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import GetHeader from './components/Header';
import Footer from "./components/Footer";


function App() {
  return (
    <GlobalProvider>
      <div className="d-flex justify-content-between flex-column vh-100">
        <GetHeader />
        <div className="overflow-scroll">
          <h1>{process.env.REACT_APP_MYENVVAR}</h1>
          <Outlet />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
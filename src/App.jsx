import "./App.css";

import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Home from "./pages/home";


function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Header />
        <div className="main-content">
          <Home />
        </div>
      </main>
    </div>
  );
}

export default App;
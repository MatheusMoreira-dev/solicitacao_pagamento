import "./App.css";
import FloatingNavBar from "./components/FloatingNavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-background w-full h-dvh overflow-hidden">
      <Home></Home>
      <FloatingNavBar></FloatingNavBar>
    </div>
  );
}

export default App;

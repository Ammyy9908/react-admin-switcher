import "./App.css";
import MenuBar from "./components/MenuBar";
import TopSection from "./components/TopSection";
import { useStateValue } from "./ServiceProvider";

function App() {
  const [dispatch] = useStateValue();

  const handleRemoveSelected = (e) => {
    if (e.target.classList.contains("App")) {
      dispatch({
        type: "SET_MENU_ITEM",
        menuitem: null,
      });
    }
  };
  return (
    <div className="App" onClick={handleRemoveSelected}>
      <TopSection />
      <MenuBar />
    </div>
  );
}

export default App;

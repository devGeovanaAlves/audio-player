import "./App.css";
import pictureProfile from "./assets/profile.jpg";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header picture={pictureProfile} name="Daniel" />
    </div>
  );
}

export default App;

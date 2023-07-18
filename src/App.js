import "./App.css";
import pictureProfile from "./assets/profile.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header picture={pictureProfile} name="Daniel" />
      <Footer />
    </div>
  );
}

export default App;

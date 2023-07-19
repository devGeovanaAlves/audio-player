import "./App.css";
import pictureProfile from "./assets/profile.jpg";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header picture={pictureProfile} name="Daniel" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

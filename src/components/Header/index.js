import "./style.css";
import logo from "../../assets/logo.svg";

function Header({ picture, name }) {
  return (
    <header>
      <img className="logo-image" src={logo} alt="Logotipo do app" />
      <div className="user-container">
        <img src={picture} alt="Foto do usuário" />
        <p>
          Bem vindo, <span>{name}</span>.
        </p>
      </div>
    </header>
  );
}

export default Header;

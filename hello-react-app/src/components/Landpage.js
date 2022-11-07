import "./style.css";
import ironLogo from "../images/ironhack-logo-xs.png";
import navbar from "../images/menu-top-xs.png";

function Landpage() {
  return (
    <div className="background">
      <div className="menu">
        <div>
          <img src={ironLogo} alt="logo ironhack" />
        </div>
        <div>
          <img src={navbar} alt="menu" />
        </div>
      </div>

      <div className="content">
        <h1 className="title">
          Say hello to
          <br />
          ReactJs
        </h1>
        <p className="text">
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a supe Ninja developer.
        </p>
      </div>

      <div className="btn">
        <button className="btn-awsome">Awsome!</button>
      </div>
    </div>
  );
}

export default Landpage;

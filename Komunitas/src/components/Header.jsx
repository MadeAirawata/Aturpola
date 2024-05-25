import { Link, useParams } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.svg";
import "../App.css";

function Header(props) {
  const AvatarImage = <img src={Avatar} className="avatar-img"></img>;
  const BtnText = "masuk";

  return (
    <>
      <nav className="nav">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="nav-group-link">
          <Link className="nav-link nav-link-hover" to="#">
            Makanan Sehat
          </Link>
          <Link className="nav-link nav-link-hover" to="#">
            Latihan Fisik
          </Link>
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav ? "nav-link-active" : ""
            }`}
            to="/komunitas-guest"
          >
            Komunitas
          </Link>
        </div>
        <Link className="login nav-link-hover">
          {props.name ? AvatarImage : BtnText}
        </Link>
      </nav>
    </>
  );
}

export default Header;

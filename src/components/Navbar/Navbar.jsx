import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Cart from "../../assets/cart.png";
import Heart from "../../assets/heartFilled.png";

const NavBar = () =>{
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <button onClick={() => navigate("/")}>
        <h1> e-Shop </h1>
      </button>
      {/* <div className = "icons">
        <button >
          <img src= { Cart } alt = "cart" />
        </button>
      </div> */}
      <div className={styles.icons}>
        <button onClick={() => navigate("/fav")}>
          <img src={Heart} alt="favorite" />
        </button>

        <button onClick={() => navigate("/cart")}>
          <img src={Cart} alt="cart" />
        </button>
      </div>
    </div>
  );
}

export default NavBar
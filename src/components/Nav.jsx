import Logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import store from "../assets/images/store.svg";

import "../assets/styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="applelog" />
          </li>
          <div className="list_components">
            <li>
              <a href="#" className="styled_links">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                Mac
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                iPad
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                iPhone
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                Watch
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                AirPods
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                {" "}
                TV & Home
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                Entertainment
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                Accessoeries{" "}
              </a>
            </li>
            <li>
              <a href="#" className="styled_links">
                Support{" "}
              </a>
            </li>
          </div>
          <div className="list_components">
            <li>
              <img src={search} alt="search" />
            </li>
            <li>
              <img src={store} alt="store" />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

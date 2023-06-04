import Iphone14 from "../assets/images/iphone-14.jpg";

import "../assets/styles/Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="jumbotro-title">New</h2>
      <img src={Iphone14} alt="Iphone 14 pro" className="jumbotron-logo" />
      <p className="jumbotron-text">Big and bigger.</p>
      <span className="jumbotron-desc">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
    </div>
  );
};

export default Jumbotron;

import Iphone14 from "../assets/images/iphone-14.jpg";
import IphoneHold from "../assets/images/iphone-hand.png";
import "../assets/styles/Jumbotron.css";

const Jumbotron = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section-container");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="jumbotro-title">New</h2>
      <img src={Iphone14} alt="Iphone 14 pro" className="jumbotron-logo" />
      <p className="jumbotron-text">Big and bigger.</p>
      <span className="jumbotron-desc">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>

      <ul className="buttons">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a href="#" className="learn--more" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>

      <img src={IphoneHold} alt="iphone img" className="iphonehold" />
    </div>
  );
};

export default Jumbotron;

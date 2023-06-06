import "../assets/styles/SoundSection.css";

const SoundSection = () => {
  const handleLearnMoreTwo = () => {
    const element = document.querySelector(".display_section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sound-section-container wrapper">
      <div className="sound-section-body">
        <div className="sound-section-content content">
          <h2>New Sound System</h2>
          <p>Teel the base.</p>
          <span>From $41.62/mo. for 24 mo. or $999 before trade-in</span>
          <ul className="buttons">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <a href="#" className="learn--more" onClick={handleLearnMoreTwo}>
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;

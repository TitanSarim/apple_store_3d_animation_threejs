import "../assets/styles/DisplaySection.css";

const DisplaySection = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="display_section wrapper">
      <div className="display_section_content">
        <h2>New</h2>
        <p>Brilliant.</p>
        <span>A display that's up to 2x brigther in the sun</span>
        <button className="button">Try me!</button>
        <button className="goto-top" onClick={handleScrollToTop}>
          TOP
        </button>
      </div>
    </div>
  );
};

export default DisplaySection;

import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <TextExpander
        maxChars={100}
        showMoreText="MOOOORE"
        showLessText="ENOUGH"
        isExpandedByDefault={true}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit
        perferendis ea atque libero maiores labore vero illo nobis! Sequi, id
        beatae voluptas in accusamus earum fuga ut animi cupiditate, nemo
        adipisci harum placeat impedit error ipsum, pariatur assumenda
        exercitationem a provident sit aliquam enim laudantium odit incidunt.
        Voluptatibus, vel.
      </TextExpander>
    </>
  );
}

export default App;

const TextExpander = ({
  children,
  maxChars = 50,
  isExpandedByDefault = false,
  showMoreText = "Show More",
  showLessText = "Show Less",
}) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);
  const showBtn = children.length !== maxChars;
  const showBtnText = isExpanded ? showLessText : showMoreText;
  const handleExpand = (e) => {
    e.preventDefault();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="box">
      {isExpanded ? children : children.slice(0, maxChars)}
      {showBtn && (
        <a href="#" onClick={handleExpand}>
          {showBtnText}
        </a>
      )}
    </div>
  );
};

TextExpander.propTypes = {
  maxChars: PropTypes.number,
  isExpandedByDefault: PropTypes.bool,
  showMoreText: PropTypes.string,
  showLessText: PropTypes.string,
};

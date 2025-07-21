import React from "react";

const AnimatedTitle = ({ title, containerClass }) => {
  return (
    <div className={`animated-title ${containerClass}`}>
      {title.split("<b />").map((line, index) => {
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>;
      })}
    </div>
  );
};

export default AnimatedTitle;

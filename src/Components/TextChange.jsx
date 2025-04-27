import { useState, useEffect } from "react";
const TextChange = () => {
  const texts = ["Hi, I'm Ayan Bate", "Hi, I'm a Developer", "Hi, I'm a Computer Engineer"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      if (endValue >= texts[index].length && isForward) {
        setIsForward(false); // Stop adding characters once the text is complete
    } else if (endValue === 0 && !isForward) {
        setIsForward(true); // Start adding characters once you are back at 0
        setIndex((prev) => (prev + 1) % texts.length); // Move to the next text
    }
    
    }, 80);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;

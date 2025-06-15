import { useEffect, useState } from "react";

const Titleblinker = ({ blinkTitle = "Click Me 👀", intervalTime = 1000 }) => {
  const [originalTitle, setOriginalTitle] = useState(document.title);
  const [blinkInterval, setBlinkInterval] = useState(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        let showing = false;
        const interval = setInterval(() => {
          document.title = showing ? blinkTitle : originalTitle;
          showing = !showing;
        }, intervalTime);
        setBlinkInterval(interval);
      } else {
        clearInterval(blinkInterval);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(blinkInterval);
    };
  }, [blinkTitle, intervalTime, originalTitle, blinkInterval]);

  return null; // It's a background component, no UI
};

export default Titleblinker;

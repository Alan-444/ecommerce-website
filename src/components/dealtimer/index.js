// import React from "react";
// import styles from "./style.module.css";

// const DealTimer = () => {
//   return (
//     <div className={styles.timerContainer}>
//       <div>Until the end of the sale: </div>
//       <div className={`${styles.timer}`}>
//         <span>47</span> days <span>06</span> hours <span>59</span> minutes
//         <span>59</span>
//         sec.
//       </div>
//     </div>
//   );
// };

// export default DealTimer;

import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const DealTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timerContainer}>
      <div>Until the end of the sale: </div>
      <div className={`${styles.timer}`}>
        <span>{timeLeft.days}</span> days
        <span>{timeLeft.hours}</span> hours
        <span>{timeLeft.minutes}</span> minutes
        <span>{timeLeft.seconds}</span> sec.
      </div>
    </div>
  );
};

export default DealTimer;

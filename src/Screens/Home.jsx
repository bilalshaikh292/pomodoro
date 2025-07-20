import { useEffect, useState } from "react";
import Digit from "../Components/Digit";
import FlipDigit from "../Components/Digit";

function Home() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
    };

    updateTime(); // initialize immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center h-screen bg-black">
        <div className="w-full mr-[5%] ml-[5%] text-white h-[350px] flex items-center justify-center">

            <FlipDigit digit={String(hours).padStart(2,'0')[0]} />
            <FlipDigit digit={String(hours).padStart(2,'0')[1]} />
                      <div className="mx-2">
                        <span className="text-[14vw]">:</span>
                        </div>
            <Digit digit={String(minutes).padStart(2,'0')[0]} />
            <Digit digit={String(minutes).padStart(2,'0')[1]} />
                      <div className="mx-2">
                        <span className="text-[14vw]">:</span>
                        </div>
            <Digit digit={String(seconds).padStart(2,'0')[0]} />
            <Digit digit={String(seconds).padStart(2,'0')[1]} />

        </div>
      </div>
    </>
  );
}
export default Home;

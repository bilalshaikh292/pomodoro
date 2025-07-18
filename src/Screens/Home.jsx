import { useEffect, useState } from "react";
import Digit from "../Components/Digit";

function Home(){

    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    
  useEffect(() => {
    const updateTime = () => {
      const now = new Date(); // <-- get new time each tick
      setHours(now.getHours());
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
    };

    updateTime(); // initialize immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);




    
    return(
        <>
        <div className="w-full flex items-center justify-center h-screen bg-black">
            <div className="w-full mr-[5%] ml-[5%] text-white h-[300px] bg-red-500 flex items-center justify-center">
{hours < 10 ? (
    <>
    <div className="bg-[#505252] w-[16.66%] h-full text-white">
  <div className="h-full w-full border-2 border-black flex items-center justify-center overflow-hidden">
    <span className="text-[13vw] leading-none">0</span>
  </div>
</div>

<div className="bg-[#505252] w-[16.66%] h-full text-white">
  <div className="h-full w-full border-2 border-black flex items-center justify-center overflow-hidden">
    <span className="text-[13vw] leading-none">{hours}</span>
  </div>
</div>
    </>
)
 : 
 hours
 }
 :
 {minutes < 10 ?
   (
    <>
    <div className="bg-[#505252] w-[16.66%] h-full text-white">
  <div className="h-full w-full border-2 border-black flex items-center justify-center overflow-hidden">
    <span className="text-[13vw] leading-none">0</span>
  </div>
</div>

<div className="bg-[#505252] w-[16.66%] h-full text-white">
  <div className="h-full w-full border-2 border-black flex items-center justify-center overflow-hidden">
    <span className="text-[13vw] leading-none">{minutes}</span>
  </div>
</div>
    </>
   )
  :
   minutes
   }:{seconds < 
   10 ? 
   (<>
    <div className="bg-[#505252] w-[16.66%] h-full text-white">
  <div className="h-full w-full border-2 border-black flex items-center justify-center overflow-hidden">
    <span className="text-[13vw] leading-none">0</span>
  </div>
</div>

<div className="bg-[#505252] w-[16.66%] h-full text-white">
  <div className="h-full w-full border-2 border-black flex items-center justify-center overflow-hidden">
    <span className="text-[13vw] leading-none">{seconds}</span>
  </div>
</div>
    </>)
   :
    seconds}

  
            </div>
        </div>
        </>
    )
}
export default Home;
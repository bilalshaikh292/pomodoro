function Digit({digit}){
    return(
              <div className="bg-[#404040] w-[15.55%] h-full rounded-4xl outline-none border-none text-white shadow-xl shadow-[#555555] mx-5">
                <div className="h-full w-full flex items-center justify-center overflow-hidden">
                  <span className="text-[13vw] font-bold leading-none">{digit}</span>
                </div>
              </div>
    );
};

export default Digit;
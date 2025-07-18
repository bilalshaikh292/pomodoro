function Digit(digit){
    return(
            <div className="bg-[#505252] w-[16.66%] h-full text-white">
      <div className="h-full w-full border-2 border-black flex items-center justify-center overflow-hidden">
        <span className="text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-none">
          {digit}
        </span>
      </div>
    </div>
    );
};

export default Digit;
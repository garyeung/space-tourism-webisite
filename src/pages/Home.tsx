
function Home(){

    return (
        <HomeMain />
    );
}

export default Home;

function HomeMain(){

    return(
          <div className="p-6 md:px-10 md:py-32 lg:px-0">
              <HomeHero />
          </div>
    );
}

function HomeHero(){
    return(
           <div className="grid grid-rows-2 lg:grid-cols-2 gap-6 md:gap-12 max-w-[512px] m-auto lg:max-w-6xl lg:gap-0">
            <HomeText/>
            <HomeButton/>
           </div>
    );
}

function HomeText(){
    return (
         <div className="text-center lg:col-start-1 lg:row-start-2 lg:text-left">
            <p className="font-sans text-base tracking-[0.15em] text-BLUE-300 uppercase md:text-[28px] md:tracking-[4px]">So, you want to travel to</p>
            <h1 className="font-serif text-[80px] text-white uppercase md:text-[144px]">space</h1>
            <p className="font-sans leading-[1.8] text-BLUE-300 text-[15px] md:text-base">Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
         </div>
    )
}

function HomeButton(){
    return (
        <div className="w-full flex justify-center items-center lg:justify-end lg:col-start-2 lg:row-start-2">
            <button className="w-36 h-36 md:w-[272px] md:h-[272px] rounded-full bg-white text-BLUE-900 font-serif text-lg md:text-[32px] uppercase transition-all duration-500 hover:text-opacity-50 outline outline-transparent outline-offset-0 hover:outline-[80px] hover:outline-[rgba(255,255,255,0.1)] md:hover:outline-[88px]">explore</button>

        </div>
    );
}

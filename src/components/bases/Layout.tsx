
interface Props {
    backgroundImgMobile: string,
    backgroundImgTable: string,
    backgroundImgdesktop: string,
    slot: React.ReactNode
}


const Layout = ({backgroundImgMobile: mobileImg, backgroundImgTable: tabletImg, backgroundImgdesktop: desktopImg, slot: children}: Props) => {
    
    return (
        <div className="relative w-full">
          <div>
              <img className="md:hidden" 
              src={mobileImg}
              alt=""
              />
              <img 
              className="hidden md:block"
              src={tabletImg}
              alt=""
              />
              <img 
              className="hiiden lg:block"
              src={desktopImg}
              alt=""
              />
          </div>
          <div 
          className="
          absolute
          w-full
          h-full
          top-0
          left-0
          ">
            {children}
          </div>
        </div>
    )
}

export default Layout;
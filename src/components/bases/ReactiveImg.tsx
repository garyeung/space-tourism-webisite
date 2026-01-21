import { useEffect, useRef, useState } from "react"

interface Props {
    webSrc: string,
    fallbackSrc: string,
    alt: string,
    className?: string
}

const ReactiveImg = ({webSrc, fallbackSrc, alt,className}:Props) => {
    const [loading, setLoading] = useState(true);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleLoad = () => {
        setLoading(false);
    }
   
    useEffect(()=> {
        if(imgRef.current?.complete) {
            handleLoad();
        }
    },[])

    return (
    <div className={`relative w-full h-full flex justify-center items-center`}>
      {loading&&<div className=" absolute w-full h-full grid justify-center items-center">
        <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      </div>}

      <picture>
        <source srcSet={webSrc} type="image/webp" />
        <img 
        ref={imgRef}
        src={fallbackSrc} alt={alt} 
        onLoad={handleLoad}
        className={`
          ${loading? "opacity-0": "opacity-100"}
          object-cover
          transition-opacity
          duration-500
          m-auto
          ${className || ""}
        `}
         />

      </picture>
    </div>
    )
}

export default ReactiveImg;
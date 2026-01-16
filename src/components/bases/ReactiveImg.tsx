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
      {loading&&<div className=" w-12 h-12 border-4 border-white/50 rounded-full animate-spin bg-white"></div>}

      <picture>
        <source srcSet={webSrc} type="image/webp" />
        <img 
        ref={imgRef}
        src={fallbackSrc} alt={alt} 
        onLoad={handleLoad}
        className={`
          ${loading? "opacity-0": "opacity-100"}
          w-full
          h-full  
          object-cover
          transition-opacity
          duration-500
          ${className || ""}
        `}
         />

      </picture>
    </div>
    )
}

export default ReactiveImg;
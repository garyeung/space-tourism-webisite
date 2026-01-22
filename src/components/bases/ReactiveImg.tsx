import { useLayoutEffect, useRef, useState } from "react";
import Spinner from "@/components/bases/Spinner";

interface Props {
    webSrc: string,
    fallbackSrc: string,
    alt: string,
    className?: string,
    lazy?: boolean
}

const ReactiveImg = ({webSrc, fallbackSrc, alt, className, lazy = true}:Props) => {
    const [loading, setLoading] = useState(true);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleLoad = () => {
        setLoading(false);
    }

    useLayoutEffect(() => {
        if (imgRef.current?.complete) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [webSrc, fallbackSrc])
   
    return (
    <div className={`relative w-full h-full flex justify-center items-center`}>
      {loading && 
      <div className="absolute w-full h-full grid justify-center items-center">
        <Spinner />
      </div>
      }

      <picture>
        <source srcSet={webSrc} type="image/webp" />
        <img 
        ref={imgRef}
        src={fallbackSrc} alt={alt} 
        onLoad={handleLoad}
        onError={handleLoad}
        loading={lazy? "lazy": "eager"}
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
import { useEffect, useRef, useState } from "react"

interface Props {
    url: string,
    alt: string
}

const ReactiveImg = ({url,alt}:Props) => {
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
    <div className={`${loading?"bg-white animate-spin":""}`}>
      <img 
      ref={imgRef}
      src={url} alt={alt} 
      className={`
        ${loading? "opacity-0": "opacity-100"}
        w-full
        h-full  
        object-cover
        transition-opacity
        duration-500
      `}
       />
    </div>
    )
}

export default ReactiveImg;
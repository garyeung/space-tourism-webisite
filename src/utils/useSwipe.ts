import { TouchEvent, useState } from "react";

interface SwipeOutput {
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchEnd: () => void;
}

export default function useSwipe(swipeLeft:() => void, swipeRight: () => void): SwipeOutput {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const miniSwipeDistance = 20;

    const onTouchStart = (e:TouchEvent) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e:TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const onTouchEnd = () => {
        if(!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;

        const isLeftSwipe = distance > miniSwipeDistance;

        const isRightSwipe = distance < -miniSwipeDistance;

        if(isLeftSwipe) {
            swipeLeft();
        }

        if(isRightSwipe) {
            swipeRight()
        }
    }

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
    }
}

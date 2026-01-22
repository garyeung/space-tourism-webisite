import { WheelEvent, useCallback, useRef } from "react";

interface ScrollOutput {
    onWheel: (e: WheelEvent) => void;
}

export default function useScroll(scrollUp: () => void, scrollDown: () => void, delay: number = 500): ScrollOutput {
    const lastScrollTime = useRef(0);

    const onWheel = useCallback((e:WheelEvent) => {
        const now = new Date().getTime()

        if (now - lastScrollTime.current < delay) {
            return;
        }
        lastScrollTime.current = now;

        if (e.deltaY < 0) {
            scrollUp();
        }else {
            scrollDown();
        }

    }, [scrollUp,scrollDown,delay])
    return {
        onWheel
    }
}

import { useEffect, useRef } from "react";

function useInterval(callback, delay) {
    const saveadCallback = useRef();

    //Remember the latest callback.
    useEffect(() => {
        saveadCallback.current = callback;
    }, [callback])

    // Set up the interval
    useEffect(() => {
        function tick() {
            saveadCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
}

export default useInterval
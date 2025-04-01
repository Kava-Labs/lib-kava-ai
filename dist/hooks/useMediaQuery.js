import { useEffect, useState } from "react";
export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    useEffect(() => {
        const matchQuery = window.matchMedia(query);
        const onChange = (e) => {
            setMatches(e.matches);
        };
        matchQuery.addEventListener("change", onChange);
        return () => matchQuery.removeEventListener("change", onChange);
    }, [query]);
    return matches;
};

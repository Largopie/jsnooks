export const useHover = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("mouseenter", onClick);
    }
    return () => {
      if (element.current) {
        console.log("hi");
        element.current.removeEventListener("mouseenter", onClick);
      }
    };
  }, []);

  return typeof onClick !== "function" ? undefined : element;
};

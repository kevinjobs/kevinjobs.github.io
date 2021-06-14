import React from 'react';

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      { children }
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
}

const breakpoint = 720;

const useDevice = () => {
  let device = 'desktop';

  const { width } = React.useContext(viewportContext);

  if (width < breakpoint) {
    device = 'mobile';
  } else {
    device = 'desktop';
  }

  return device;
}

export {
  ViewportProvider,
  useViewport,
  breakpoint,
  useDevice
}
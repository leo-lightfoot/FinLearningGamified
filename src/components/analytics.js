import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const Analytics = ({ trackingId, basePath, gameStartRoute, gameEndRoute }) => {
  const location = useLocation(); // Hook to access location object

  const getNormalizedPathname = (pathname) => {
    if (pathname.startsWith(basePath)) return pathname.replace(basePath, "");
    return pathname;
  };

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(trackingId);

    // Track page view on initial render
    const normalizedPathname = getNormalizedPathname(location.pathname);
    ReactGA.pageview(normalizedPathname);
    ReactGA.event({ category: "Game", action: "Game Started" });
  }, [trackingId, location.pathname]);

  useEffect(() => {
    // Track specific game events on route changes
    const normalizedPathname = getNormalizedPathname(location.pathname);
    if (normalizedPathname === gameStartRoute) {
      ReactGA.event({ category: "Game", action: "Game Restarted" });
    } else if (normalizedPathname === gameEndRoute) {
      ReactGA.event({ category: "Game", action: "Game Completed" });
    }
  }, [location.pathname, gameStartRoute, gameEndRoute]);

  return null;
};

export default Analytics;

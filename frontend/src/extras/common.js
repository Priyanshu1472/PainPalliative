import React from "react";

// Device detection and responsive utilities
export const getDeviceInfo = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    isMobile: width <= 768,
    isTablet: width > 768 && width <= 1024,
    isDesktop: width > 1024,
    isLargeDesktop: width > 1440,
    isSmallMobile: width <= 480,
    isLandscape: width > height,
    isPortrait: height > width,
  };
};

// Breakpoints for consistent responsive design
export const breakpoints = {
  xs: 320, // Extra small devices (small phones)
  sm: 480, // Small devices (phones)
  md: 768, // Medium devices (tablets)
  lg: 1024, // Large devices (desktops)
  xl: 1200, // Extra large devices
  xxl: 1440, // XX-Large devices
};

// Media query helper functions
export const mediaQueries = {
  xs: `(max-width: ${breakpoints.sm - 1}px)`,
  sm: `(min-width: ${breakpoints.sm}px) and (max-width: ${
    breakpoints.md - 1
  }px)`,
  md: `(min-width: ${breakpoints.md}px) and (max-width: ${
    breakpoints.lg - 1
  }px)`,
  lg: `(min-width: ${breakpoints.lg}px) and (max-width: ${
    breakpoints.xl - 1
  }px)`,
  xl: `(min-width: ${breakpoints.xl}px) and (max-width: ${
    breakpoints.xxl - 1
  }px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,

  // Utility queries
  mobile: `(max-width: ${breakpoints.md - 1}px)`,
  tablet: `(min-width: ${breakpoints.md}px) and (max-width: ${
    breakpoints.lg - 1
  }px)`,
  desktop: `(min-width: ${breakpoints.lg}px)`,
  touch: "(hover: none) and (pointer: coarse)",
  hover: "(hover: hover) and (pointer: fine)",
};

// Get responsive values based on screen width
export const getResponsiveValue = (
  values,
  currentWidth = window.innerWidth
) => {
  if (currentWidth >= breakpoints.xxl && values.xxl !== undefined)
    return values.xxl;
  if (currentWidth >= breakpoints.xl && values.xl !== undefined)
    return values.xl;
  if (currentWidth >= breakpoints.lg && values.lg !== undefined)
    return values.lg;
  if (currentWidth >= breakpoints.md && values.md !== undefined)
    return values.md;
  if (currentWidth >= breakpoints.sm && values.sm !== undefined)
    return values.sm;
  if (values.xs !== undefined) return values.xs;

  // Fallback to the first available value
  return values[Object.keys(values)[0]];
};

// Custom hook for window dimensions (React hook)
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(() => {
    if (typeof window !== "undefined") {
      return getDeviceInfo();
    }
    return {
      width: 1024,
      height: 768,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
    };
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getDeviceInfo());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

// Debounced resize handler
export const useDebounceResize = (callback, delay = 250) => {
  React.useEffect(() => {
    let timeoutId;

    const debouncedCallback = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };

    window.addEventListener("resize", debouncedCallback);

    return () => {
      window.removeEventListener("resize", debouncedCallback);
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
};

// Get font sizes based on device
export const getFontSizes = (device) => {
  const fontSizes = {
    xs: {
      h1: "1.8rem",
      h2: "1.5rem",
      h3: "1.3rem",
      body: "0.9rem",
      small: "0.8rem",
      nav: "0.85rem",
    },
    sm: {
      h1: "2rem",
      h2: "1.7rem",
      h3: "1.4rem",
      body: "0.95rem",
      small: "0.85rem",
      nav: "0.9rem",
    },
    md: {
      h1: "2.2rem",
      h2: "1.9rem",
      h3: "1.5rem",
      body: "1rem",
      small: "0.9rem",
      nav: "0.95rem",
    },
    lg: {
      h1: "2.5rem",
      h2: "2.1rem",
      h3: "1.7rem",
      body: "1.1rem",
      small: "0.95rem",
      nav: "1rem",
    },
    xl: {
      h1: "2.8rem",
      h2: "2.3rem",
      h3: "1.9rem",
      body: "1.15rem",
      small: "1rem",
      nav: "1.05rem",
    },
    xxl: {
      h1: "3rem",
      h2: "2.5rem",
      h3: "2rem",
      body: "1.2rem",
      small: "1.05rem",
      nav: "1.1rem",
    },
  };

  return getResponsiveValue(fontSizes, device.width);
};

// Get spacing values based on device
export const getSpacing = (device) => {
  const spacing = {
    xs: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
      xxl: "2rem",
    },
    sm: {
      xs: "0.3rem",
      sm: "0.6rem",
      md: "0.9rem",
      lg: "1.2rem",
      xl: "1.8rem",
      xxl: "2.4rem",
    },
    md: {
      xs: "0.4rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      xxl: "3rem",
    },
    lg: {
      xs: "0.5rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "3rem",
      xxl: "4rem",
    },
    xl: {
      xs: "0.6rem",
      sm: "1.2rem",
      md: "1.8rem",
      lg: "2.4rem",
      xl: "3.6rem",
      xxl: "4.8rem",
    },
    xxl: {
      xs: "0.75rem",
      sm: "1.5rem",
      md: "2rem",
      lg: "3rem",
      xl: "4rem",
      xxl: "6rem",
    },
  };

  return getResponsiveValue(spacing, device.width);
};

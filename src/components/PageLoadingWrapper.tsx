import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface PageLoadingWrapperProps {
  children: React.ReactNode;
}

const PageLoadingWrapper: React.FC<PageLoadingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 z-50">
        <div className="flex flex-col items-center">
          <LoadingSpinner size="lg" color="white" />
          <p className="mt-4 text-white text-lg font-medium animate-pulse">
            Loading Microinstruments Co.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoadingWrapper;

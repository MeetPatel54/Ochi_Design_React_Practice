import React, { useState, useEffect } from 'react';

const DesktopOnly = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isDesktop) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-center px-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">📵 Mobile Not Supported</h2>
          <p className="text-lg">
            This website is only accessible on desktop devices.
            <br />
            Please switch to a larger screen to view the content.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default DesktopOnly;

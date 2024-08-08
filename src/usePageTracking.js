import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPage = () => {
      window.gtag('config', 'G-XFQ5V36Q57', {
        page_path: location.pathname,
      });
    };

    trackPage();
  }, [location.pathname]);
};

export default usePageTracking;
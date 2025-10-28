import { useState, useEffect } from 'react';

// TypeScript declaration for build timestamp injected by Vite
declare const __BUILD_TIMESTAMP__: string;

function TimeWidget() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Function to update current time in Vancouver timezone
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Vancouver',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setCurrentTime(timeString);
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Format build timestamp to be more readable
  const formatBuildTime = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="time-widget">
      <div className="time-widget-row">
        <span className="time-widget-label">diwen's time:</span>
        <span className="time-widget-value">{currentTime.toLowerCase()}</span>
      </div>
      <div className="time-widget-row">
        <span className="time-widget-label">last updated:</span>
        <span className="time-widget-value">{formatBuildTime(__BUILD_TIMESTAMP__)}</span>
      </div>
    </div>
  );
}

export default TimeWidget;

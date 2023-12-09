// Hook used to detect clicking outside the specified component to perform a specific action

import * as React from 'react';

export const useOutsideAlerter = (
  ref: React.RefObject<HTMLDivElement>,
): boolean => {
  const [isOutside, setIsOutside] = React.useState<boolean>(false);
  React.useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        setIsOutside(true);
      } else {
        setIsOutside(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return isOutside;
};

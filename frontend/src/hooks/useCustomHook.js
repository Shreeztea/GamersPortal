import { useState, useEffect } from 'react';

const useCustomHook = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Example effect
    setState('Hook Initialized');
  }, []);

  return state;
};

export default useCustomHook;

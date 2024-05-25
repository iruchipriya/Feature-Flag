import React, { useEffect, useState, createContext, useContext } from 'react';

const FeatureFlagContext = createContext();

export const useFeatureFlag = () => {
  const context = useContext(FeatureFlagContext);
  if (!context) {
    throw new Error('cannot be used');
  }
  return context;
};

const FFProvider = ({ children }) => {
  const [FF, setFF] = useState({});

  const fetchFeatureflags = () => {
    fetch('./ff.json')
      .then((resp) => {
        return resp.json();
      })
      .then((flags) => {
        console.log(flags, 'flagsuuu');
        setFF(flags);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  useEffect(() => {
    fetchFeatureflags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={FF}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export default FFProvider;

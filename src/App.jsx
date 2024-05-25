import React from 'react';

import { useFeatueFlag } from './FeatureFlag';

const App = () => {
  const featureflag = useFeatueFlag();
  return (
    <div>
      {featureflag.applePay.enabled && <h1>Apple pay is enabled </h1>}
      {featureflag.gpay.enabled && <h1>G pay is enabled. </h1>}
    </div>
  );
};

export default App;

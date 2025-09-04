// components/FlagCountry.jsx
import React from 'react';
import Flag from 'react-world-flags';

const FlagCountry = ({ countryCode }) => {
  return (
    <div style={{ display: 'inline-block', textAlign: 'center' }}>
      <Flag code={countryCode} style={{ width: '25px', height: '20px' }} />
      <div style={{ marginTop: '5px', fontSize: '0.8rem' }}>
        {/* {countryCode}  */}
      </div>
    </div>
  );
};

export default FlagCountry;

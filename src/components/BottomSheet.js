import React from 'react';
import '../styles/BottomSheet.scss';

const BottomSheet = ({ children }) => {
  return (
    <div className="bottom-sheet">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;

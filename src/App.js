import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';
import BottomSheet from './components/BottomSheet';
import GSTInfo from './components/GSTInfo';
import './styles/index.scss';

function App() {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const checkViewport = () => {
    setIsMobilePortrait(window.innerWidth <= 600 && window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button onClick={openModal} className='button'>Open GST Info</button>

      {isModalOpen && (
        <>
          {isMobilePortrait ? (
            <BottomSheet>
              <GSTInfo 
                gstPaid={`1,10,000`} 
                userAmount={780} 
                totalAmount={1000} 
                platformPaid={220}
                onClose={() => setIsModalOpen(false)}
             />
            </BottomSheet>
          ) : (
            <Modal onClose={() => setIsModalOpen(false)}>
              <GSTInfo gstPaid={`1,10,000`} userAmount={780} totalAmount={1000} platformPaid={220} onClose={() => setIsModalOpen(false)} />
            </Modal>
          )}
        </>
      )}
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';
import BottomSheet from './components/BottomSheet';
import GSTInfo from './components/GSTInfo';
import './styles/index.scss';

function App() {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Initially set to false, so the modal is closed

  const checkViewport = () => {
    setIsMobilePortrait(window.innerWidth <= 600 && window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Function to handle the opening of the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Button to open the modal */}
      <button onClick={openModal} className='button'>Open GST Info</button>

      {/* Modal is shown only if isModalOpen is true */}
      {isModalOpen && (
        <>
          {isMobilePortrait ? (
            <BottomSheet>
              <GSTInfo 
                gstPaid={110000} 
                userAmount={780} 
                totalAmount={1000} 
                platformPaid={220}
                onClose={() => setIsModalOpen(false)} // Close modal when onClose is triggered
             />
            </BottomSheet>
          ) : (
            <Modal onClose={() => setIsModalOpen(false)}>
              <GSTInfo gstPaid={110000} userAmount={780} totalAmount={1000} platformPaid={220} onClose={() => setIsModalOpen(false)} />
            </Modal>
          )}
        </>
      )}
    </>
  );
}

export default App;

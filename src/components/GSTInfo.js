import React from 'react';
import '../styles/GSTInfo.scss';
import handIcon from '../assets/hand_icon.svg';
import warningIcon from '../assets/warning_icon.svg';
import arrowIcon from '../assets/arrow_icon.svg';
import rightTurn from '../assets/rightturn.svg';
import leftTurn from '../assets/leftturn.svg';
import line from '../assets/line.svg';

const GSTInfo = ({ gstPaid, userAmount, totalAmount, platformPaid,onClose }) => {
  return (
    <>
    <div className="headerTop">
    <div className="header">GST? No Worries!</div>
    <div className="header-close" onClick={onClose}>
        <span></span>
        <span></span>
    </div>
    </div>
    <div className="gst-info">
        <div className="gstInforow">
                <img src={warningIcon} alt='warningIcon'/>
            <p className="sub-header">
            Starting 1st October 2023, 28% GST is being charged by the Government on your deposits.
            </p>
        </div>

      <div className="highlight">
        <h3><img src={handIcon} alt='handIcon'/> <strong>100% Govt. GST paid by RummyCircle</strong></h3>
      </div>

      <div className="gst-summary">
        <div className="gst-summary1">
            <h3>GST benefits earned so far</h3>
            <h2 className="benefit-amount">₹{gstPaid}</h2>
        </div>
        <h4>How GST on deposit works?</h4>
        <div className="amount-details">
          <div className="pay">
            <p>
                You Pay 
            </p>
            <h4><strong>₹{totalAmount}</strong></h4>
            <span>Inclusive of Govt. GST</span>
          </div>
          <div className="details">
            <div className="amount-item taxx">
                <h3>₹{userAmount} </h3>
                <p>Goes to your wallet</p>
                <div className="arrowtTurn1">
                        <img src={leftTurn} alt='arrowIcon'/>
                </div>
                <div className="arrowtTurn3">
                        <img src={line} alt='arrowIcon'/>
                </div>
            </div>
            <div className="amount-item tax">
               <h3> ₹{totalAmount - userAmount}</h3> 
                <p>Govt. GST on your deposit</p>
                <div className="arrowtTurn2">
                        <img src={rightTurn} alt='arrowIcon'/>
                </div>
            </div>
          </div>
          <div className='bottom-text'>
                <div className="platform-paid">
                    <h5 className=''>₹{platformPaid}</h5>
                    <p> <img src={handIcon} alt='handIcon'/>GST paid by <strong>RummyCircle</strong> on your behalf</p>
                    <div className="arrowIcon">
                        <img src={arrowIcon} alt='arrowIcon'/>
                    </div>
                </div>
                <div className="final-message">
                    <h3>You Get</h3>
                    <h4><strong>₹{totalAmount}</strong></h4>
                    <span>in your wallet</span>  
                </div>
          </div>
        </div>
      </div>
    </div>

    </>
);
};

export default GSTInfo;

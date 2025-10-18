import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';

const Qzone = () => {
  return (
    <div className="bg-base-200 py-3 px-2">
      <h2 className="font-bold">Q-Zone</h2>

      <div className="space-y-4 mt-3">
        <img src={swimmingImg} alt="" className="w-full" />
        <img src={classImg} alt="" className="w-full" />
        <img src={playImg} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Qzone;

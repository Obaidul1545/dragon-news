import React from 'react';
import SocialLogin from '../SocialLogin';
import Qzone from './Qzone';
import FindUs from './FindUs';
import img from '../../assets/bg.png';

const RightAside = () => {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <FindUs></FindUs>
      <Qzone></Qzone>
      <div>
        <img src={img} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default RightAside;

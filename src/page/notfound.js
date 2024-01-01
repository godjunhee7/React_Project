import React from 'react';
import { useLocation } from 'react-router-dom';
import './notfound.css'


const Notfound = () => {
    const locations = useLocation();
    return (
      <div className='notfoundBorder'>
        <h3>다음과 같은 페이지를 찾을 수 없습니다. : {locations.pathname}</h3>
      </div>
    );
  };
  export default Notfound;
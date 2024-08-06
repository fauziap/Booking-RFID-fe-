import React from 'react';

const Button = ({nama, warna}) => {
  return (
    <button className={`${warna} p-3 rounded-lg font-semibold text-lg text-white w-full`}>
      {nama}
    </button>
  );
}; 

export default Button;

import React from 'react';
import ButtonSubmit from './Components/submitButton';

const HomeComponents = () => {
  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div>
        <p className="text-5xl font-mono font-bold pb-2">Selamat datang</p>
        <p className="text-5xl font-mono font-bold pb-4">Warga Keyuma</p>
        <ButtonSubmit/>
      </div>
    </div>
  );
}

export default HomeComponents;

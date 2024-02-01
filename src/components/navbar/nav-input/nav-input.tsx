'use client';

import './nav-input.css';

interface NavInputProps {
  text: string;
}

const NavInput: React.FC<NavInputProps> = ({ text }) => {
  return (
    <div>
      <label htmlFor='navinput'>{text}</label> <br />
      <input type='text' />
    </div>
  );
};

export default NavInput;

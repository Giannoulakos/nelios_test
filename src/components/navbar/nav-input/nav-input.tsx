'use client';

import './nav-input.css';
import { useState, useEffect } from 'react';
import { useAppContext } from '@/context';

interface NavInputProps {
  text: string;
  type: string;
}

const NavInput: React.FC<NavInputProps> = ({ text, type }) => {
  const [value, setValue] = useState<string>('');

  const { setCity } = useAppContext();

  useEffect(() => {
    if (value) {
      document.getElementById(`id-${text}`)!.style.display = 'block';
      document.getElementById(`label-${text}`)!.style.fontWeight = '600';
      if (type == 'city') {
        setCity(value);
      }
    } else {
      document.getElementById(`label-${text}`)!.style.fontWeight = '';
      document.getElementById(`id-${text}`)!.style.display = '';
      if (type == 'city') {
        setCity(undefined);
      }
    }
  }, [value]);

  return (
    <div className='w-25 cont'>
      <label htmlFor='navinput' id={`label-${text}`}>
        {text}
      </label>
      <br />
      <input
        id={`id-${text}`}
        placeholder={text}
        className='bg-transparent outline-none nav-input w-25'
        type='text'
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default NavInput;

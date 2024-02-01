import { useAppContext } from '@/context';
import { useEffect, useState } from 'react';

interface InputProps {
  placeholder: string;
  label: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ placeholder, label, id }) => {
  const { setMinPrice, setMaxPrice } = useAppContext();
  const [temp, setTemp] = useState<number>();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (temp) {
        if (id == 'max') {
          setMaxPrice(temp);
        } else {
          setMinPrice(temp);
        }
      } else {
        if (id == 'max') {
          setMaxPrice(undefined);
        } else {
          setMinPrice(0);
        }
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [temp]);

  return (
    <div>
      <label htmlFor={id} className='font-normal text-sm'>
        {label}
      </label>
      <br />
      <input
        type='number'
        id={id}
        onChange={(e) => {
          setTemp(parseInt(e.target.value));
        }}
        placeholder={placeholder}
        className=' bg-white opacity-100 border border-gray-400 rounded-lg mt-1.5 w-4/5 h-3/4'
      />
    </div>
  );
};

export default Input;

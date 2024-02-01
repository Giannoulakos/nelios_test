import { useAppContext } from '@/context';
import { useState } from 'react';

interface CheckboxProps {
  text: string;
  min?: number;
  max?: number;
  singleUse: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, min, max, singleUse }) => {
  const {
    minPrice,
    maxPrice,
    setMaxPrice,
    setMinPrice,
    otherFilters,
    setOtherFilters,
  } = useAppContext();
  const [prevMin, setPrevMin] = useState<number>(minPrice);
  const [prevMax, setPrevMax] = useState<number | undefined>(maxPrice);

  return (
    <div className='mt-1'>
      <input
        type='checkbox'
        id='checkbox'
        className='rounded-full'
        onChange={(e: any) => {
          console.log(e.target.checked);
          if (e.target.checked) {
            if (!singleUse) {
              setPrevMax(maxPrice);
              setPrevMin(minPrice);
              setMinPrice(min);
              setMaxPrice(max);
            } else {
              setOtherFilters((prevFilters: any[]) => [...prevFilters, text]);
            }
          } else {
            if (!singleUse) {
              setMaxPrice(prevMax);
              setMinPrice(prevMin);
            } else {
              const newArray = otherFilters.filter((el: any) => el != text);
              setOtherFilters(newArray);
            }
          }
        }}
      />
      <label htmlFor='checkbox' className='ml-1.5'>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;

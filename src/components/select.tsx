'use client';

import { useAppContext } from '@/context';

const Select = () => {
  const { setSort } = useAppContext();

  return (
    <select
      name='sel'
      id='filter-1'
      onChange={(e) => setSort(e.target.value)}
      className=' h-8 px-3 w-1/3 md:w-1/4 rounded-lg opacity-90'
    >
      <option value='popularity'>Δημοφιλή</option>
      <option value='price-cheaper'>Φθηνά Πρώτα</option>
      <option value='price-expensive'>Ακριβά Πρώτα</option>
    </select>
  );
};

export default Select;

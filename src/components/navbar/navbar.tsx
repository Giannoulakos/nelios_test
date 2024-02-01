import Btn from '../btn';
import NavInput from './nav-input/nav-input';
import { useAppContext } from '@/context';

export default function Navbar() {
  const { setSearch, search } = useAppContext();

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className='flex justify-center text-sm'>
      <div className='border border-slate-300	rounded-xl flex justify-between w-full md:w-3/5 bg-slate-50 py-2 md:px-4 '>
        <div className=' flex items-center pl-3'>
          <NavInput text='Προορισμός' type='city' />
        </div>
        <div className='flex items-center'>
          <NavInput text='Check In' type='checkIn' />
        </div>
        <div className='flex items-center '>
          <NavInput text='Check Out' type='checkOut' />
        </div>
        <div className='flex items-center '>
          <NavInput text='Αριθμός Ατόμων' type='numOfPpl' />
        </div>
        <div className='hidden md:flex items-center ' onClick={handleSearch}>
          <Btn text={'Αναζήτηση'} search={true} />
        </div>
        <div className='md:hidden flex items-center ' onClick={handleSearch}>
          <Btn text={''} search={true} />
        </div>
      </div>
    </div>
  );
}

import Btn from '../btn';

export default function Navbar() {
  return (
    <div className='flex justify-center text-sm'>
      <div className='border border-slate-300	rounded-xl flex justify-between w-full md:w-3/5 bg-slate-50 py-2 md:px-4 '>
        <div className=' flex items-center pl-3'>
          <div className=' font-semibold'>
            Προορισμός <br /> <div className=' font-light'>Ελλάδα</div>
          </div>
        </div>
        <div className='flex items-center'>Check In</div>
        <div className='flex items-center '>Check Out</div>
        <div className='flex items-center '>Αριθμός Ατόμων</div>
        <div className='hidden md:flex items-center '>
          <Btn text={'Αναζήτηση'} search={true} />
        </div>
        <div className='md:hidden flex items-center '>
          <Btn text={''} search={true} />
        </div>
      </div>
    </div>
  );
}

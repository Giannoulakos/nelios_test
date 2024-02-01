'use client';

import Input from './input';
import Checkbox from './checkbox';

export default function Filters() {
  return (
    <div className='hidden md:block bg-white opacity-80 rounded-xl px-6 py-6 w-80 mr-6 '>
      <div className='flex justify-center text-start items-center'>
        <div>
          <div className='text-3xl heading'>ΦΙΛΤΡΑ</div>

          <div className=' w-full mt-12'>
            <span className='heading'>ΕΥΡΟΣ ΤΙΜΗΣ</span>
            <div className='mt-5 flex justify-between w-full'>
              <Input placeholder='€' label='Από' id='min' />
              <Input placeholder='€' label='Έως' id='max' />
            </div>
            <div className=' mt-10'>
              <Checkbox text='Έως 50€' min={0} max={50} singleUse={false} />
              <Checkbox text='50 - 150€' min={50} max={150} singleUse={false} />
              <Checkbox
                text='150 - 500€'
                min={150}
                max={500}
                singleUse={false}
              />
            </div>
          </div>
          <hr className='mt-7' />
          <div className='w-full mt-7'>
            <span className='heading'>ΜΕΝΟΥ</span>
            <div className=' mt-5'>
              <Checkbox text='Room Only' singleUse={true} />
              <Checkbox text='Half Board' singleUse={true} />
              <Checkbox text='Bed Breakfast' singleUse={true} />
              <Checkbox text='All Inclusive' singleUse={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

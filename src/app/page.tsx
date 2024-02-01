'use client';

import Navbar from '@/components/navbar/navbar';
import Switch from '@/components/navbar/switch';
import HotelList from '@/components/list/hotel_list';
import Select from '@/components/select';
import ListCount from '@/components/list/list_count';
import Filters from '@/components/list/filters/filters';
import Btn from '@/components/btn';
import Btn2 from '@/components/btn-2';
import FiltersBurger from '@/components/list/filters/filters-burger';
import { useAppContext } from '@/context';

export default function Home() {
  const { openDialog, setOpenDialog, listCount, limit, setLimit } =
    useAppContext();

  return (
    <main>
      <FiltersBurger />
      <div className='flex justify-center mt-3'>
        <div className='font-light'>Αρχική &gt; Ελλάδα &gt; Πακέτα </div>
      </div>

      <div className='flex justify-center mt-3'>
        <div className='mt-14 text-5xl font-semibold'>ΕΛΛΑΔΑ</div>
      </div>
      <div className='flex justify-center mt-3'>
        <div className='font-light'>Πακέτα - Προσφορές </div>
      </div>
      <div className='mt-20'>
        <Switch />
      </div>
      <div className='mt-4'>
        <Navbar />
      </div>
      <div className='my-40 flex justify-center'>
        <div className='mt-12'>
          <Filters />
        </div>
        <div>
          <div className='flex justify-between'>
            <ListCount />

            <Select />
          </div>

          <div className='flex mt-4 justify-center '>
            <HotelList />
          </div>
          <div
            className='w-1/4 mt-10 mx-auto'
            onClick={() => {
              if (listCount - limit > 0) {
                setLimit(limit + 3);
              }
            }}
          >
            <Btn2
              text={`Δείτε περισσότερα (${
                listCount > limit ? listCount - limit : 0
              })`}
              color='#009649'
            />
          </div>
        </div>
      </div>

      <div
        className=' fixed left-1.5 bottom-1.5 md:hidden'
        onClick={() => {
          if (!openDialog) {
            setOpenDialog(true);
          } else {
            setOpenDialog(false);
          }
        }}
      >
        <Btn search={false} text='Φίλτρα' />
      </div>

      <div className=' relative h-96 mb-20 mx-auto'>
        <img
          src='/footer-image.jpeg'
          alt='Footer Image'
          className='w-2/3 bottom-0 mx-auto left-0 right-0 rounded-lg z-0  absolute h-96'
        />
        <div className='text-xl text-white font-extrabold  m-auto left-0 right-0 top-44 text-center z-10 absolute'>
          <div className='w-2/4 mx-auto'>
            <div>ΔΕ ΒΡΗΚΑΤΕ ΑΥΤΟ ΠΟΥ ΨΑΧΝΕΤΕ;</div>
            <div className='mt-4 md:w-1/3 mx-auto'>
              <Btn2 text='Επικοινωνήστε μαζί μας' color='white' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

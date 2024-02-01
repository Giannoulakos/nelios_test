'use client';
import Btn from '../btn';

interface CardProps {
  photo: string;
  name: string;
  city: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ photo, name, city, price }) => {
  return (
    <div
      style={{
        boxShadow: '0px 24px 32px -12px rgba(0, 0, 0, 0.10)',
        color: '#555563',
      }}
      className='mt-4 md:mt-0 border-none w-full h-80 md:h-fit pb-2 md:w-64 bg-white opacity-90 rounded-xl'
    >
      <img
        src={photo}
        alt={name}
        className='rounded-xl w-full md:w-64 h-44 md:h-60'
      />
      <div className='mx-4'>
        <div className='font-semibold text-2xl mt-3 md:mt-5 h-10 md:h-12'>
          {name + ' ' + city}
        </div>
        <div className='flex justify-between items-center mt-5'>
          <div className='mt-6 text-xs'>
            ΑΠΟ <span className='text-xl font-semibold ml-1'>{price}€</span>{' '}
          </div>
          <div className='mt-4 '>
            <Btn text='Κράτηση' search={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

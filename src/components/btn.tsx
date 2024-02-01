'use client';

interface BtnProps {
  text: string;
  search: boolean;
}

const Btn: React.FC<BtnProps> = ({ text, search }) => {
  return (
    <div
      style={{ backgroundColor: '#009649' }}
      className='rounded-lg cursor-pointer h-12 px-2 md:px-4 flex items-center justify-center text-white '
    >
      {search == true && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          className='mr-2'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.5 7.33333C2.5 4.66396 4.66396 2.5 7.33333 2.5C10.0027 2.5 12.1667 4.66396 12.1667 7.33333C12.1667 8.63926 11.6487 9.82422 10.8071 10.694C10.7857 10.7095 10.7653 10.7268 10.7461 10.7461C10.7268 10.7653 10.7095 10.7857 10.694 10.8071C9.82422 11.6487 8.63926 12.1667 7.33333 12.1667C4.66396 12.1667 2.5 10.0027 2.5 7.33333ZM11.0895 11.7966C10.0747 12.6515 8.76415 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333C13.1667 8.76415 12.6515 10.0747 11.7966 11.0895L14.3532 13.6461C14.5484 13.8413 14.5484 14.1579 14.3532 14.3532C14.1579 14.5484 13.8413 14.5484 13.6461 14.3532L11.0895 11.7966Z'
            fill='white'
          />
        </svg>
      )}
      <div>{text}</div>
    </div>
  );
};

export default Btn;

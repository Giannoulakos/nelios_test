'use client';

interface Btn2Props {
  text: string;
  color: string;
}

const Btn2: React.FC<Btn2Props> = ({ text, color }) => {
  return (
    <div
      style={{ borderColor: color, color }}
      className=' cursor-pointer border h-14 w-full flex items-center justify-center text-sm rounded-lg bg-transparent '
    >
      {text}
    </div>
  );
};

export default Btn2;

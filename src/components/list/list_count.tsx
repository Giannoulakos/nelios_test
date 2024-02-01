import { useAppContext } from '@/context';

export default function ListCount() {
  const { listCount } = useAppContext();

  return (
    <div>
      <p>
        <span className='font-bold'>{listCount}</span> διαθέσιμα πακέτα διακοπών
      </p>
    </div>
  );
}

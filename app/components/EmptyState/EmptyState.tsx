import { useStore } from '@/app/store/useStore';
import Image from 'next/image';
import angryDachshund from '@/public/angry-dachshund.webp';
import lessAngryDachshund from '@/public/less-angry-dachshund.webp';

export default function EmptyState() {
  const { participants } = useStore();

  return (
    <div
      className='flex flex-col items-center gap-3 font-bold mt-10'
      data-testid='empty-state'
    >
      {participants.length === 0 && (
        <>
          <Image
            src={angryDachshund}
            alt='angry dachshund'
            width={300}
            height={500}
          />
          <p className='text-2xl text-center'>
            Add participants before Keylito gets mad.
          </p>
        </>
      )}
      {participants.length === 1 && (
        <>
          <Image
            src={lessAngryDachshund}
            alt='less angry dachshund'
            width={300}
            height={500}
          />
          <p className='text-2xl text-center'>
            He has someone to play with, but still needs one
            more.
          </p>
        </>
      )}
    </div>
  );
}

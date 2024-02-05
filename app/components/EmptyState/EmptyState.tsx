import { useStore } from '@/app/store/useStore';
import Image from 'next/image';
import angryDachshund from '@/public/angry-dachshund.webp';
import lessAngryDachshund from '@/public/less-angry-dachshund.webp';
import 'animate.css';

export default function EmptyState() {
  const { participants } = useStore();

  return (
    <div
      className='flex flex-col items-center gap-3 font-bold mt-10'
      data-testid='empty-state'
    >
      {participants.length === 0 && (
        <div className='animate__animated animate__zoomIn'>
          <Image
            src={angryDachshund}
            alt='angry dachshund'
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
            placeholder='blur'
          />
          <p className='text-2xl text-center'>
            Add participants before Keylito gets mad.
          </p>
        </div>
      )}
      {participants.length === 1 && (
        <div className='animate__animated animate__fadeInLeft'>
          <Image
            src={lessAngryDachshund}
            alt='less angry dachshund'
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
            placeholder='blur'
          />
          <p className='text-2xl text-center'>
            He has someone to play with, but still needs one
            more.
          </p>
        </div>
      )}
    </div>
  );
}

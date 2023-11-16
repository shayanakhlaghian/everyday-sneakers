'use client';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

import type { Sneaker } from '@/constants';

const Card = ({
  sneaker: { id, title, name, image },
  tag,
}: {
  sneaker: Sneaker;
  tag: string;
}) => {
  return (
    <Tilt>
      <Link
        className='card bg-base-100 shadow-xl hover:shadow-2xl border-slate-100 border'
        href={`/sneakers/${id}`}
      >
        <figure className='relative h-60'>
          <Image src={image} alt={title} fill />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            {title}
            <div className='badge badge-secondary'>{tag}</div>
          </h2>
          <p className='line-clamp-1'>{name}</p>
        </div>
      </Link>
    </Tilt>
  );
};
export default Card;

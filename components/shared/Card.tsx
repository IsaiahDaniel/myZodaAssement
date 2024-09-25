import Image from 'next/image';
import React from 'react'

type CardProps = {
  image: any;
  author: string;
  role: string;
  content: string;
}

const Card = ({ image, author, role, content }: CardProps) => {
  return (
    <div className='p-5 rounded-lg border border-primary-30 bg-primary-20 w-[430px] h-[328px]'>
      <div className="flex items-center">
        <Image src={image} alt='' className='mr-5' />

        <div>
          <h2>{author}</h2>
          <p>{role}</p>
        </div>

      </div>
      <p className='mt-5'>{content}</p>
    </div>
  );
}

export default Card;
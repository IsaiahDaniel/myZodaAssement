import React from 'react';
import Image from 'next/image';
import WorkSpaceImage from "@/assets/images/dashboard-img.png";
import WorkSpaceImageMobile from "@/assets/images/dashboard-img-mobile.png";
import { inria } from '@/styles/fonts';

type Props = {}

const Showcase = () => {
  return (
    <section className='flex-col-center lg:mt-10'>
        <h2 className={`text-[82px] lg:text-huge text-gradient ${inria.className}`}>Xplora.io</h2>
        <p className='text-gradient text-2xl leading-[33.18px] mb-10 text-center px-10 lg:px-0'>Analyze your data, create your <br /> dashboard, and unite your team</p>

        <Image src={WorkSpaceImageMobile} priority className='lg:hidden' alt='' />
        <Image src={WorkSpaceImage} priority className='mt-20 hidden lg:block px-10' alt={`WorkSpace Image`} width={1165} height={730} />
    </section>
  )
}

export default Showcase;
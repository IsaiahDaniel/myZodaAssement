import Showcase from '@/components/shared/Showcase'
import { FEATURES_DATA } from '@/constants/features.constants';
import { inria } from '@/styles/fonts';
import Image from 'next/image';
import React from 'react'

import GalleryCardOne from "@/assets/images/Cards-desktop-1.png";
import GalleryCardTwo from "@/assets/images/Cards-desktop-2.png";
import GalleryCardMobile from "@/assets/images/cards-mobile.png";

import Partners from "@/assets/images/Brands.png";
import PartnersMobile from "@/assets/images/Brands-mobile.png";
import Button from '@/components/ui/Button';
import { TESTIMONIALS } from '@/constants/testimonials.constants';
import Card from '@/components/shared/Card';
import Footer from '@/components/shared/Footer';

type Props = {}

const Home = () => {
  return (
    <main>
      <Showcase />

      <section className='mt-20 text-white'>
        <div className='flex-col-center text-white'>
          <h2 className={`text-2xl text-large ${inria.className}`}>Features</h2>
          <p className='mt-5 text-body1 px-5 lg:w-[40%] mx-auto text-center font-normal'>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>

        <div className="grid-3 text-center w-[85%] mt-10 gap-10 mx-auto">
          {FEATURES_DATA.map(item => (
            <div className='flex-col-center'>
              <Image src={item.icon} alt='' width={25.49} height={23.66} />
              <h3 className='text-white text-2xl mt-4'>{item.heading}</h3>
              <p className='mt-5 text-base'>
                {item.content}
              </p>
            </div>
          ))}
        </div>

      </section>

      <section className='mt-40 text-white'>
        <div className='flex-col-center text-white'>
          <h2 className={`text-large ${inria.className}`}>GALLERY</h2>
          <p className='mt-5 text-body1 px-5 lg:w-[40%] mx-auto text-center font-normal'>
            We focus on ergonomics and meeting you where you work.
            It's only a keystroke away.
          </p>
        </div>

        <div className='hidden lg:px-28 lg:block'>
          <Image src={GalleryCardOne} alt='' />
          <Image src={GalleryCardTwo} alt='' />
        </div>

        <div className='px-10 lg:hidden'>
          <Image src={GalleryCardMobile} alt='' />
        </div>

        <div className="mx-auto flex-col-center">
          <Button text='See More' className='hidden lg:block' variant="outline" />
        </div>


      </section>

      <section className='mt-20 text-white'>
        <div className='flex-col-center text-white'>
          <h2 className={`text-2xl text-large ${inria.className}`}>PARTNERS</h2>
          <p className='mt-5 text-body1 lg:w-[40%] mx-auto text-center font-normal'>
            We focus on ergonomics and meeting you where you work.
            It's only a keystroke away.
          </p>

          <div className='hidden lg:block lg:w-[80%] mt-24'>
            <Image src={Partners} alt='' />
          </div>

          <div className='lg:hidden px-10 mt-24'>
            <Image src={PartnersMobile} alt='' />
          </div>

          <div className="mx-auto flex-col-center mt-10">
            <Button text='All Partners' className='hidden lg:block' variant="outline" />
          </div>
        </div>
      </section>

      <section className='mt-20 text-white mx-10'>
        <div className='flex-col-center text-white'>
          <h2 className={`text-2xl text-large ${inria.className}`}>PARTNERS</h2>
          <p className='mt-5 text-body1 lg:w-[40%] mx-auto text-center font-normal'>
            We focus on ergonomics and meeting you where you work.
            It's only a keystroke away.
          </p>

          <div className='mx-10'>
            <div className="grid-2 gap-5 mt-10">
              { TESTIMONIALS.map(item => (
                <Card 
                  author={item.author}
                  content={item.content}
                  image={item.image}
                  role={item.role}
                />
              )) }
            </div>
          </div>



        </div>
      </section>

      <Footer />

    </main>
  );
}

export default Home;
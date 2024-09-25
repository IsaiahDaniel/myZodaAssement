import React from 'react';
import LocationIcon from "@/assets/icons/location.svg";
import PhoneIcon from "@/assets/icons/mobile.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

import { FOOTER_DATA } from '@/constants/footer.constants';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 py-8 mt-10 text-white px-5 lg:px-48'>
      <div className='col-span-3 grid lg:grid-cols-3'>
        {FOOTER_DATA.map((section) => (
          <div key={section.id}>
            <h2 className='font-bold text-lg mb-4'>{section.heading}</h2>
            <ul className='space-y-2'>
              {section.items.map((item) => (
                <li key={item.id} className='hover:underline'>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='col-span-1 space-y-5'>
        <div className='flex items-center'>
            <Image src={LocationIcon} alt='' />
            <p>7480 Mockingbird Hill undefined </p>
        </div>

        <div className='flex items-center'>
            <Image src={PhoneIcon} alt='' />
            <p>(239) 555-0108</p>
        </div>
        <div className='flex items-center space-x-4'>
            <Image src={TwitterIcon} alt='' />
            <Image src={FacebookIcon} alt='' />
            <Image src={LinkedinIcon} alt='' />
            {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

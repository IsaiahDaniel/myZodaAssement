import React from 'react';
import { HEADER_DATA } from '@/constants/Header.constants';
import { IHeaderData } from '@/lib/types/header.types';
import Button from '../ui/Button';

import HeaderBgGradient from "@/assets/images/landing-gradient.png";
import TouchLightImage from "@/assets/images/Light.png";
import MenuIcon from "@/assets/icons/menu.svg";

import { inria } from '@/styles/fonts';
import Image from 'next/image';

type Props = {}

const Header = () => {
    return (
        <div
            className='flex-between text-white py-10 px-10 lg:px-28 relative'
            style={{
                background: `url(${HeaderBgGradient.src}) center center/cover no-repeat`,
                height: '20vh'
            }}
        >

            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 mx-auto'>
                <Image src={TouchLightImage.src} width={3000} height={700} alt='' />
            </div>

            <h2 className={`font-normal text-gradient text-2xl ${inria.className}`}>Xplora.io</h2>

            <ul className='hidden border border-1 border-light-10 lg:flex space-x-2 p-2 rounded-full px-5 cursor-pointer'>
                {HEADER_DATA.map((item: IHeaderData, index: number) => (
                    <li key={item._id}>{item.text}</li>
                ))}
            </ul>
            

            <Button
                text='Get Started'
                variant="neutral"
                className='border border-light-30 rounded-full py-2 px-4 hidden lg:block'
            />

            <Image src={MenuIcon} alt='' className='lg:hidden' /> 

        </div>
    );
}

export default Header;
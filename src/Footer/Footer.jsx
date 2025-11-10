import React from 'react';
import mapPhoto from './../assets/map.png'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import './../App.css'

const Footer = () => {
    return (
        <div className='w-full flex flex-col-reverse px-3 py-6 lg:flex-row '>
            <div className='w-full lg:w-[70%]'>
                <table>
                    <tr>
                        <th>Pages</th>
                        <th>Resources</th>
                        <th>Company</th>
                    </tr>
                    <tr>
                        <td>Home</td>
                        <td>Our Homes</td>
                        <td>Patnerships</td>
                    </tr>
                    <tr>
                        <td>About Us</td>
                        <td>Member Stories</td>
                        <td>Terms of Use</td>
                    </tr>
                    <tr>
                        <td>Courses</td>
                        <td>Videos</td>
                        <td>Privacy</td>
                    </tr>
                    <tr>
                        <td>Blog</td>
                        <td>Free Trial</td>
                        <td>Sitemap</td>
                    </tr>
                </table>
            </div>
            <div className='w-full ml-16 mx-auto pr-4 lg:w-[30%] lg:ml-0'>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-bold'>Find Us at</h1>
                    <div className='flex items-center gap-x-2'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaLinkedinIn></FaLinkedinIn>
                    </div>
                </div>
                <div  className='w-full py-10'>
                    <img className='w-full' src={mapPhoto} alt="map photo" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
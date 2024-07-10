import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { footerLinks } from '@/Constant/Index'
const Footer = () => {
  return (
   
  <footer>
    <div className="flex flex-col bg-black
    text-black-100 mt-5 border-t border-gray-200">
        <div className='flex max-ms:fle-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className ="flex flex-col justify-start items-start gap-6">
                <Image src="/logo.png" alt="" 
                width={218} height={218}
                className='object-contain'/>
                <p className='text-center text-white md:text-left justify-center' >At DriveHive , we value our users and  strive<br/> to provide the best possible experience. If you<br/> have any questions, comments, or feedback, <br/>Please don't hesitate to contact us.</p>
                <p className="text-base text-white font-bold">Copyright &copy; 2024 All Rights Reserved |
                DriveHive Solutions Private Limited</p>
            </div>
        </div>
 
        <div className='footer__links'>
        {footerLinks.map((link) => (
          <div key={link.title} className="footer__link">
            <h3 className="font-bold text-white hover:text-blue-400">{link.title}</h3>
            <div className=" hover:text-blue-400">
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} passHref>
                  <h3 className="text-white hover:text-blue-400">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </footer> 
  )
}

export default Footer

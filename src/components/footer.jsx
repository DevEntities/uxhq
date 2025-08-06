import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Framework', href: '/framework' },
  { label: 'FAQs', href: '/faq' },
  // { label: 'Privacy Policy', href: '/policy' },
  { label: 'Terms of Use', href: '/terms_of_use' },
];



const socialLinks = [
  {
    href: '/na',
    label: 'Instagram',
    icon: '/assets/footer/insta.svg',
    iconHover: '/assets/footer/insta-hover.svg',
  },
  {
    href: 'https://www.linkedin.com/company/the-uxhq',
    label: 'LinkedIn',
    icon: '/assets/footer/linkedin.svg',
    iconHover: '/assets/footer/linkedin-hover.svg',
  },
];



const footer = () => {
  const location = useLocation();

  // Define routes where you want to hide links and button
  const hideOnRoutes = ["/conversation", "/not-found"];
  const shouldHideExtras = hideOnRoutes.includes(location.pathname);


  return (
    <div className=''>




      {/* Desktop */}

      {!shouldHideExtras && (
        <footer className='bg-UXHQ-black max-md:hidden w-full h-fit 0 rounded-t-[6.5rem] flex flex-col space-y-4 justify-between'>


          <div className="flex w-[99%] mx-auto justify-between bggreen-400/60 items-start px-44 pb-[4.7rem] pt-[7.50rem] max-lg:px-28  max-lg:pt-24 ">




            {/* Left: Logo and tagline */}

            <div className=" w-[30.5%] flex flex-col items-start pl-4 bg-red300/50">


              <NavLink to={"/"} className='block '>
                <div className="flex items-center mb-[1.7rem]">


                  <img className='h-[2.1rem]' src="/assets/footer/footer-logo.svg" alt="" />
                </div>
              </NavLink>

              <p className="bg-blue400/50 w-[66%] font-dmsans text-white/90 text-[1.35rem] leading-[1.6rem] fontsemibold max-w-xs">Your UX career, guided by AI and grounded in real experience.</p>

            </div>




            {/* Center: Learn links */}
            <div className=" w-[45.5%] font-dmsans  mr52 text-xl flex flex-col items-start bg-red500/50">
              <span className="text-white/60  mb-[2.0rem] text-[1.31rem] leading-[1.75rem]">LEARN</span>
              <ul className="space-y-[1.3rem]">
                {footerLinks.map(link => (
                  <li key={link.label}>
                    <NavLink to={link.href} className="hover:text-UXHQ-green duration-300 text-white/90 text-[1.31rem] ">{link.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>






            {/* Right: Connect/social */}

            <div className='w-[24%] bg-red300/50 flex justify-end items-end'>

              <div className='w-fit flex flex-col items-start  space-y-[10.8rem] bg-blue300/50'>




                <div className="flex flex-col w-full bg-red400/50">
                  <span className="font-dmsans text-white/60 text-[1.30rem] leading-[1.75rem] mb-[1.1rem]">CONNECT</span>

                  <div className="flex space-x-4 mb-4">



                    {socialLinks.map(({ href, label, icon, iconHover }) => (
                      <a
                        key={label}
                        href={href}
                        target='_blank'
                        aria-label={label}
                        className="group relative w-[1.65rem] h-[1.65rem]"
                      >
                        <img
                          src={icon}
                          alt={`${label} icon`}
                          className="absolute inset-0 w-full h-full "
                        />
                        <img
                          src={iconHover}
                          alt={`${label} icon hover`}
                          className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                      </a>
                    ))}



                  </div>
                </div>




                {/* Copyright */}
                <div className="w-full bg-red400/50 flex justify-start px24 pb-8">
                  <span className=" text-white/60 text-[1.39rem]">© 2025 UXHQ. All rights reserved.</span>
                </div>


              </div>

            </div>





          </div>








        </footer>

      )}





      {/* Mobile */}

      {!shouldHideExtras && (
        <footer className='bg-UXHQ-black md:hidden w-full h-fit 0 rounded-t-3xl flex flex-col space-y-4 justify-between'>


          <div className="flex flex-col w-full justify-between bggreen-400/60 items-start pt-16 px-8 pb20">




            {/* Left: Logo and tagline */}
            <div className="flex flex-col items-start w-[80%]">


              <NavLink to={"/"} className='block '>
                <div className="flex items-center mb-4">

                  <img className='h-9' src="/assets/footer/footer-logo.svg" alt="" />
                </div>
              </NavLink>
              <p className="font-dmsans text-white/90 text-2xl fontsemibold">Your UX career, guided by AI and grounded in real experience.</p>

            </div>



            <div className='flex mt-20 mb-28 w-full bggreen-400/50'>



              {/* Center: Learn links */}
              <div className="font-dmsans text-[1.25rem] leading-[1.75rem] space-y-4 flex flex-col items-start w-1/2">
                <span className="text-white/60  ">LEARN</span>
                <ul className="space-y-4">
                  {footerLinks.map(link => (
                    <li key={link.label}>
                      <NavLink to={link.href} className="hover:text-UXHQ-green duration-300 text-white/90 text[1.2rem]">{link.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>






              {/* Right: Connect/social */}
              <div className="flex flex-col  w-1/2   ">
                <span className="text-white/60 text-[1.25rem] leading-[1.75rem] mb-4">CONNECT</span>



                <div className="flex space-x-6">





                  {socialLinks.map(({ href, label, icon, iconHover }) => (
                    <a
                      key={label}
                      href={href}
                      target='_blank' 
                      aria-label={label}
                      className="group relative w-8 h-8"
                    >
                      <img
                        src={icon}
                        alt={`${label} icon`}
                        className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                      />
                      <img
                        src={iconHover}
                        alt={`${label} icon hover`}
                        className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </a>
                  ))}




                </div>
              </div>


            </div>




            {/* Copyright */}
            <div className="w-full bg-red400/50 flex justifyend  mb-8">
              <span className="text-white/60 text-base">© 2025 UXHQ. All rights reserved.</span>
            </div>






          </div>









        </footer>


      )}





      {shouldHideExtras && location.pathname === "/conversation" && (
        <footer className='w-full flex justify-between items-center font-dmsans px-9 py-4 relative'>



          <div>

            <span className="text-UXHQ-black/70 font-dmsans font-normal text-base leading-[120%] tracking-[0%]">© 2025 UXHQ. All rights reserved.</span>
          </div>

          <div className="flex items-center text-UXHQ-black/70">
            <NavLink className='hover:underline-offset-1 hover:underline font-dmsans font-normal text-base leading-[120%] tracking-[0%]' to={'/terms_of_use'}>Terms of use</NavLink>
          </div>




        </footer>



      )}

      {shouldHideExtras && location.pathname !== "/conversation" && (
        <footer className='w-full flex justify-between items-center font-dmsans px-9 h-[6vh] relative'>



          <div>

            <span className="text-UXHQ-black/70 font-dmsans font-normal text-base leading-[120%] tracking-[0%]">© 2025 UXHQ. All rights reserved.</span>
          </div>

          <div className="flex space-x-1 text-UXHQ-black/70">
            <NavLink className='hover:underline-offset-1 hover:underline font-dmsans font-normal text-base leading-[120%] tracking-[0%] text-right' to={'/terms_of_use'}>Terms of use</NavLink>
          </div>




        </footer>



      )}




    </div>
  )
}

export default footer

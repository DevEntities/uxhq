import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const hero = () => {
  // Card data array moved to the top
  const cards = [
    {
      img: "/assets/home-page/s2ico1.png",
      title: "Built on the UX Brain",
      desc:
        "Unlike ChatGPT or other AI tools that rely on generic internet data, UXHQ is powered by a purpose built knowledge-base created by experts with over five decades of real world UX experience, from strategy and research to design and leadership, grounded in what actually works, not theory, not opinion, and never guesswork.",
    },
    {
      img: "/assets/home-page/s2ico2.png",
      title: "Personalised, not generic",
      desc:
        "You'll answer some questions, and based on your background, interests and goals, we'll generate a personalised report that shows your ideal UX path and how to get there. This isn't about fitting you into a job title, it's about helping you understand your strengths.",
    },
    {
      img: "/assets/home-page/s2ico3.png",
      title: "For you, and the industry",
      desc:
        "This isn't just about your next job. It's about building a better UX industry, one individual at a time. UXHQ helps you align with the right roles, develop relevant skills, and make better decisions for your career, and for those you design for.",
    },
  ];

  // Lens data array for the 'three lenses' section
  const lenses = [
    {
      number: '01',
      title: 'Creativity',
      desc: 'Originality, emotion, problem solving',
    },
    {
      number: '02',
      title: 'Science',
      desc: 'Evidence, research, validation',
    },
    {
      number: '03',
      title: 'Business',
      desc: 'Value, impact, feasibility',
    },
    {
      number: '++',
      title: 'Core Skills',
      desc: 'Communication, empathy, collaboration',
    },
  ];

  // User types for 'Who is UXHQ for?' section
  const userTypes = [
    {
      img: '/assets/home-page/Ellipse33.png',
      desc: 'New to UX and unsure where to start?',
    },
    {
      img: '/assets/home-page/Ellipse33.png',
      desc: 'Early in your career and looking to grow?',
    },
    {
      img: '/assets/home-page/Ellipse33.png',
      desc: 'Mid-career and feeling misaligned?',
    },
    {
      img: '/assets/home-page/Ellipse33.png',
      desc: 'Experienced but lacking clarity on next steps?',
    },
  ];

  // How it works steps for the 'How it works' section
  const howItWorksSteps = [
    {
      number: '01',
      title: 'Share your story',
      desc: "We'll guide you through a short conversation to learn about your background, interests, and needs. You never need to share anything you're uncomfortable with. It's fine to speak generally."
    },
    {
      number: '02',
      title: 'Let the UX Brain do its thing',
      desc: "Your answers are analysed using UXHQ's private knowledge-base that's been built by expert practitioners, not scraped together from the internet."
    },

    {
      number: '03',
      title: 'Get your personal report',
      desc: "You'll receive a personalised UX report with recommendations, skill focus areas, and practical next steps."
    },

  ];




  // Testimonials for 'What people say' section
  const testimonials = [
    {
      comment: "Even just through the conversation it uncovered a lot of things that I've been thinking about that maybe I hadn't put down in words yet.",
      name: 'Early career UX Architect',
    },
    {
      comment: 'It really helped me understand what UX role fits me, and what to focus on next.',
      name: 'Career Changer',
    },
    {
      comment: 'The mentorship and resources are unmatched. Thank you, UXHQ!',
      name: 'Chris Lee',
    },
    {
      comment: 'A must-have for anyone serious about UX.',
      name: 'Morgan Kim',
    }, {
      comment: 'A quick brown fox jump over a lazy dog. A must-have for anyone serious about UX.',
      name: 'Morgan Kim',
    },
  ];

  // State for testimonial carousel
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const cardWidth = 350; // px, card width only
  const cardGap = 32; // px, gap-x-8
  const visibleCount = 2;
  const containerWidth = cardWidth * visibleCount + cardGap;

  // console.log(containerWidth)
  // Mobile values
  const McardWidth = 280;
  const McardGap = 31;
  const MvisibleCount = 1;



  const canGoLeft = testimonialIndex > 0;
  const canGoRight = testimonialIndex < testimonials.length - visibleCount;


  const McanGoLeft = testimonialIndex > 0;
  const McanGoRight = testimonialIndex < testimonials.length - MvisibleCount;

  // console.log(testimonials.length - visibleCount)


  const handleLeft = () => {
    if (canGoLeft) setTestimonialIndex(testimonialIndex - 1);
  };
  const handleRight = () => {
    if (canGoRight) setTestimonialIndex(testimonialIndex + 1);
  };

  const scrollToTest = (idx) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: idx * (McardWidth + McardGap),
      behavior: 'smooth',
    });
    setTestimonialIndex(idx);
  };

  const MhandleLeft = () => {
    if (McanGoLeft) scrollToTest(testimonialIndex - 1);
  };
  const MhandleRight = () => {
    if (McanGoRight) scrollToTest(testimonialIndex + 1);
  };



  const scrollRef = useRef(null);
  // let scrollTimeout;

  function handleScroll() {
    if (!scrollRef.current) return;

    // Clear previous timeout
    // clearTimeout(scrollTimeout);

    // Wait until scrolling stops
    // scrollTimeout = setTimeout(() => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const idx = Math.round(scrollLeft / (McardWidth + McardGap));

    setTestimonialIndex(idx);  // ✅ update indicator properly
    // }, 100); // runs after user stops swiping
  }






  // section-2
  // Add to the top of the component:
  const [currentCard, setCurrentCard] = useState(0);
  const cardsContainerRef = useRef(null);
  function handleCardScroll() {
    if (!cardsContainerRef.current) return;
    const scrollLeft = cardsContainerRef.current.scrollLeft;
    const cardWidth = cardsContainerRef.current.offsetWidth;
    const idx = Math.round(scrollLeft / cardWidth);
    setCurrentCard(idx);
  }
  function scrollToCard(idx) {
    if (!cardsContainerRef.current) return;
    const cardWidth = cardsContainerRef.current.offsetWidth;
    cardsContainerRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
  }

  return (<>

    {/* Hero Section */}
    {/* sec-1 D&M */}
    <section className="w-full min-h-screen bg-red500/50 max-md:min-h-fit max-md:pt-20  flex flex-col items-center justify-center">
      {/* <div className='h-28'></div> */}

      <div className='py-10 flex max-md:flex-col items-center justify-between  '>

        <div className='w-[61%] max-lg:w-[50%] max-md:w-[100%] pl-10 max-lg:pl-6 max-md:pr-14 bg-blue300'>
          <h1 className='font-juana font-normal text-[6.45rem] max-lg:text-[4.95rem]  max-md:text-[4.25rem] leading-[1.1] tracking-[0]'>
            Build the UX career you want, with expert guidance you can trust.

          </h1>
          <p className='font-dmsans font-normal text-[1.975rem] max-lg:text-[1.675rem] leading-[1.2] tracking-[0] mt-8 w-2/3 max-md:w-[80%] '>
            UX career guidance, powered by the UX Brain, 50+ years of real experience, not internet guesswork
          </p>
        </div>

        <div className='w-[39%] max-lg:w-[50%] max-md:w-[100%]  flex items-center max-sm:justify-end  justify-center  mr-20 max-lg:mr-8 max-md:mr-8 mt-6'>


          <img className='max-md:w-[80%] 2xl:w-[100%]' src="/assets/home-page/hiro-home.png" alt="" />


        </div>


        <div className=' md:hidden w-full px-10'>
          <img className='w-[25%]' src="/assets/home-page/scroll.svg" alt="" />
        </div>

      </div>




    </section>



    {/* sec-2 D&M */}

    <section className='w-full min-h-[85vh]  max-md:min-h-[50vh] max-md:mb-20 mt-44 max-md:mt-10 lg:mb-32 flex justify-center '>
      <div className='w-[80%]  max-lg:w-[100%]  max-md:flex max-md:flex-col max-md:items-center'>
        <h1 className='font-juana pb-[3.5rem] font-normal text-[6.60rem] max-md:text-[3.7rem] leading-[1.1] tracking-[0] text-center'>
          What makes UXHQ different?
        </h1>

        {/* Dynamic Cards Section */}
        <div className='max-md:w-[100%] maxsm:bg-red-500/50'>
          <div
            className='md:bg-white md:rounded-[2rem]   max-md:overflow-x-auto max-md:flex-nowrap max-md:scroll-smooth flex max-md:gap4 max-md:snap-x max-md:snap-mandatory  max-md:px-0 flex-row max-md:pt-0 lg:p-16 max-lg:p-2  scrollbar-hide'
            ref={cardsContainerRef}
            onScroll={handleCardScroll}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`bg-white max-md:rounded-3xl max-md:m-3 snap-center ${idx === 0
                  ? "pl-9 pr-12 py-7 max-md:py-9"
                  : idx === 1
                    ? "pl-12 pr-9 py-7 max-md:py-9"
                    : "pl-9 pr-12 py-7 max-md:py-9"
                  } max-md:py-20 max-md:p-10 space-y-6 w-full max-md:min-w-[90vw] max-md:max-w-[90vw] max-md:relative`}
                style={{
                  WebkitOverflowScrolling: "touch",  // ✅ Smooth mobile scrolling
                  scrollSnapStop: "always",          // ✅ stops skipping multiple cards
                  overscrollBehaviorX: "contain",    // ✅ prevents aggressive fling
                }}
              >

                {/* Icon at top right on mobile */}
                <img className='mb-4 w-16 h-16 bg-red500/50 object-contain flex-shrink-0  max-md:absolute max-md:top-8 max-md:right-8 max-md:mb-0' src={card.img} alt='' />
                <h1 className='font-dmsans font-semibold md:pb-[0.7rem] text-[2.065rem] max-md:text-3xl leading-[1.2] tracking-[0]  pt-9 max-md:mt-16'>{card.title}</h1>
                <p className='font-dmsans font-normal text-[1.66rem] max-md:text-[1.4rem] leading-[1.2] tracking-[0] '>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Progress Bars */}
          <div className='justify-center items-center gap-3 mt-6 max-md:mt-4 max-md:flex max-md:visible hidden'>
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`focus:outline-none focus:ring-0  transition-all duration-300  ${currentCard === idx ? 'w-10 h-2 bg-UXHQ-green' : 'w-10 h-[0.35rem] bg-UXHQ-black/80'}`}
                style={{ border: 'none', outline: 'none' }}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>



        </div>


      </div>
    </section>











    {/* sec-3 D&M */}

    <section className='w-full  min-h-[120vh] max-md:min-h-fit pt-44 max-md:pt-10 max-lg:mt-32  max-md:mt-0 flex justify-center '>



      <div className='w-[96%] max-lg:w-[100%] max-md:w-[100%] mx-auto '>
        <h1 className='font-juana w-[70%] max-md:w-[94%] mx-auto font-normal text-[6.55rem] max-md:text-[4.1rem] leading-[1.1] tracking-[0] text-center  '>
          Great UX is a balance of three lenses
        </h1>


        <div className='flex max-lg:flex-col flex-row justify-between relative  py-20 max-lg:py-8  max-lg:px-2'>


          {/* Left: Description and Button (on mobile, on top) */}
          <div className=' w-[40%] max-lg:w-[60%]  max-md:w-full max-lg:mx-auto px-16 max-md:px-0 xl:pl-40 xl:pr-36 max-lg:px-2 py-24 max-lg:py-4 space-y-16 max-lg:order-1'>


            <p className='font-dmsans font-normal max-md:text-center text-[1.975rem] max-lg:text-[1.775rem] max-lg:mx-16 max-md:mx-2 leading-[1.2] tracking-[0]'>
              Every UX professional brings a unique mix of strengths, some lead with creativity, others with science or business thinking. At UXHQ, we use these three lenses to help you understand your natural shape and guide your next move.
            </p>

            <NavLink className={`block`} to='/framework'>



            <button className="focus:outline-none focus:ring-0 group flex space-x-4 items-center justify-center  bg-UXHQ-black hover:bg-UXHQ-green text-white/85 hover:text-UXHQ-black px-9 py-4 rounded-full shadow  max-lg:mx-auto duration-300">
                <p className='font-dmsans font-normal text-[1.6725rem] max-lg:text-[1.4625rem] leading-[1.2] tracking-[0]'>Explore the three lenses</p>
                {/* <span className="text-green-400 ml-2 text-3xl">→</span> */}
                <div className="relative h-[0.9rem] w-[1.5rem]">
                  <img
                    src="/assets/home-page/arrow.png"
                    alt="arrow"
                    className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src="/assets/home-page/arrow-hover.png"
                    alt="arrow-hover"
                    className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </button>
            </NavLink>


          </div>





          {/* Center: Triangle PNG, always centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-0 flex justify-center items-center w-full pointer-events-none max-lg:static max-lg:translate-x-0 max-lg:order-2 max-lg:mt-8 max-lg:mb-10">
            <img src="/assets/home-page/triangle.png" alt="" className="w-[68rem] max-md:hidden max-lg:w-[54rem]  max-w-full h-auto mx-auto" />
            <img src="/assets/home-page/triangle-mobile.png" alt="" className=" md:hidden   max-w-full h-auto mx-auto max-md:w-[90vw]" />
          </div>






          {/* Right: Lenses List (on mobile, below triangle) */}
          <div className='3 w-[28.3%] max-lg:w-full pt-20 max-lg:pt-0 max-lg:order-3'>
            <div className="space-y-4  w-fit mx-auto">
              {lenses.map((lens, idx) => (
                <div key={idx} className='flex  space-x-2'>


                  <div className='mx-2 max-lg:mr-2 m-4 w-12  flex-shrink-0 text-right'>
                    <p className={`font-dmsans font-semibold text-[2.2375rem] max-lg:text-[2.0375rem] leading-[1.2] tracking-[0]${idx < 3 ? ' text-[#14FF14]' : ''}`}>{lens.number}</p>
                  </div>



                  {/* desktop */}
                  <div className='mt-4 space-y-4 max-lg:hidden  max-lg:justify-between '>
                    <h2 className='font-dmsans bg-red500 max-lg:w-[300px] max-lg:pr10 font-semibold text-[3.6075rem] max-lg:text-[3.0375rem] leading-[1.2] tracking-[0]'>{lens.title}</h2>
                    <p className='font-dmsans max-lg:text[2.275rem] text-[1.6375rem]'>{lens.desc}</p>
                  </div>


                  {/* mobile */}
                  <div className='mt-4 lg:hidden  flex  '>
                    <h2 className='font-dmsans font-semibold text-[3.0375rem] max-lg:text-[2.6rem] max-md:w-[14.5rem] max-lg:w-[15.5rem] leading-[1.2] tracking-[0] max-lg:truncate'>
                      {lens.title}
                    </h2>
                    <p className='font-dmsans max-lg:text-[1.2375rem] max-md:w-[12rem] max-lg:w-[22rem]'>{lens.desc}</p>
                  </div>


                </div>
              ))}
            </div>
          </div>



        </div>









      </div>
    </section>











    {/* sec-4 D */}

    <section className='w-full min-h-fit mt-96 mb-[10rem] py-20 bg-red300 flex justify-center  max-md:hidden'>
      <div className='w-[80%] max-lg:w-[95%] max-md:w-[80%] pt-10 flex  space-x-12'>



        <div className='w-[51%] mt-14'>
          <h1 className='font-juana font-normal text-[5.05rem] leading-[1.2] tracking-[0] py-8'>
            Who is UXHQ for?
          </h1>
          {userTypes.map((user, idx) => (
            <div key={idx} className='flex itemcenter space-x-5 pt-2 pb-6'>
              <img className='w-5 h-5 my-3 bg-slate500' src={user.img} alt='' />
              <p className='font-dmsans font-normal text-[1.875rem] leading-[1.2] tracking-[0]  '>{user.desc}</p>
            </div>
          ))}
          <h3 className='font-dmsansemibold font-semibold pb-8 text-[2.075rem] leading-[1.2] tracking-[0] my-8'>
            UXHQ is built to help at every stage.
          </h3>




          <NavLink to={'/conversation'} >
            <button className="focus:outline-none focus:ring-0 group flex space-x-4 items-center justify-center  bg-UXHQ-black hover:bg-UXHQ-green text-white hover:text-UXHQ-black px-10 py-5 rounded-full shadow  transition max-lg:mx-auto">
              <p className='font-dmsans font-normal text-[1.5825rem] max-lg:text-[1.4625rem] leading-[1.2] tracking-[0] '>Start a conversation</p>
              <div className="relative h-[0.9rem] w-[1.5rem]">
                <img
                  src="/assets/home-page/arrow.png"
                  alt="arrow"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/assets/home-page/arrow-hover.png"
                  alt="arrow-hover"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
            </button>
          </NavLink>

        </div>




        <div className="w-[62%] min-h-fit relative flex justify-center items-start">
          <img
            src="/assets/home-page/faizur-rehman-dJpupM4LiS4-unsplash1.png"
            alt="Tablet"
            className=" w-full h-auto object-cover"
          />
        </div>



      </div>
    </section >




    {/* sec-4 M */}

    {/* Mobile Section (column layout) */}
    <section className='w-full min-h-fit flex flex-col items-center justify-center  md:hidden py-20'>
      <h1 className='font-juana font-normal text-7xl leading-[1.2] tracking-[0] mb-6 text-center'>Who is UXHQ for?</h1>


      <div className='relative bg-red500/40 w-[90vw] flex flex-col items-center mb-6'>
        <img
          src="/assets/home-page/faizur-rehman-dJpupM4LiS4-unsplash1.png"
          alt="Tablet"
          className="w-[80%]  h-auto object-cover "
        />
      </div>


      <div className='w-[90%] flex flex-col  mb-6'>
        {userTypes.map((user, idx) => (
          <div key={idx} className='flex  space-x-4 py-4'>
            <img className='w-5 h-5 my-1 bg-slate500' src={user.img} alt='' />
            <p className='font-dmsans font-normal text-[1.6rem] leading-[1.2] tracking-[0] '>{user.desc}</p>
          </div>
        ))}
      </div>
      <h3 className='font-dmsans font-semibold text-2xl leading-[1.2] tracking-[0] my-4 text-center'>
        UXHQ is built to help at every stage.
      </h3>


      <NavLink to={'/conversation'} >
        <button className="focus:outline-none focus:ring-0 group flex space-x-3 items-center bg-UXHQ-black hover:bg-UXHQ-green text-white hover:text-UXHQ-black px-8 py-4 rounded-full shadow  transition mx-auto mt-4">
          <p className='font-sans font-normal text-base leading-[1.2] tracking-[0]'>Start a conversation</p>
          {/* <span className="text-green-400 ml-2 text-xl">→</span> */}
          <div className="relative h-[0.6rem] w-[1.1rem]">
            <img
              src="/assets/home-page/arrow.png"
              alt="arrow"
              className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <img
              src="/assets/home-page/arrow-hover.png"
              alt="arrow-hover"
              className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        </button>
      </NavLink>
    </section >

























    {/* sec-5 D */}

    {/* desktop */}
    <section className='w-full min-h-fit mt-0 mb-[8rem] flex justify-center  max-md:hidden'>
      <div className='w-[90%] max-lg:w-[95%] '>
        <h1 className='font-juana font-normal text-[6.66rem] leading-[1.1] tracking-[0] text-center mx-72 bg-blue200/30'>
          How it works
        </h1>
        <div className='relative w-[95%] mx-auto flex flex-col  mt-20 overflow-hidden'>
          {/* Horizontal line */}
          <img src="/assets/home-page/Vector559.png" alt="" className="absolute top-1 left-20 w-[93%]  h-3 bg-red300 object-contain z-0" />
          {/* Bullets aligned above the line */}
          <div className="flex  space-x-8  relative z-10" style={{ padding: '0 4.5%' }}>
            {howItWorksSteps.map((_, idx) => (
              <div key={idx} className="flex space-x-80 max-lg:space-x-60    items-start w-1/3 ">
                <img className='w-5 h-5 mb-2 ml14' src='/assets/home-page/Ellipse33.png' alt='' />
                {idx < 2 && (
                  <img className=' w-5 h-5 mb-0 ' src='/assets/home-page/right-arrow.svg' alt='' />
                )}
              </div>
            ))}
          </div>
          {/* Steps below the line and bullets */}
          <div className='flex   space-x-8  py-12 px20  mt-6 z-20' style={{ padding: '0 4.5%' }}>
            {howItWorksSteps.map((step, idx) => (
              <div key={idx} className='flex flex-col   w-1/3'>
                <div className='bg-red700/50 space-y-12 mx5 py-6 rounded-xl'>
                  <div className='pt-1 pb-4'>
                    <p className='font-dmsans font-semibold text-[3.4375rem] leading-[1.2] tracking-[0]'>{step.number}</p>
                  </div>
                  <h2 className='font-dmsans font-semibold text-[1.975rem] leading-[1.2] tracking-[0]'>{step.title}</h2>
                  <p className='font-dmsans font-normal text-[1.7125rem] leading-[1.2] tracking-[0]'>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


    {/* sec-5 M */}

    {/* Mobile Section (column layout) */}
    <section className='w-full min-h-[80vh] flex flex-col items-center justify-center bg-red500/50 md:hidden pt-10'>

      <h1 className='font-juana font-normal text-7xl leading-[1.2] tracking-[0] mb-8 text-center'>How it works</h1>


      <div className='flex bg-purple200 flex-row w-full justify-center items-start'>

        {/* Vertical line with bullets */}
        <div className='relative  flex flex-col items-center overflow-hidden '>

          <div className='absolute left-5'>

            <img
              className='  mx-5 mt-2 w-[1px] h-[120vh]'
              src="/assets/home-page/Vector559vertical.png"
              alt="" />

            {/* <img className='absolute w-96 h-96 top-0 left-10 rotate-90' src="/assets/home-page/Vector559.png" alt="" /> */}

          </div>




          {/* Steps/cards in column */}
          <div className=" pl-8">


            <div className='flex flex-col flex-1 pl4 gap-8 w-[80%]'>
              {howItWorksSteps.map((step, idx) => (


                <div key={idx} className='flex relative space-x-4   '>


                  <img key={idx} src='/assets/home-page/Ellipse33.png' alt='' className='w-4 h-4 my-2' />

                  {idx < 2 && (
                    <img className=' absolute left-[-1.1rem] top-40 w-5 h-5 ' src='/assets/home-page/down-arrow.png' alt='' />
                  )}



                  <div className='w-[90%] bg-red500/40'>


                    <p className='font-dmsans font-semibold text-5xl mb-9'>{step.number}</p>
                    <h2 className='font-dmsans font-semibold text-3xl mb-4'>{step.title}</h2>
                    <p className='font-dmsans font-normal text-2xl'>{step.desc}</p>
                  </div>


                </div>



              ))}
            </div>
          </div>

        </div>

      </div>


    </section>
















    {/* sec-6 D */}

    {/* Desktop */}
    <section className='w-full max-lg:hidden min-h-fit pt-20 flex justify-center '>

      <div className='w-[90%] relative '>

        <h1 className='font-juana font-normal text-[6.85rem] leading-[1.1] tracking-[0] text-center mx-44 '>
          What people say
        </h1>

        <div className='py-10'>
          <div className="flex items-center justify-center space-x-6 relative w-full mt10">
            {/* Left Arrow */}


            <button
              onClick={handleLeft}
              disabled={!canGoLeft}
              className={`focus:outline-none focus:ring-0 rounded-full w-16 h-16 flex items-center justify-center bg-UXHQ-black text-UXHQ-green hover:bg-UXHQ-green hover:text-UXHQ-black shadow-lg absolute -left-3 z-10 transition  ${!canGoLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Previous testimonials"
            >
              <span className='text-xl mb-1 '>&lt;</span>
            </button>


            <div className="absolute flex justify-evenly top-40 items-end space-x-[39rem] max-xl:space-x-[15rem] max-lg:space-x-[5rem]  ">
              <img className='w-[23rem] object-contain' src="/assets/home-page/Union2.png" alt="" />
              <img className='w-[28rem] absolut object-contain' src="/assets/home-page/Rectangle22.png" alt="" />
            </div>
            {/* <img src="/assets/Rectangle22.png" alt="" /> */}


            <div className='bg-white min-[1540px]:py-40 rounded-3xl w-[90%] py80 h-[45rem] overflow-hidden'>

              {/* Testimonial Cards Slider */}
              <div
                className="overflow-hidden mx-auto  "
                style={{ width: `${2 * 450 + 140}px` }} // 2 cards * width + 1 gap
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${testimonialIndex * (450 + 140)}px)`,
                    gap: '140px',
                    width: `${testimonials.length * (450 + 140)}px`, // full inner width
                  }}
                >
                  {testimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className="bg-red400 rounded-2xl px-10 py-8 min-h-[180px] flex space-x-2 "
                      style={{
                        width: '455px',
                        flex: '0 0 auto', // prevent resizing
                      }}
                    >
                      <p className="font-dmsansemibold text-5xl  mb-4">
                        &ldquo;
                      </p>
                      <div className='space-y-12'>

                        <p className="font-dmsansemibold font-semibold text-[1.85rem] leading-[2.4rem]  mb-4">
                          {t.comment}
                        </p>
                        <p className="font-dmsans text-[1.7rem] text-gray-700 mt-2 ">
                          {t.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>



            {/* Right Arrow */}

            <button
              onClick={handleRight}
              disabled={!canGoRight}
              className={`focus:outline-none focus:ring-0 rounded-full w-16 h-16 flex items-center justify-center bg-UXHQ-black text-UXHQ-green hover:bg-UXHQ-green  hover:text-UXHQ-black shadow-lg  absolute -right-8 z-10 transition  ${!canGoRight ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Next testimonials"
            >
              {/* <span className="text-2xl">&#8594;</span> */}
              <span className='text-xl text-center mb-1 '>&gt;</span>
            </button>
          </div>
        </div>

      </div>




    </section>




    {/* sec-6 M */}

    {/* Mobile view */}

    <section className='w-full lg:hidden min-h-fit bg-slate600 mt-28 flex justify-center '>
      <div className='w-[100%] relative '>

        <h1 className='font-juana font-normal  text-[3.33rem] leading-[1.1] tracking-[0] text-center mx-20 '>
          What people say
        </h1>




        <div className='py-10 mx-4 mt-10 bg-white rounded-3xl'>
          <div className="flex items-center justify-center space-x-6 relative w-full mt-10">

            {/* Left Arrow */}
            <div className=' min-h-80 flex items-end'>


              <button
                onClick={MhandleLeft}
                disabled={!McanGoLeft}
                className={`focus:outline-none focus:ring-0 rounded-full w-12 h-12 flex items-center justify-center bg-UXHQ-black text-UXHQ-green hover:bg-UXHQ-green hover:text-UXHQ-black shadow-lg  absolute left-0 -bottom-28 z-10 transition  ${!McanGoLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Previous testimonials"
              >
                <span className='text-xl mb-1'>&lt;</span>
              </button>
            </div>

            {/* Decorative Background Image */}
            <div className="absolute left-10 flex justify-between items-start space-x-[40rem] bg-gray400/30">
              <img className='w-[18rem] object-contain' src="/assets/home-page/Union2.png" alt="" />
            </div>

            {/* Testimonial Cards Slider */}
            <div className='bg-white rounded-3xl'>

              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="overflow-x-auto mx-auto bg-red500/50 scrollbar-hide"
                style={{
                  width: `${McardWidth}px`,
                  scrollSnapType: "x mandatory",
                }}

              >
                <div
                  className="flex bg-red400/50 duration-500 ease-in-out  snap-x snap-mandatory scroll-smooth touch-pan-x"
                  style={{
                    // transform: `translateX(-${testimonialIndex * (McardWidth + McardGap)}px)`,
                    width: `${testimonials.length * (McardWidth + McardGap)}px`,
                    gap: `${McardGap}px`,
                    touchAction: "pan-x pan-y",        // ✅ Allow both directions

                  }}
                >

                  {testimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className="px-4 bg-red400/50 py-8 bg-blue500/50 min-h-[180px] flex snap-center z-10"

                      style={{
                        width: `${McardWidth}px`,


                        WebkitOverflowScrolling: "touch",  // ✅ Smooth mobile scrolling
                        scrollSnapStop: "always",          // ✅ stops skipping multiple cards
                        overscrollBehaviorX: "contain",    // ✅ prevents aggressive fling
                      }}
                    >
                      <p className="font-sans fontsemibold text-4xl md:text-5xl mb-4 mr-2">&ldquo;</p>
                      <div>
                        <p className="font-dmsansemibold font-semibold text-[1.3rem] md:text-[1.85rem] leading-[2rem] md:leading-[2.4rem]">{t.comment}</p>
                        <p className="font-sans text-xl md:text-[1.8rem] text-gray-700 mt-2 md:mt-6 ">{t.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <div className=' h-80 flex items-end'>
              <button
                onClick={MhandleRight}
                disabled={!McanGoRight}
                className={` focus:outline-none focus:ring-0 rounded-full w-12 h-12 flex items-center justify-center bg-UXHQ-black text-UXHQ-green hover:bg-UXHQ-green hover:text-UXHQ-black shadow-lg absolute right-0 -bottom-28 z-10 transition  ${!McanGoRight ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Next testimonials"
              >
                <span className='text-xl text-center mb-1'>&gt;</span>
              </button>
            </div>
          </div>


        </div>



        {/* Progress Bars (added below slider, above arrows) */}
        <div className="flex justify-center items-center gap-3 mt-12 max-md:visible">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500  ${testimonialIndex === idx
                ? 'w-10 h-2 bg-UXHQ-green'
                : 'w-10 h-[0.35rem] bg-UXHQ-black/80'
                }`}
            />
          ))}
        </div>




      </div>
    </section>




    {/* sec-7 D */}

    <section className='w-full max-lg:hidden min-h-fit mt-60 mb-[13rem] pb-[0rem] flex justify-center '>

      <div className='w-[80%] space-x-[0.5rem]  ml-[5rem] h-fit flex justify-center items-center max-lg:mt-20 '>


        <div className='w-[45%]  h-fit bg-blue500/50'>
          <img src="/assets/home-page/triangle3.png" alt="" />
        </div>


        <div className='w-1/2 flex h-fit flex-col   bg-red400/50 space-y-5 pr20 '>

          <h1 className='font-juana font-normal text-[4.0rem] pb-2'>
            Privacy & trust
          </h1>

          <div className='space-y-7 text-[1.675rem] leading-[2.15rem]'>

            <p>
              We only collect the minimum information needed to give you relevant guidance. Your information will only be used by us to improve your experience and keep you informed, if you choose to hear from us.

            </p>

            <p>

              You are always in control of what you share. The chat doesn't require personal or confidential information, describe your situation in whatever level of detail feels right to you. UXHQ is here to help, not to pry.
            </p>
          </div>


          <div className=' mt-20 flex justify-end'>

            <NavLink className='underline underline-offset-4 font-sans text-xl' to={'/faq'}>Read our FAQ's <span className='text-3xl'>→</span></NavLink>

          </div>









        </div>




      </div>




    </section>




    {/* sec-7 M */}

    {/* mobile view */}



    <section className='w-full lg:hidden min-h-fit mt-10 mb-10 flex justify-center '>

      {/* <div className='w-[80%] flex  '> */}

      <div className='w-full mx-4  flex flex-col justify-center mt-10 mb-20 space-y-6 '>



        <h1 className='font-juana text-center font-normal text-7xl py-8'>
          Privacy & trust
        </h1>

        <div className='w-[70%] pb-6 mx-auto '>
          <img src="/assets/home-page/triangle3.png" alt="" />
        </div>




        <div className='font-dmsans space-y-7 text-[1.675rem] leading-9 max-lg:w-[50%] max-md:w-[96%] mx-auto'>

          <p>
            We only collect the minimum information needed to give you relevant guidance. Your information will only be used by us to improve your experience and keep you informed, if you choose to hear from us.

          </p>

          <p>

            You are always in control of what you share. The chat doesn't require personal or confidential information, describe your situation in whatever level of detail feels right to you. UXHQ is here to help, not to pry.
          </p>
        </div>


        <div className=' mt-20 max-md:w-[96%] ml-3 flex justify-start'>

          <NavLink className='underline font-sans text-xl' to={'/faq'}>Read our FAQ's <span className='text-2xl'>→</span></NavLink>

        </div>









      </div>




      {/* </div> */}




    </section>






  </>)
}

export default hero
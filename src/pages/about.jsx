import { useState, useRef } from 'react'


import GetStartedSection from "../components/GetStartedSection";
const about = () => {

  const cards = [
    {
      img: "/assets/home-page/s2ico1.png",
      title: "We guide your career, not your tasks",
      desc:
        "We won't teach you how to run usability tests or create wireframes. Instead, we help you understand your direction, where you fit, what roles suit your strengths, and what to work on next.",
    },
    {
      img: "/assets/home-page/s2ico2.png",
      title: "We complement, not compete",
      desc:
        "There are excellent places to learn UX skills. That's not us. Think of UXHQ as the layer above, a mentor to help you navigate the industry, not a teacher to explain the tools.",
    },
  ];

  const people = [
    {
      img: "/assets/about/person1.png",
      name: "Oliver West, CCXP",
      title: "Founder",
      linkedin: "/assets/about/linkedin.svg",
      linkedinHover: "/assets/about/linkedin-hover.svg",

      url: "https://www.linkedin.com/in/oliver-west-ccxp/",
      description: [
        "Oliver has worked in UX and CX for over 25 years. He has built and led global teams, mentored hundreds of professionals, and created digital products across sectors and continents",
        "He has worked with many of the world's leading brands, and agencies, including Apple, Amazon, Microsoft, Coca Cola, Goldman Sachs and many others. UXHQ is his way of helping the next generation grow with more clarity than he ever had."
      ]
    },
    {
      img: "/assets/about/person2.png",
      name: "Chris Callaghan, UXMC",
      title: "Strategic Advisor",
      linkedin: "/assets/about/linkedin.svg",
      linkedinHover: "/assets/about/linkedin-hover.svg",
      url: "https://www.linkedin.com/in/chriscallaghan/",
      description: [
        "Chris brings decades of experience building research and design teams across UX, CRO, and broader digital functions in start-up and global agencies.",
        "A certified UX Master with credentials from NN/g, HFI, Baymard, and more, Chris has a wealth of hands-on experience which he contributes to the community through a keen spirit of service. An invited speaker, author, and trainer, Chris has supported thousands of UX professionals in their personal growth and plays a key role in grounding UXHQ in real-world practice."
      ]
    }
  ];

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

    {/* sec-1 D */}
    <section className="w-full max-md:hidden h">
      {/* <div className='h-28'></div> */}

      <div className='my-8 h-[50rem] min-h-[86vh] relative flex bg-red300/70 items-center justify-center '>



        <div className='w-[80%] z-20 space-y-[5rem]     bg-blue300'>


          <div className='flex flex-col space-y-10 justify-center items-center'>

            <p className='font-dmsans text-center text-3xl'>About Us</p>


            <div className='font-juana text-center font-normal text-[6.65rem]  leading-[1.1] tracking-[0]'>
              <h1>
                Clarity for one.
              </h1>
              <h1 >
                Progress for all.
              </h1>
            </div>
          </div>


          <p className=' font-dmsans text-center mx-auto font-normal text-[1.995rem] leading-[1.15] tracking-[0] mt-8 pt-4 w-[65%]  '>
            UXHQ was created to bring structure, honesty, and direction to an industry full of mixed messages. We guide individuals, not job titles. We offer clarity, not buzzwords. And we believe that when one UXer grows, the whole industry benefits.
          </p>
        </div>



        <img className='w-[38.31375rem] max-lg:w-[25.31375rem] z-0 left-11 top-0 max-lg:top-32 absolute' src="/assets/about/union1.png" alt="" />
        <img className='w-[38.31375rem] max-lg:w-[25.31375rem] z-0 right-11 top-[21.4rem] max-lg:top-80 absolute' src="/assets/about/union2.png" alt="" />



      </div>




    </section>



    {/* sec-1 M */}
    <section className="w-full md:hidden   max-md:min-h-fit ">
      {/* <div className='h-28'></div> */}

      <div className='pt-8 pb-10 mt-0  relative flex bg-red300/70   '>



        <div className='w-[98%] z-20 space-y-10  flex flex-col    bg-blue300'>


          <div className='flex flex-col pl-4 '>

            <p className='text-3xl pb-7'>About Us</p>

            <h1 className='font-juana font-normal text-[4.35rem]  leading-[1.1] tracking-[0]'>
              Clarity for one.
            </h1>
            <h1 className='font-juana font-normal text-[4.35rem]  leading-[1.1] tracking-[0]'>
              Progress for all.

            </h1>




            <p className='font-dmsans pt-[30rem] font-normal text-[1.675rem] leading-[1.2] tracking-[0] mt-8 w-[98%] bg-red500  '>
              UXHQ was created to bring structure, honesty, and direction to an industry full of mixed messages. We guide individuals, not job titles. We offer clarity, not buzzwords. And we believe that when one UXer grows, the whole industry benefits.
            </p>


          </div>

        </div>



        <img className='w-[18rem] z-0 right-[1rem] top-[13rem]  absolute' src="/assets/about/union1.png" alt="" />
        <img className='w-[18rem] z-0 right-[11rem] top-[23rem]  absolute' src="/assets/about/union2.png" alt="" />



      </div>




    </section>








    {/* sec-2 D */}
    <section className='w-full  max-md:hidden min-h-[78vh] max-lg:min-h-[80vh] my-10 py-40 max-[1280px]:py-0 flex justify-center '>

      <div className='w-[80%] flex items-center space-x10 '>



        <div className='w-1/2  max-md:mt-0 bg-blue400/50 space-y-20 pr20 '>

          <h1 className='font-juana font-normal text-[5.55rem] leading-[1rem] max-lg:text-6xl pb-2'>
            Why we exist
          </h1>

          <div className='font-dmsans space-y-7 text-[1.7rem] max-lg:text-[1.4rem] leading-8'>

            <p>
              Too many people are trying to get into UX, or grow within it without clear guidance. Job titles blur. Expectations balloon. And the internet is full of contradictory advice and role misunderstandings.
            </p>
            <p>

              UXHQ is here to cut through that noise. We help people figure out where they naturally sit within the UX spectrum, across creativity, science, and business and what steps to take next.
            </p>
            <p>
              Whether you want to become a product designer, shift into UX research, or grow your influence as a strategist, we're here to help you do it with confidence, not confusion.


            </p>

          </div>









        </div>



        <div className='w-2/3 bg-red500/30 flex items-center justify-center'>
          <img className='w-[95%]' src="/assets/about/triangle.png" alt="" />
        </div>


      </div>




    </section>




    {/* sec-2 M */}

    <section className='w-full md:hidden h-fit mt-4 bg-red400 flex justify-center '>


      <div className='w-full mx-4  flex flex-col justify-center mt-10 mb-20  space-y-3 '>



        <h1 className='font-juana text-center font-normal text-7xl py-8'>
          Why we exist
        </h1>


        <div className='space-y-7 text-2xl'>


          <p>
            Too many people are trying to get into UX, or grow within it without clear guidance. Job titles blur. Expectations balloon. And the internet is full of contradictory advice and role misunderstandings.
          </p>
          <p>

            UXHQ is here to cut through that noise. We help people figure out where they naturally sit within the UX spectrum, across creativity, science, and business and what steps to take next.
          </p>
          <p>
            Whether you want to become a product designer, shift into UX research, or grow your influence as a strategist, we're here to help you do it with confidence, not confusion.


          </p>

        </div>



        <div className='w-[95%] pt-10 mx-auto '>
          <img src="/assets/about/triangle-mobile.png" alt="" />
        </div>









      </div>






    </section>




    {/* sec-3 D&M */}
    {/* Where we fit */}








    <section className='w-full min-h-fit bg-red500/30  max-md:min-h-[50vh] max-md:mb-20 mt-44 max-md:mt-10 lg:pb-0 flex justify-center '>
      <div className='w-[80%]  max-lg:w-[100%]  max-md:flex max-md:flex-col max-md:items-center'>
        <h1 className='font-juana pb-[3.5rem] font-normal text-[5.25rem] max-md:text-[3.7rem] leading-[1.1] tracking-[0] text-center'>
          Where we fit
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
                className={`bg-white max-md:rounded-3xl max-md:mx-5 p-10 max-md:py-20 max-md:p-10 space-y-6 w-full max-md:min-w-[90vw] max-md:max-w-[90vw]  max-md:relative snap-center`}
                style={{
                  WebkitOverflowScrolling: "touch",  // ✅ Smooth mobile scrolling
                  scrollSnapStop: "always",          // ✅ stops skipping multiple cards
                  overscrollBehaviorX: "contain",    // ✅ prevents aggressive fling
                }}
              >

                {/* Icon at top right on mobile */}
                <img className='mb-4 w-16 h-16 bg-red500/50 object-contain flex-shrink-0  max-md:absolute max-md:top-8 max-md:right-8 max-md:mb-0' src={card.img} alt='' />
                <h1 className='font-dmsans font-semibold text-[1.975rem] max-md:text-3xl leading-[1.2] tracking-[0]  pt-9 max-md:mt-16'>{card.title}</h1>
                <p className='font-dmsans font-normal text-[1.63rem] max-md:text-2xl leading-[1.2] tracking-[0]'>{card.desc}</p>
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




    {/* sec-4 D */}

    <section className='w-full mt-0 bg-blue400  min-h-fit bg-red500/50 max-md:hidden'>


      <div className='space-y-32 pt-[min(20vh,200px)]'>

        <div>

          <h1 className='font-juana mb-40 font-normal text-[5.05rem] max-md:text-[4.5rem] leading-[1.1] tracking-[0] text-center'>
            Who's behind it
          </h1>
        </div>

        <div className='w-[80%] mx-auto space-y-60'>


          {people.map((person, index) => (

            <div key={index} className={`bg-white flex max-lg: rounded-3xl ${index === 0 ? 'min-h-[40rem] max-[1680px]:min-h-[36rem]  max-[1580px]:min-h-[40rem] max-[1080px]:min-h-[28rem]' : ' min-h-[34.5rem] max-[1680px]:min-h-[33rem] max-[1280px]:min-h-[39rem] max-[1180px]:min-h-[38rem] max-[1080px]:min-h-[28rem]'}`}>


              <div className='bg-red400/50 w-[50%] pr10'>
                <div className='relative w-full h-full '>
                  <img className='absolute bottom-0 -left-10 w-[44rem] max-[1270px]:w-[66rem] max-[1070px]:w-[86rem]' src={person.img} alt={person.name} />

                </div>
              </div>

              <div className='bg-blue400/50 w-[60%] space-y-10 max-lg:space-y-4 py-4 flex flex-col justify-center pr-20'>


                <div className='flex w-[97%] bg-red500/70 justify-between mx-4'>
                  <div className='space-y-2 font-dmsans  text-[2.675rem] max-lg:text-[2.075rem] max-md:text-3xl leading-[1.2] tracking-[0]'>
                    <h1 className='font-semibold '>
                      {person.name}
                    </h1>
                    <h2 className=''>
                      {person.title}
                    </h2>
                  </div>

                  <a
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block w-[32px] h-[32px] group"
                  >
                    <img
                      src={person.linkedin}
                      alt="LinkedIn"
                      className="absolute top-0 left-0 w-full h-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src={person.linkedinHover}
                      alt="LinkedIn Hover"
                      className="absolute top-0 left-0 w-full h-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    />

                  </a>

                </div>

                <div className='mx-4'>
                  <p className='font-dmsans  text-[1.695rem] max-lg:text-[1.315rem] max-md:text-3xl leading-[1.2] tracking-[0]'>
                    {person.description.map((para, index) => (
                      <p key={index} className="mb-4 text-gray-700">
                        {para}
                      </p>
                    ))}
                  </p>
                </div>

              </div>


            </div>


          ))}
        </div>



      </div>


    </section>



    {/* sec-4 M */}

    <section className='w-full h-fit bg-red500/50 flex flex-col items-center justify-center  md:hidden pt-24'>
      <div className='w-[90%] flex flex-col items-center space-y-24'>
        <h1 className='font-juana font-normal text-[4rem] leading-[1.1] text-center'>
          Who is behind it
        </h1>

        <div className='w-full space-y-32'>


          {people.map((person, index) => (
            <div
              key={index}
              className={`flex bg-white flex-col justify-between space-y-6 items-start px-2 mx-4 py-6 rounded-3xl ${index === 0 ? 'min-h-[64rem]' : 'min-h-[64rem]'}`}
            >
              {/* 1st row: Image */}
              <div className='w-full h-fit bg-red400/50 flex justify-center'>
                <div className='relative w-full h-full'>
                  <img className='absolute -top-20 left-1/2 transform -translate-x-1/2 w-[40rem] rounded-md' src={person.img} alt={person.name} />
                </div>
              </div>
              <div className='bg-red300 w-full h-[15rem]' />
              <div className='px-6 space-y-6'>
                {/* 2nd row: Name, Title, LinkedIn */}
                <div className='w-full flex justify-between items-center'>
                  <div>
                    <h1 className='font-dmsans font-semibold text-3xl leading-[1.2]'>
                      {person.name}
                    </h1>
                    <h2 className='font-dmsans font-normal text-2xl '>
                      {person.title}
                    </h2>
                  </div>
                  {/* <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/about/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                  </a> */}
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block w-[22px] h-[22px] group"
                  >
                    <img
                      src={person.linkedin}
                      alt="LinkedIn"
                      className="absolute top-0 left-0 w-full h-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src={person.linkedinHover}
                      alt="LinkedIn Hover"
                      className="absolute top-0 left-0 w-full h-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    />

                  </a>

                </div>
                {/* 3rd row: Description */}
                <p className='font-dmsans text-[1.43rem] leading-[1.6] text-gray-700'>
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    {/* sec-5 D&M */}




    <GetStartedSection
      title="Ready to get started?"
      description="Get your personalised UX career report and take the next step in your journey."
    />



  </>)
}

export default about
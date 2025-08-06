src/pages/about.jsx:

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



src/pages/faq.jsx


import { useState, useRef } from 'react'
import GetStartedSection from "../components/GetStartedSection";

const faqData = [
  {
    question: "Why is it free?",
    answer:
      "UXHQ was built to give back to the UX community and bring clarity to an often confusing industry. Everyone deserves honest, structured guidance, especially early in their career. While we offer the product for free, we sometimes recommend tools, courses, or partners we genuinely believe in. If they offer a commission, it helps us cover the costs of running the platform, but that’s not why we choose them. We only recommend products we trust, not ones that pay. This isn’t about profit. It’s about impact and sustainability.",
  },
  {
    question: "Why should I trust it?",
    answer:
      "UXHQ is built by seasoned UX leaders with over 50 years of combined experience. We’ve hired, mentored, trained or supported thousands of professionals, many of whom have faced the exact same challenges as you. We’ve seen how messy the industry can get, and we created UXHQ to cut through the noise. It’s grounded in practice, not theory and written by those who’ve done the work, not just read about it.",
  },
  {
    question: "Is it really built by UX experts?",
    answer:
      "Yes. UXHQ is powered by the UX Brain, a private knowledgebase built on over 50 years of hands-on experience in UX research, design, strategy, and leadership. It’s curated by real practitioners, not cobbled together from random online sources.",
  },
  {
    question: "How is this different to asking ChatGPT?",
    answer:
      "The common AI tools give you a generalist view, based on whatever it finds online. UXHQ is different: it’s built specifically for UX career guidance and only uses original, expert-written content. It also follows a conversation model designed to guide, not just answer, so the advice feels more like a mentor, not a search engine.",
  },
  {
    question: "Can I talk to someone about my report?",
    answer:
      "At this stage, UXHQ is designed to be fully self-serve. But we are exploring ways to offer deeper support through coaching, community, or advisor feedback in the future.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. UXHQ will never sell your data or share it with third parties. Your information is only used to deliver your report and improve your experience. You’ll always have control over whether or not to receive updates from us.",
  },
  {
    question: "What if my background or projects are confidential?",
    answer:
      "You never need to share company names, proprietary work, or colleague’s details. The system is designed to work with generalised input, just share what you're comfortable with.",
  },
  {
    question: "Do I need to be technical to use this?",
    answer:
      "Not at all. UXHQ is designed for anyone exploring or progressing in UX, whether you’re coming from design, research, writing, or a completely different background.",
  },
  {
    question: "Will this help me get a job?",
    answer:
      "UXHQ isn’t a recruiter or job board. It won’t apply for jobs on your behalf, but it will help you understand your strengths, identify gaps, and craft a clearer story about who you are and where you're heading. This kind of self-awareness and framing is exactly what more mature hiring managers and employers are looking for.",
  },
  {
    question: "Will this help me with specific UX tasks or techniques?",
    answer:
      "UXHQ offers mentoring, not coaching. Coaching often focuses on performance in a specific role or task, like how to run a usability test or improve a particular deliverable. Mentoring, on the other hand, is about guiding your bigger picture: helping you reflect on where you are, where you're headed, and what questions you need to be asking. We won’t teach you specific techniques, but we will help you figure out what you need to learn, and why.",
  },
  {
    question: "If I already use UX courses or resources, why would I need UXHQ?",
    answer:
      "Most learning platforms focus on teaching you how to do something, how to run a usability test, create a prototype, or use Figma. UXHQ helps with the step before that. We guide your career, not your tasks. We help you understand where you fit in the industry, what roles align with your strengths, and what to work on next. It’s about clarity, not coursework. Think of UXHQ as the mentor that helps you decide what matters, before you invest time or money in learning it. We’re not here to compete with training platforms, we’re here to make them more useful by helping you approach them with purpose.",
  },
];
//
const faq = () => {


  return (<>

    {/* sec-1 D&M */}
    <section className="w-full  min-h-fit ">
      {/* <div className='h-28'></div> */}

      <div className='pt-[6rem] pb-[9.4rem] max-sm:pt-[4rem] max-sm:pb-[3rem] min-h-fit flex bg-red300/70 items-center justify-center '>



        <div className='w-[80%] z-20 space-y-[3.8rem] max-md:space-y-10  flex flex-col items-center justify-center   bg-blue300'>



          <h1 className='font-juana text-center font-normal text-[6.55rem] max-md:text-[4.25rem] w-[70%] leading-[1.1] tracking-[0]'>
            Frequently Asked Questions
          </h1>




          <p className=' font-dmsans text-center mx-auto font-normal text-[1.985rem] max-md:text-[1.295rem] leading-[1.15] tracking-[0] mt-8 w-[60%] max-md:w-[80%]'>
            Everything you need to know about UXHQ and how it works.
          </p>
        </div>


      </div>


    </section>




    {/* sec-2 D */}
    <section className="w-full max-md:hidden min-h-screen bg-red500/50 ">

      <div className=' w-[97%] max-md:w-[100%] mx-auto  bg-white py-[0rem] flex  items-center justify-center rounded-3xl '>



        <div className="w-[100%]   max-md:mx-6 ">
          {faqData.map((faq, index) => {
            const [open, setOpen] = useState(false);
            const contentRef = useRef(null); // ✅ reference to the content

            return (
              <div
                key={index}
                className={`flex flex-row items-start py-16 ${index !== 0 ? 'border-t border-UXHQ-white' : ''} rounded-3xl`}
              >
                {/* Column 1 */}
                <div className='w-[17%] text-center'>
                  <div className="w-[30px] md:w-full text-2xl font-semibold shrink-0 pt-1">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 mt-2 max-md:mt-0 pr-4 md:pr-10">
                  <h3 className="text-[2.75rem] leading-[3rem] max-md:text-3xl font-semibold">
                    {faq.question}
                  </h3>

                  {/* Animated wrapper */}
                  <div
                    ref={contentRef}
                    className="transition-all bg-red300 duration-700 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
                      opacity: open ? 1 : 0,
                    }}
                  >
                    <p className="mt-12 max-md:mt-6 text-[1.675rem] leading-[2.25rem] max-md:text-2xl text-gray-700 mr-20 mb-[4rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Column 3: Toggle Button */}
                <div className='w-[21%] max-md:w-[10%] flex items-center justify-center md:justify-start'>
                  <button
                    onClick={() => setOpen(!open)}
                    className="focus:outline-none focus:ring-0 w-20 max-md:w-10 rounded-full transition-all duration-300"
                  >
                    <img
                      src={open ? "/assets/faq/minus.png" : "/assets/faq/plus.png"}
                      alt={open ? "Close" : "Open"}
                      className="w-full h-full object-contain"
                    />
                  </button>
                </div>
              </div>
            );
          })}

        </div>





      </div>
    </section>


    {/* sec-2 M */}

    <section className="w-full md:hidden bg-red500/50 min-h-screen  ">

      <div className=' w-[97%] max-md:w-[100%] mx-auto  bg-white py-[0rem] flex  items-center justify-center rounded-3xl '>



        <div className="w-[100%]   max-md:mx-6 my4 space-y24">
          {faqData.map((faq, index) => {
            const [open, setOpen] = useState(false);
            const contentRef = useRef(null); // ✅ reference to the content

            return (
              <div
                key={index}
                className={`flex flex-row items-start py-16 ${index !== 0 ? 'border-t border-UXHQ-white' : ''} rounded-3xl`}
              >
                {/* Column 1 */}
                <div className='w-[17%] text-center'>
                  <div className="w-[30px] md:w-full text-2xl font-semibold shrink-0 pt-1">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 mt-2 pr-4 md:pr-10">


                  <div className='flex bg-red500/50 items-center justify-between'>

                    <h3 className="text-[2.75rem] leading-[3rem] max-md:text-3xl font-semibold">
                      {faq.question}
                    </h3>


                    {/* Column 3: Toggle Button */}
                    <div className='w-[21%] max-md:w-[10%] flex items-center justify-center md:justify-start'>
                      <button
                        onClick={() => setOpen(!open)}
                        className="focus:outline-none focus:ring-0 w-20 max-md:w-10 rounded-full transition-all duration-300"
                      >
                        <img
                          src={open ? "/assets/faq/minus.png" : "/assets/faq/plus.png"}
                          alt={open ? "Close" : "Open"}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    </div>
                  </div>


                  {/* Animated wrapper */}
                  <div
                    ref={contentRef}
                    className="transition-all bg-red300 pr-4 duration-700 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
                      opacity: open ? 1 : 0,
                    }}
                  >
                    <p className="mt-12 max-md:mt-6 w-full bg-blue500 text-[1.675rem] leading-[2.25rem] max-md:text-2xl text-gray-700 mr-20 mb-[4rem]">
                      {faq.answer}
                    </p>
                  </div>



                </div>





              </div>
            );
          })}

        </div>





      </div>
    </section>









    {/* sec-3 D&M */}



    <GetStartedSection
      title="Ready to get started?"
      description="Get your personalised UX career report and take the next step in your journey."
    />

  </>)
}

export default faq




src/pages/framework.jsx

import GetStartedSection from "../components/GetStartedSection";
const framework = () => {



  // Lens data array for the 'three lenses' section
  const lenses = [
    {
      number: '01',
      title: 'Creativity',
      desc: 'Problem solving, originality, aesthetics, storytelling',
    },
    {
      number: '02',
      title: 'Science',
      desc: 'Psychology, evidence, rigour, behavioural understanding',
    },
    {
      number: '03',
      title: 'Business',
      desc: 'Value, outcomes, strategy, real-world context',
    },
    {
      number: '++',
      title: 'Core Skills',
      desc: 'Communication, empathy, collaboration',
    },
  ];

  // Roles data array for the role cards section
  const roles = [
    {
      title: 'UI Designer',
      primaryLens: 'Creativity',
      supporting: 'Business & Science',
      description: 'UI designers focus on visual clarity, emotion, and brand expression. Their creativity is evident in layout, typography, interaction, and aesthetics. But they also need to understand user needs (Science) and business goals like conversion and accessibility (Business) even if others lead those areas.',
      image: '/assets/framework/design1.svg'
    },
    {
      title: 'UX Researcher',
      primaryLens: 'Business & Creativity',
      supporting: 'Business',
      description: 'UX researchers uncover insights through observation, testing, and analysis. Their work is evidence-driven and ethical. They must translate findings into business impact and often use creativity to shape research approaches or influence teams.',
      image: '/assets/framework/design2.svg'
    },
    {
      title: 'UX Architect',
      primaryLens: 'Science and Business',
      supporting: 'Creativity (in logic and structure)',
      description: 'UX architects bring order to complexity. They design structures, flows, and frameworks. While their creativity may not be visual, it shows up in how they solve navigation, logic, and system problems in intuitive ways.',
      image: '/assets/framework/design3.svg'
    },
    {
      title: 'UX Designer',
      primaryLens: 'Balanced across all three lenses',
      supporting: '',
      description: 'A UX designer bridges user insight, design thinking, and business value. They research, ideate, and build with enough depth in each lens to adapt to context. Their strength lies in versatility and knowing when to lead with which lens.',
      image: '/assets/framework/design4.svg'
    },

  ];



  return (<>

    {/* sec-1 D */}
    <section className="w-full max-md:hidden min-h-screen bg-red500">
      {/* <div className='h-28'></div> */}

      <div className='my-20 h-[50rem] min-h-[77vh] relative flex bg-red300/70 items-center justify-center '>



        <div className='w-[80%] z-20 space-y-20     bg-blue300'>


          <div className='flex flex-col space-y-16 justify-center items-center'>

            <p className='font-dmsans text-center text-3xl'>Our Framework</p>
            <h1 className='font-juana text-center font-normal text-[6.75rem]  leading-[1.1] tracking-[0]'>
              The Three Lenses.
            </h1>

          </div>


          <p className=' font-dmsans text-center mx-auto font-normal text-[1.995rem] leading-[1.15] tracking-[0] mt-8 w-[60%]  '>
            UX is a multidisciplinary field shaped by three core lenses: <b> Creativity, Science,</b> and <b> Business</b>. Every UX professional draws on all three but the balance shifts depending on your role, strengths, and career path.
          </p>
        </div>



        <img className='w-[19rem] max-lg:w-[13rem] mt-10  z-0 left-8 top-1/2 -translate-y-1/2  absolute' src="/assets/framework/union1.png" alt="" />
        <img className='w-[19rem] max-lg:w-[13rem] mt-10  z-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2   absolute' src="/assets/framework/union2.png" alt="" />
        <img className='w-[19rem] max-lg:w-[13rem] mt-10  z-0 right-8 top-1/2 -translate-y-1/2  absolute' src="/assets/framework/union1.png" alt="" />



      </div>


      <div className='w-[83%]  mx-auto  mt-[16.5rem]'>


        <h1 className='font-juana font-normal text-[3.95rem] pl-7 z-30 leading-[1.3] tracking-[0]'>
          At UXHQ, we use this model to help you understand your natural leanings and uncover growth areas. This isn’t about choosing one lens over another, it’s about recognising where you’re strongest, where you’re stretching, and how to build toward balance over time.
        </h1>

      </div>

    </section>



    {/* sec-1 M */}
    <section className="w-full md:hidden  bg-red500/50 max-md:min-h-fit ">
      {/* <div className='h-28'></div> */}

      <div className='py-10 mt-6 h-min-[110vh] relative flex    '>



        <div className='w-[98%] z-20 space-y-10  flex flex-col    bg-blue300'>


          <div className='flex flex-col pl-4 space-y-4'>

            <p className='text-[1.675rem] leading-[2.25rem]'>Our Framework</p>
            <h1 className='font-juana font-normal bg-red500 text-[4.25rem]  leading-[1.1] tracking-[0]'>
              The Three Lenses.
            </h1>





            <p className='font-dmsans pt-[34rem] font-normal text-[1.575rem] leading-[1.2] tracking-[0] mt-8 w-[90%] bg-red500  '>
              UX is a multidisciplinary field shaped by three core lenses: <b> Creativity, Science,</b> and <b> Business</b>. Every UX professional draws on all three but the balance shifts depending on your role, strengths, and career path.
            </p>


          </div>

        </div>



        <img className='max-[490px]:w-[12rem] max-[460px]:w-[10rem] max-[392px]:w-[9rem] max-[360px]:w-[8rem] h-[32rem]  z-0 left-6 top-[13rem] -translate-y1/2  absolute' src="/assets/framework/union1.png" alt="" />
        <img className='max-[490px]:w-[12rem] max-[460px]:w-[10rem] max-[392px]:w-[9rem] max-[360px]:w-[8rem] h-[32rem]  z-0 left-1/2 top-[13rem] -translate-y1/2 -translate-x-1/2   absolute' src="/assets/framework/union2.png" alt="" />
        <img className='max-[490px]:w-[12rem] max-[460px]:w-[10rem] max-[392px]:w-[9rem] max-[360px]:w-[8rem] h-[32rem]  z-0 right-6 top-[13rem] -translate-y1/2  absolute' src="/assets/framework/union1.png" alt="" />


      </div>


      <div className='w-[90%]  mx-auto  mt-20'>


        <h1 className='font-juana font-normal text-[2.35rem] z-30 leading-[1.1] tracking-[0]'>
          At UXHQ, we use this model to help you understand your natural leanings and uncover growth areas. This isn’t about choosing one lens over another, it’s about recognising where you’re strongest, where you’re stretching, and how to build toward balance over time.
        </h1>

      </div>



    </section>




    {/* sec-2 D&M */}


    <section className='w-full  min-h-[80vh] pt-32 md:mt-[2rem] max-md:pt-20 '>


      <div className='w-[90%] max-[400px]:w-full mx-auto flex max-md:flex-col justify-center bgblue-500/30 '>

        <div className='w-[100%] bg-green200 md:w-[60%] max-sm:px-1 flex justify-end max-md:justify-center relative'>
          <picture>
            <source media="(max-width: 767px)" srcSet="/assets/framework/triangle-mobile.png" />
            <img
              className='w-[82rem]  max-lg:w-[70rem] md:absolute -right-16'
              src="/assets/framework/triangle.png"
              alt=""
            />
          </picture>
        </div>





        {/* Right: Lenses List (on mobile, below triangle) */}
        <div className=' w-[47%] max-lg:w-full bg-red400/50 pt-8 max-lg:pt-0 max-lg:order-3'>
          <div className="space-y-4 bg-red400/50 w-fit max-md:w-full mx-auto max-md:mt-20">
            {lenses.map((lens, idx) => (
              <div key={idx} className='flex bg-red400/50 space-x-2'>


                <div className='mx-2 max-lg:mr-2 m-4 w-12  flex-shrink-0 text-right'>
                  <p className={`font-dmsans font-semibold text-[2.2375rem] max-lg:text-[2.0375rem] leading-[1.2] tracking-[0]${idx < 3 ? ' text-[#14FF14]' : ''}`}>{lens.number}</p>
                </div>



                {/* desktop */}
                <div className='mt-4 space-y-4 max-lg:hidden  max-lg:justify-between '>
                  <h2 className='font-dmsans bg-red500 max-lg:w-[300px] max-lg:pr10 font-semibold text-[3.6075rem] max-lg:text-[3.0375rem] leading-[1.2] tracking-[0]'>{lens.title}</h2>
                  <p className='font-dmsans max-lg:text-[2.2375rem] text-[1.7375rem]'>{lens.desc}</p>
                </div>


                {/* mobile */}
                <div className='mt-4 lg:hidden sm:w-[80%] flex bg-red400/50 '>
                  <h2 className='font-dmsans font-semibold text-[3.0375rem] max-lg:text-[2.1rem] max-md:w-[11.1rem] max-lg:w-[15.5rem] leading-[1.2] tracking-[0] max-lg:truncate'>
                    {lens.title}
                  </h2>
                  <p className='font-dmsans max-lg:text-[1.2375rem]  max-lg:w-[22rem] max-md:w-[34rem] max-sm:w-[28rem] max-[580px]:w-[24rem] max-[480px]:w-[18rem] max-[390px]:w-[16rem] max-[350px]:w-[14rem]'>{lens.desc}</p>
                </div>


              </div>
            ))}
          </div>
        </div>




        {/* Right: Lenses List (on mobile, below triangle) */}
        <div className='hidden bg-blue800/40 w-1/2 max-md:w-full pt-20 max-md:pt-0 max-md:order-3'>
          <div className="space-y-4">
            {lenses.map((lens, idx) => (
              <div key={idx} className='flex space-x-2'>


                <div className='mx-2 max-md:mr-2 m-4 w-12  flex-shrink-0 text-right'>
                  <p className={`font-dmsans font-semibold text-[2.4375rem] max-md:text-[2.0375rem] leading-[1.2] tracking-[0]${idx < 3 ? ' text-[#14FF14]' : ''}`}>{lens.number}</p>
                </div>



                {/* desktop */}
                <div className='mt-4 max-md:hidden  max-md:justify-between '>
                  <h2 className='font-dmsans bg-red500 max-md:w-[300px] max-md:pr10 font-semibold text-[3.0375rem] max-md:text-text-[3.0375rem] leading-[1.2] tracking-[0]'>{lens.title}</h2>
                  <p className='max-md:text-[1.2375rem]'>{lens.desc}</p>
                </div>


                {/* mobile */}
                <div className='mt-4 md:hidden  flex max-md: '>
                  <h2 className='font-dmsans font-semibold text-[3.0375rem] max-md:text-[2.6rem] max-md:w-[14.5rem]  leading-[1.2] tracking-[0] max-md:truncate'>
                    {lens.title}
                  </h2>
                  <p className='max-md:text-[1.2375rem] max-md:w-[12rem]'>{lens.desc}</p>
                </div>


              </div>
            ))}
          </div>
        </div>







      </div>



    </section>







    {/* sec-3 D&M */}
    <section className="w-full bg-red500/50 md:mt-80 max-md:mt-0 min-h-screen max-md:min-h-fit ">

      <div className='pt-28 min-h-[60vh] flex flex-col bg-red300/70 items-center justify-center '>



        <div className='w-[80%] max-md:w-[95%] z-20 space-y-12  pb-16 flex flex-col justify-center items-center  bg-blue300'>

          <h1 className='font-juana font-normal w-[71%] max-md:w-[90%] text-[6.55rem] max-md:text-[3.95rem]  leading-[1.1] tracking-[0] text-center'>
            How the lenses show up in real roles
          </h1>


          <p className='font-dmsans w-[71%] max-md:w-full text-center font-normal text-[2.675rem] max-md:text-[1.475rem] leading-[1.2] tracking-[0] mt-6   '>
            These are just a few examples of how different roles lean into the lenses in different ways.
          </p>
        </div>







        {/* Cards */}
        {/* Cards Section */}
        <div className="w-full flex justify-center pb20">




          <div className="w-[83%] max-lg:w-[95%]  grid grid-cols-1 md:grid-cols-2 gap-[4.4rem]">


            {roles.map((role, index) => (
              <div key={index} className="bg-red300 space-y-10 border-2 border-UXHQ-black rounded-3xl px-16 pt-[5.8rem] max-md:px-10  max-md:pt-20 flex flex-col justify-between min-h-[40vh]">



                <h2 className='font-dmsans font-semibold text-6xl mb-4 max-sm:text-[2.5rem]'>{role.title}</h2>


                <div className='space-y-2 text-[1.575rem] max-md:text-[1.375rem] leading-[2.25rem] font-dmsans mb-4'>
                  <h3 className=' '>
                    <span className=' font-semibold'>Primary lens: </span>
                    <span className=' '>{role.primaryLens}</span>
                  </h3>
                  <h3 className=' '>
                    <span className=' font-semibold'>Supporting: </span>
                    <span className=' '>{role.supporting}</span>
                  </h3>
                </div>


                <p className="my-8 font-dmsans w-[90%] text-gray-700 bg-gray--300 shrink text-[1.29rem] leading-[1.8rem]">
                  {role.description}
                </p>


                <img src={role.image} alt={role.title} className="w-full pt-10 pb-10 object-contain" />


              </div>
            ))}



          </div>



        </div>





      </div>


    </section>




    {/* sec-4 D&M */}




    <GetStartedSection
      title="Find your shape"
      description="Want to understand where you sit on the UX spectrum and what roles fit your strengths?"
    />





  </>)
}

export default framework




src/pages/hero.jsx

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
        "You’ll answer some questions, and based on your background, interests and goals, we’ll generate a personalised report that shows your ideal UX path and how to get there. This isn’t about fitting you into a job title, it’s about helping you understand your strengths.",
    },
    {
      img: "/assets/home-page/s2ico3.png",
      title: "For you, and the industry",
      desc:
        "This isn’t just about your next job. It’s about building a better UX industry, one individual at a time. UXHQ helps you align with the right roles, develop relevant skills, and make better decisions for your career, and for those you design for.",
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


src/pages/terms_of_use.jsx





const termData = [

  {
    heading: "Introduction",
    content: [
      {
        type: "paragraph",
        text: "UXHQ is a service created and currently operated by Oliver West. By accessing or using the UXHQ platform, you agree to these Terms of Use. If you do not agree, please do not use the service."
      }
    ],
  },


  {
    heading: "Use of Service",
    content: [
      {
        type: "paragraph",
        text: "You may use UXHQ to receive personalised UX career guidance based on your input. You agree to use UXHQ only for lawful purposes and not to misuse, scrape, reverse-engineer, or attempt to disrupt the service."
      }
    ],
  },




  {
    heading: "Accuracy and Limitations",
    content: [
      {
        type: "paragraph",
        text: "UXHQ aims to provide helpful and accurate guidance, but makes no guarantees about job outcomes or decisions made as a result of using the platform. All advice is offered \"as is\" and should be considered informational, not definitive."
      }
    ],
  },

  {
    heading: "Account and Access",
    content: [
      {
        type: "paragraph",
        text: "We use cookies and similar technologies to enhance your experience, understand how our platform is used, and improve performance. These may include:"
      },
      {
        type: "list",
        items: [
          { text: "Essential cookies - required for site functionality and security" },
          { text: "Analytics cookies - used to measure usage patterns via tools like Google Analytics and Hotjar" }
        ]
      },
      { type: "paragraph", text: "These analytics tools are loaded via Google Tag Manager, which may set additional cookies or transfer data to their servers. We only activate non-essential cookies after obtaining your consent." },
      { type: "paragraph", text: "When you first visit UXHQ, you will be presented with a cookie consent banner giving you the option to accept or reject non-essential cookies. You may also customise your preferences." },
      { type: "paragraph", text: "You can change or withdraw your consent at any time by clicking the “Cookie Settings” link in the footer or adjusting your browser settings." },
      { type: "paragraph", text: "For more details on the cookies we use and how to manage them, please see our Cookie Policy." }
    ],
  },

  {
    heading: "Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: "All content, logic, and systems within UXHQ, including the UX Brain, are the intellectual property of Oliver West or licensed contributors. You may not copy, reproduce, distribute, or create derivative works from this material without written permission."
      }
    ],
  },
  {
    heading: "Termination",
    content: [
      {
        type: "paragraph",
        text: "We reserve the right to suspend or terminate access to UXHQ at our discretion if you breach these Terms, misuse the service, or act in a way that may cause harm to the platform or its users."
      }
    ],
  },
  {
    heading: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "UXHQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, resulting from your use of the service or guidance provided through the platform."
      }
    ],
  },
  {
    heading: "Indemnification",
    content: [
      {
        type: "paragraph",
        text: "By using UXHQ, you agree to indemnify and hold harmless Oliver West and associated parties from any claims, damages, or liabilities arising from your use or misuse of the platform."
      }
    ],
  },
  {
    heading: "Governing Law",
    content: [
      {
        type: "paragraph",
        text: "These Terms shall be governed by the laws of the United Arab Emirates. If you access UXHQ from outside the UAE, you do so at your own risk and are responsible for compliance with local laws."
      }
    ],
  },
  {
    heading: "Updates to These Terms",
    content: [
      {
        type: "paragraph",
        text: "These Terms may be updated occasionally. Continued use of UXHQ after changes are made constitutes acceptance of those changes."
      }
    ],
  },
  {
    heading: "If Ownership Changes",
    content: [
      {
        type: "paragraph",
        text: "If UXHQ is ever sold or transferred in the future, the service and all user information may move to the new owner. If that happens, we’ll make sure your data continues to be treated with the same care and respect, and always under the same privacy principles we use today."
      }
    ],
  },



  {
    heading: "Contact",
    content: [
      {
        type: "paragraph",
        text: "Questions about these Terms can be sent to:"
      },
      {
        type: "link",
        url: "mailto:hello@uxhq.com",
        text: "hello@uxhq.com"
      }
    ],
  },



  {
    heading: "Cookie Policy",
    content: [
      {
        type: "paragraph",
        text: "This site uses cookies to support essential functionality and to analyse user behaviour through services such as Google Analytics and Hotjar. These tools help us understand how users interact with the platform so we can improve performance and usability. Cookies that are not strictly necessary are only activated after you provide explicit consent."
      },
      { type: "paragraph", text: "We group cookies into two main categories:" },
      {
        type: "list",
        items: [
          { heading: "Essential cookies", text: "These are required for the website to function properly, such as maintaining session state or security features. They cannot be turned off." },
          { heading: "Analytics cookies", text: "These are used to collect anonymised usage data to help us understand how the platform is being used and where improvements can be made. This includes tools like Google Analytics and Hotjar." }
        ]
      },
      { type: "paragraph", text: "Cookies may be set either by UXHQ directly (first-party cookies) or by the third-party tools we use (third-party cookies)." },
      { type: "paragraph", text: "You can manage or withdraw your cookie consent at any time by clicking the “Cookie Settings” link on our website. You can also adjust your browser settings to control cookie behaviour." },
      { type: "paragraph", text: "To opt out of Google Analytics across all websites, you can use the following tool:" },
      // text: "Google Analytics Opt-out Tool"
      { type: "link", url: "https://tools.google.com/dlpage/gaoptout", text: "Google Analytics Opt-out Tool" },
      { type: "paragraph", text: "For more details on how Hotjar processes data, visit their privacy policy:" },
      // text: "Hotjar Privacy Policy"
      { type: "link", url: "https://www.hotjar.com/legal/policies/privacy/", text: "Hotjar Privacy Policy" }
    ],
  },



];




const terms_of_use = () => {


  return (<>

    {/* sec-1 D&M */}
    <section className="w-full maxmd:hidden min-h-fit ">
      {/* <div className='h-28'></div> */}

      <div className='py-[6.4rem] max-sm:pb-[4rem] min-h-fit flex bg-red300/70 items-center justify-center '>



        <div className='w-[80%] z-20 space-y-12 max-md:space-y-10  flex flex-col items-center justify-center   bg-blue300'>



          <h1 className='font-juana text-center font-normal text-[6.05rem] max-md:text-[3.65rem] w-[70%] max-md:w-[80%] leading-[1.1] tracking-[0]'>
            Terms of Use
          </h1>




          <p className=' font-dmsans text-center mx-auto font-normal text-[1.995rem] max-md:text-[1.395rem] leading-[1.15] tracking-[0] mt-8 w-[60%] max-md:w-[80%]'>
            <span className='font-bold'>  Effective Date:  </span>
            <span>   July 01, 2025  </span>
          </p>
        </div>





      </div>





    </section>




    {/* sec-2 D&M */}
    <section className="w-full  min-h-screen mb-20 ">

      <div className='py-20 w-[97%] max-md:w-[90%] mx-auto bg-white flex bg-red300/70 items-center justify-center rounded-3xl'>


        <div className="w-[100%]  max-md:mx-6 my-4 space-y24">
          {termData.map((term, index) => {
            return (
              <div
                key={index}
                className="font-dmsans w-[79%] bg-red300/50 borderborder-black/30 max-md:w-[95%] bg-red300/50 flex flex-row items-start gap4  py-10 "
              >
                {/* Column 1: Number */}

                <div className='w-[21%] bg-red300/50 text-center'>

                  <div className="w[50px]  md:w-full text-[1.3rem] leading-8 font-semibold shrink-0 pt-1">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                </div>

                {/* Column 2: heading and paragraph (always visible) */}
                <div className="flex-1 pr-4 bg-blue300/50 pt-4 max-md:p-2 md:pr-10">
                  <h3 className="text-[2.7rem] leading-9 max-md:text-3xl font-semibold">
                    {term.heading}
                  </h3>

                  <div className="mt-8 max-md:mt-6">
                    <div className="mt-8 max-md:mt-6 space-y-4">
                      {term.content.map((block, i) => {
                        if (block.type === "paragraph") {
                          return (
                            <p key={i} className="text-[1.675rem] leading-[2.25rem] max-md:text-2xl">
                              {block.text}
                            </p>
                          );
                        }
                        if (block.type === "list") {
                          return (
                            <ul key={i} className="list-disc ml-6 text-[1.675rem] leading-[2.25rem] max-md:text-2xl space-y-2">
                              {block.items.map((item, j) => (
                                <li key={j}>
                                  {item.heading && (
                                    <strong className="font-semibold">{item.heading}: </strong>
                                  )}
                                  {item.text}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        if (block.type === "link") {
                          return (
                            <a
                              key={i}
                              href={block.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline hover:text-blue-800 block text-[1.675rem] leading-[2.25rem]"
                            >
                              {block.text}
                            </a>
                          );
                        }
                        if (block.type === "subheading") {
                          return (
                            <h4 key={i} className="text-[2rem] font-semibold mt-4">
                              {block.text}
                            </h4>
                          );
                        }
                        return null;
                      })}
                    </div>


                  </div>
                </div>
              </div>
            );
          })}
        </div>



      </div>
    </section>











  </>)
}

export default terms_of_use


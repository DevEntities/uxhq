
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
            UX is a multidisciplinary field shaped by three core lenses: <b> Creativity, Science,</b> and <b> Business</b>. Every UX professional draws on all three but the balance shifts depending on your role, strengths, and career path.
          </p>
        </div>



        <img className='w-[19rem] max-lg:w-[13rem] mt-10  z-0 left-8 top-1/2 -translate-y-1/2  absolute' src="/assets/framework/union1.png" alt="" />
        <img className='w-[19rem] max-lg:w-[13rem] mt-10  z-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2   absolute' src="/assets/framework/union2.png" alt="" />
        <img className='w-[19rem] max-lg:w-[13rem] mt-10  z-0 right-8 top-1/2 -translate-y-1/2  absolute' src="/assets/framework/union1.png" alt="" />



      </div>


      <div className='w-[83%]  mx-auto  mt-[16.5rem]'>


        <h1 className='font-juana font-normal text-[3.95rem] pl-7 z-30 leading-[1.3] tracking-[0]'>
          At UXHQ, we use this model to help you understand your natural leanings and uncover growth areas. This isn't about choosing one lens over another, it's about recognising where you're strongest, where you're stretching, and how to build toward balance over time.
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
              UX is a multidisciplinary field shaped by three core lenses: <b> Creativity, Science,</b> and <b> Business</b>. Every UX professional draws on all three but the balance shifts depending on your role, strengths, and career path.
            </p>


          </div>

        </div>



        <img className='max-[490px]:w-[12rem] max-[460px]:w-[10rem] max-[392px]:w-[9rem] max-[360px]:w-[8rem] h-[32rem]  z-0 left-6 top-[13rem] -translate-y1/2  absolute' src="/assets/framework/union1.png" alt="" />
        <img className='max-[490px]:w-[12rem] max-[460px]:w-[10rem] max-[392px]:w-[9rem] max-[360px]:w-[8rem] h-[32rem]  z-0 left-1/2 top-[13rem] -translate-y1/2 -translate-x-1/2   absolute' src="/assets/framework/union2.png" alt="" />
        <img className='max-[490px]:w-[12rem] max-[460px]:w-[10rem] max-[392px]:w-[9rem] max-[360px]:w-[8rem] h-[32rem]  z-0 right-6 top-[13rem] -translate-y1/2  absolute' src="/assets/framework/union1.png" alt="" />


      </div>


      <div className='w-[90%]  mx-auto  mt-20'>


        <h1 className='font-juana font-normal text-[2.35rem] z-30 leading-[1.1] tracking-[0]'>
          At UXHQ, we use this model to help you understand your natural leanings and uncover growth areas. This isn't about choosing one lens over another, it's about recognising where you're strongest, where you're stretching, and how to build toward balance over time.
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
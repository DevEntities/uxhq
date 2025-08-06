import { useState, useRef } from 'react'
import GetStartedSection from "../components/GetStartedSection";

const faqData = [
  {
    question: "Why is it free?",
    answer:
      "UXHQ was built to give back to the UX community and bring clarity to an often confusing industry. Everyone deserves honest, structured guidance, especially early in their career. While we offer the product for free, we sometimes recommend tools, courses, or partners we genuinely believe in. If they offer a commission, it helps us cover the costs of running the platform, but that's not why we choose them. We only recommend products we trust, not ones that pay. This isn't about profit. It's about impact and sustainability.",
  },
  {
    question: "Why should I trust it?",
    answer:
      "UXHQ is built by seasoned UX leaders with over 50 years of combined experience. We've hired, mentored, trained or supported thousands of professionals, many of whom have faced the exact same challenges as you. We've seen how messy the industry can get, and we created UXHQ to cut through the noise. It's grounded in practice, not theory and written by those who've done the work, not just read about it.",
  },
  {
    question: "Is it really built by UX experts?",
    answer:
      "Yes. UXHQ is powered by the UX Brain, a private knowledgebase built on over 50 years of hands-on experience in UX research, design, strategy, and leadership. It's curated by real practitioners, not cobbled together from random online sources.",
  },
  {
    question: "How is this different to asking ChatGPT?",
    answer:
      "The common AI tools give you a generalist view, based on whatever it finds online. UXHQ is different: it's built specifically for UX career guidance and only uses original, expert-written content. It also follows a conversation model designed to guide, not just answer, so the advice feels more like a mentor, not a search engine.",
  },
  {
    question: "Can I talk to someone about my report?",
    answer:
      "At this stage, UXHQ is designed to be fully self-serve. But we are exploring ways to offer deeper support through coaching, community, or advisor feedback in the future.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. UXHQ will never sell your data or share it with third parties. Your information is only used to deliver your report and improve your experience. You'll always have control over whether or not to receive updates from us.",
  },
  {
    question: "What if my background or projects are confidential?",
    answer:
      "You never need to share company names, proprietary work, or colleague's details. The system is designed to work with generalised input, just share what you're comfortable with.",
  },
  {
    question: "Do I need to be technical to use this?",
    answer:
      "Not at all. UXHQ is designed for anyone exploring or progressing in UX, whether you're coming from design, research, writing, or a completely different background.",
  },
  {
    question: "Will this help me get a job?",
    answer:
      "UXHQ isn't a recruiter or job board. It won't apply for jobs on your behalf, but it will help you understand your strengths, identify gaps, and craft a clearer story about who you are and where you're heading. This kind of self-awareness and framing is exactly what more mature hiring managers and employers are looking for.",
  },
  {
    question: "Will this help me with specific UX tasks or techniques?",
    answer:
      "UXHQ offers mentoring, not coaching. Coaching often focuses on performance in a specific role or task, like how to run a usability test or improve a particular deliverable. Mentoring, on the other hand, is about guiding your bigger picture: helping you reflect on where you are, where you're headed, and what questions you need to be asking. We won't teach you specific techniques, but we will help you figure out what you need to learn, and why.",
  },
  {
    question: "If I already use UX courses or resources, why would I need UXHQ?",
    answer:
      "Most learning platforms focus on teaching you how to do something, how to run a usability test, create a prototype, or use Figma. UXHQ helps with the step before that. We guide your career, not your tasks. We help you understand where you fit in the industry, what roles align with your strengths, and what to work on next. It's about clarity, not coursework. Think of UXHQ as the mentor that helps you decide what matters, before you invest time or money in learning it. We're not here to compete with training platforms, we're here to make them more useful by helping you approach them with purpose.",
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
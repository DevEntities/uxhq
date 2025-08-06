


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
      { type: "paragraph", text: "You can change or withdraw your consent at any time by clicking the \"Cookie Settings\" link in the footer or adjusting your browser settings." },
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
        text: "If UXHQ is ever sold or transferred in the future, the service and all user information may move to the new owner. If that happens, we'll make sure your data continues to be treated with the same care and respect, and always under the same privacy principles we use today."
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
      { type: "paragraph", text: "You can manage or withdraw your cookie consent at any time by clicking the \"Cookie Settings\" link on our website. You can also adjust your browser settings to control cookie behaviour." },
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
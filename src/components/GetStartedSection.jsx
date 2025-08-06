import Button from "../components/Button.jsx";

export default function GetStartedSection({
  title = "Ready to get started?",
  description = "Get your personalised UX career report and take the next step in your journey."
}) {
  return (
    <section className="w-full mb20 md:mt20 bg-blue400/30  max-md:min-hfit max-md:pb-20 max-md:pt-0">
      {/* <div className="md:h-32"></div> */}

      <div className="bg-yellow400/80 md:py-10 max-md:pb-10 md:h-[40rem] md:min-h-screen max-sm:h-[30rem] max-md:mt-24 relative flex bg-red300/70 items-center max-md:items-end justify-center">


        <div className="bg-green400/30 w-[80%] max-md:w[90%] z-20 space-y-14 max-md:space-y-8 flex flex-col justify-center items-center bg-blue300/40">
          {/* <div className="md:hidden h-[4rem]" /> */}

          <h1 className="bg-red400/30 font-juana font-normal text-[6.55rem] text-center max-md:text-[4.05rem] max-md:mb-8 leading-[1.1] tracking-[0]">
            {title}
          </h1>

          <p className="bg-red400/30 font-dmsans text-center font-normal text-[2.475rem] max-sm:text-[1.475rem]  leading-[1.2] tracking-[0] mt8 md:w-2/3">
            {description}
          </p>

          <Button />


        </div>


        <img
          className="bg-blue400/30 w-[51.5rem] max-md:w-[20rem] md:mt-0 max-md:pb-[12rem] z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src='/assets/about/getstart.png'
          alt="Get Started"
        />
      </div>
    </section>
  );
}

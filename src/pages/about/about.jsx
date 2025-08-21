export default function About() {
  return (
    <div className="max-w-[1920px] w-full bg-[#1A1A1D] 2xl:mt-[260px] xl:mt-[200px] md:mt-[100px] sm:mt-[60px] mt-[30px]">
      {/* banner section */}
      <div className="text-center px-4">
        <div className="font-bricolage font-semibold text-[#FFFFFF] 
          sm:mb-[120px] mb-[50px] text-[60px] lg:tracking-[-1px] tracking-normal
          max-xl:text-[50px] max-lg:text-[40px] max-md:text-[26px] max-sm:text-[18px]">
          We're on a mission to redefine how businesses
        </div>

        <div className="font-instrument italic font-normal text-[56px] text-[#FFFFFF]
          max-xl:text-[50px] max-lg:text-[30px] max-md:text-[18px] max-sm:text-[20px]">
          AI Powered Workflows & Agent Bots for Exponential Business Growth
        </div>

        <div className="font-instrument italic font-normal text-[56px] text-[#FFFFFF]
          max-xl:text-[50px] max-lg:text-[30px] max-md:text-[18px] max-sm:text-[20px]">
          supercharge productivity, slash costs by 40%, run on custom bots & agents.
        </div>

        <div className="relative inline-block mt-[65px] px-6">
          <div
            className="font-bricolage font-bold text-[#FFFFFF] text-[64px] max-lg:text-[44px] max-md:text-[28px] tracking-[-2.3px] relative
        before:content-[''] before:absolute sm:before:-right-10 lg:before:top-40 before:-translate-y-1/2
         before:h-full before:bg-[url('/images/Mask.svg')]
        before:bg-no-repeat before:bg-contain before:opacity-100
        max-lg:before:w-[300px] md:before:w-[400px] before:right-0 before:top-32 before:w-[200px]"
          >
            Welcome to the future of work.
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-[150px] max-lg:mt-[100px] max-md:mt-[70px] px-4">
        <div className="font-dm font-bold text-7xl 
          max-xl:text-6xl max-lg:text-5xl max-md:text-3xl max-sm:text-2xl">
          Minds Behind Infinity & Beyond
        </div>

        <div className="italic font-instrument font-normal text-[50px] leading-[60px] sm:mt-[100px] mt-[50px]
          text-start max-xl:text-[50px] max-lg:text-[28px] max-md:text-[18px] max-sm:text-[18px] 
          max-xl:leading-[48px] max-lg:leading-[36px] max-md:leading-[28px] max-sm:leading-[24px] 
          ps-[25px]">
          Nayaki Naidu and Bhavesh Walankar are more than just founders <br />
          We're a fusion of vision & engineering, human insight and machine intelligence.
        </div>
      </div>


      <div className="flex flex-col sm:flex-row gap-10 ps-[20px] sm:ps-[56px] mt-[50px] sm:mt-[200px] items-start sm:items-end">

        {/* Left Section */}
        <div className="flex flex-col justify-end items-center sm:items-start text-center sm:text-left flex-1 px-4">
          <div className="font-dm font-extrabold text-white text-[28px] sm:text-[30px] md:text-[36px] lg:text-[48px] xl:text-[60px]">
            I AM{" "}
            <span className="font-dm font-bold text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[60px] text-white">
              Nayaki Naidu
            </span>
          </div>
          <div className="mt-10 sm:mt-0">
            <img src="/images/girl-image.svg" alt="" className="w-auto h-auto" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-end items-center sm:items-start text-center sm:text-left flex-1 px-4">
          <div className="font-dm font-extrabold text-white text-[24px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[50px]">
            I AM{" "}
            <span className="font-dm font-bold text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[50px] text-white">
              Bhavesh Walankar
            </span>
          </div>
          <div className="mt-10 sm:mt-0">
            <img src="/images/boy-image.svg" alt="" className="w-auto h-auto" />
          </div>
        </div>

      </div>

      <div className="sm:mt-[165px] mt-[80px] text-white text-center font-instrument font-normal 
  text-[24px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-snug">
        Together, WE building a future where automation is not just faster,<br />
        but smarter, more conscious, and deeply human-centered
      </div>



      <div className="sm:mt-[147px] mt-[50px] px-4 lg:px-0">
        <div className="font-dm font-bold text-center text-white text-[32px] sm:text-[48px] lg:text-[80px]">
          Our Mission
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center sm:mt-12 mt-5 gap-4 px-4">

          <div className="col-span-1 lg:col-span-8 font-instrument font-normal text-white text-center lg:text-left 
                    text-[16px] sm:text-[18px] md:text-[28px] lg:text-[36px] xl:text-[60px] 
                    leading-[24px] sm:leading-[22px] md:leading-[30px] lg:leading-[40px] xl:leading-[60px]">
            To flip the script on work by making AI your ultimate sidekick — crushing the grind, amplifying human genius, and freeing people to focus on galaxy-sized goals.
            We exist to build bots with brains (and a little soul) that supercharge <br /> growth, cut the noise, and fuel human evolution.
          </div>

          <div className="col-span-1 lg:col-span-4 flex justify-center lg:justify-end">
            <img src="/images/home1.svg" alt="Home Illustration" className="w-full max-w-[520px] h-auto" />
          </div>

        </div>
      </div>
      <div className="sm:mt-[147px] mt-[50px] px-4 ">
        <div className="font-dm font-bold text-center text-white text-[32px] sm:text-[48px] lg:text-[80px]">
          Our Vision
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center sm:mt-12 mt-5 gap-4 ">

          <div className="col-span-1 lg:col-span-4 flex justify-center lg:justify-start order-2 lg:order-1">
            <img src="/images/home1.svg" alt="Home Illustration" className="w-full max-w-[520px] h-auto" />
          </div>

          <div className="col-span-1 lg:col-span-8 font-instrument font-normal text-white text-center lg:text-left 
                    text-[16px] sm:text-[18px] md:text-[28px] lg:text-[36px] xl:text-[60px] 
                    leading-[24px] sm:leading-[22px] md:leading-[30px] lg:leading-[40px] xl:leading-[60px]">
            To flip the script on work by making AI your ultimate sidekick — crushing the grind, amplifying human genius, and freeing people to focus on galaxy-sized goals.
            We exist to build bots with brains (and a little soul) that supercharge <br /> growth, cut the noise, and fuel human evolution.
          </div>

        </div>
      </div>
      <div className="custom-container pt-[140px] md:pt-[238px] ">
        <h3 className="text-dm text-[40px] sm:text-[60px] md:text-[70px] text-white font-bold pb-[80px] sm:pb-[140px]  md:pb-[200px] text-center">Achievements & Impact</h3>
        <div className="text-bricolage font-bold text-[16px] sm:text-[24px] md:text-[30px] lg:text-[40px]  xl:text-[50px] text-white  pb-[60px] md:pb-[100px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
          <p className="pb-[8px]">01</p>
          <p className="font-bricolage">10× Placement Speed  – With JobJarvis, we redefined staffing by automating thousands of job applications per day — recruiters went from burnout to breakthrough.</p>
        </div>
        <div className="text-bricolage font-bold text-[16px] sm:text-[24px] md:text-[30px] lg:text-[40px]  xl:text-[50px] text-white  pb-[60px] md:pb-[100px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
          <p className="pb-[8px]">02</p>
          <p className="font-bricolage">40% Cost Cuts  – AI bots replaced busywork, saving teams serious cash while scaling efficiency.</p>
        </div>
        <div className="text-bricolage font-bold text-[16px] sm:text-[24px] md:text-[30px] lg:text-[40px]  xl:text-[50px] text-white  pb-[60px] md:pb-[100px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
          <p className="pb-[8px]">03</p>
          <p className="font-bricolage">Drones That Feel  – With Dronosaur, we built emotionally-aware drones that don’t just fly — they listen, adapt, and respond.</p>
        </div> 
        <div className="text-bricolage font-bold text-[16px] sm:text-[24px] md:text-[30px] lg:text-[40px]  xl:text-[50px] text-white  pb-[60px] md:pb-[100px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
          <p className="pb-[8px]">04</p>
          <p className="font-bricolage">Operations
            <ul class="list-disc list-outside pl-[30px] md:pl-[70px] space-y-2">
              <li className="font-bricolage">Automations: SOP copilots, task routing, approvals, inventory/ops alerts.</li>
              <li className="font-bricolage">Impact: -35% ops costs, SLA compliance +25%, cycle time -50%</li>
            </ul>
          </p>
        </div>
          <div className="text-bricolage font-bold text-[16px] sm:text-[24px] md:text-[30px] lg:text-[40px]  xl:text-[50px] text-white  pb-[60px] md:pb-[100px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
            <p className="pb-[8px]">05</p>
            <p className="font-bricolage">Marketing
              <ul class="list-disc list-outside pl-[30px] md:pl-[70px] space-y-2">
                <li className="font-bricolage">Automations: ICP persona engine, multi-channel content generator, A/B testing, SEO briefs.
                </li>
                <li className="font-bricolage">Impact: +3× content output, +40% organic traffic, +25% CTR.</li>
              </ul>
            </p>
          </div>

          <div className="text-bricolage font-bold text-[16px] sm:text-[24px] md:text-[30px] lg:text-[40px]  xl:text-[50px] text-white  pb-[60px] md:pb-[100px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
            <p className="pb-[8px]">06</p>
            <p className="font-bricolage">Founders
              <ul class="list-disc list-outside pl-[30px] md:pl-[70px] space-y-2">
                <li className="font-bricolage">Automations: daily brief copilots, board-deck auto-drafts, KPI anomaly pings, “ask your company” agent.</li>
                <li className="font-bricolage">Impact: decision latency -50%, prep time -70%, clarity ↑ across teams.</li>
              </ul>
            </p>
          </div>
        
      </div>
      <section className="2xl:mb-[200px] xl:mb-[100px] md:mb-[100px] mb-[60px]">
      <div className="custom-container">
          <button className="flex sm:mt-[70px] max-w-[660px] mt-[40px] mx-auto bg-[#00000033] w-full justify-center items-center border-[0.5px] border-gray-500 py-[16px] rounded-full text-[#FFFFFF] shadow-[0_0_10px_rgba(255,255,255,0.05)] relative ">
          <p className=" font-dm font-bold xl:text-4xl lg:text-2xl text-xl mr-[44px]">
            Scale Smarter
          </p>
          <img src='/images/AI.svg' alt="ai" className="absolute md:right-[44px] sm:right-[20px] right-[10px] md:max-w-[48px] max-w-[28px]" />
        </button>
        <h3 className="font-bricolage font-bold text-white xl:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] text-center mt-[40px]">Cut Costs by 40% Scale Without Limits.</h3>
      </div>
      </section>
    </div>
  )
}










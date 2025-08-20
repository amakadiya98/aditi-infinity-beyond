import { Link } from "react-router-dom";
export default function Home() {

    const categories = [
        { name: "Human Resources", path: "/human-resources" },
        { name: "Recruitment", path: "/recruitment" },
        { name: "Operations", path: "/operation" },
        { name: "Marketing", path: "/marketing" },
        { name: "Sales", path: "/sales" },
        { name: "Positioning", path: "/positioning" },
        { name: "Accounting", path: "/accounting" },
        { name: "Customer Support", path: "/customer-support" },
        { name: "R&D", path: "/r&d" },
        { name: "Founders", path: "/founders" },
        { name: "Solopreneurs", path: "/solopreneurs" },
        { name: "Management", path: "/management" },
    ];

    return (
        <>
            <section className="w-full flex justify-center items-center xl:mt-[150px] md:mt-[80px] sm:mt-[40px] mt-[20px] p-6 ">
                <div className="max-w-[960px] w-full xl:rounded-[100px] md:rounded-[60px] rounded-[40px] md:px-6 px-4 text-center shadow-[0_0_10px_rgba(255,255,255,0.01)] pt-[40px] pb-[23px] bg-[#00000033] text-[#FFFFFF]">
                    <div className="flex items-center flex-col">
                        <div className="font-dm font-normal text-3xl md:pb-[52px] sm:pb-[34px] pb-[20px]" >Every minute counts</div>
                        <div className="font-semibold font-bricolage lg:text-5xl md:text-3xl text-xl pb-[20px] tracking-tighter">Transform Your Business</div>
                        <div className="font-instrument italic lg:text-5xl md:text-3xl text-xl text-center font-normal tracking-wide w-[90%] lg:leading-[60px]">AI Powered Workflows & Agent Bots for Exponential Business Growth</div>
                        <button className="flex sm:mt-[70px] mt-[40px] max-w-[790px] bg-[#00000033] w-full justify-center items-center border-[0.5px] border-gray-500 py-[16px] rounded-full text-[#FFFFFF] shadow-[0_0_10px_rgba(255,255,255,0.05)] relative before:content-[''] before:block before:h-[60px] sm:before:w-[500px] before:w-[250px] before:bg-[url(/images/Mask.svg)] before:absolute sm:before:top-[-60px] before:top-[-30px] before:right-[0px] before:bg-no-repeat before:bg-contain">
                            <p className=" font-instrument italic font-normal md:text-4xl text-2xl mr-[44px]">
                                Slash Your Overhead by 40%
                            </p>
                            <img src='/images/AI.svg' alt="ai" className="absolute md:right-[44px] sm:right-[20px] right-[10px] md:max-w-[48px] max-w-[28px]" />
                        </button>
                    </div>
                </div>
            </section>
            <section className="sm:pt-[80px] pt-[60px]">
                <div className="custom-container">
                    <h3 className="font-bricolage font-bold text-white xl:text-[50px] md:text-[40px] sm:text-[30px] text-[30px] text-center">Supercharge Your Productivity and Your Profits</h3>
                    <div className="mt-[35px] md:grid md:grid-cols-2 flex flex-col-reverse gap-[20px] md:items-center">
                        <div className="max-w-[792px]">
                            <h6 className="font-dm font-medium xl:text-[50px] sm:text-[34px] text-[26px] text-white tracking-tighter md:leading-[60px] leading-[38px]">Efficiency that Pays Off</h6>
                            <p className="xl:text-[40px] sm:text-[24px] text-[20px] font-dm font-bold leading-[40px] text-white xl:mt-[40px] mt-[20px]">Automate repetitive tasks and streamline workflows to reclaim your team’s time, focus, and creativityturning hours of work into minutes.</p>
                        </div>
                        <div className="flex md:justify-center">
                            <img src="/images/home1.png" alt="efficiency" className="max-w-[560px] w-full" />
                        </div>
                    </div>
                    <div className="xl:mt-[-30px] mt-[30px] md:grid md:grid-cols-2 flex flex-col gap-[20px] md:items-center">
                        <div className="">
                            <img src="/images/home2.png" alt="image" className="max-w-[590px] w-full" />
                        </div>
                        <div className="max-w-[792px] xl:pl-[56px]">
                            <h6 className="font-dm font-medium xl:text-[50px] sm:text-[34px] text-[26px] text-white tracking-tighter md:leading-[60px] leading-[38px]">Cost Reduction that Scales</h6>
                            <p className="xl:text-[40px] sm:text-[24px] text-[20px] font-dm font-bold leading-[40px] text-white xl:mt-[40px] mt-[20px]">Slash overhead by up to 40% with precision-optimized processes that reduce errors, speed up delivery, and maximize every dollar spent</p>
                        </div>
                    </div>
                    <div className="xl:mt-[-30px] mt-[30px] md:grid md:grid-cols-2 flex flex-col-reverse gap-[20px] md:items-center">
                        <div className="max-w-[848px]">
                            <h6 className="font-dm font-medium xl:text-[50px] sm:text-[34px] text-[26px] text-white tracking-tighter md:leading-[60px] leading-[38px]">Scalability Without the Stress</h6>
                            <p className="xl:text-[40px] sm:text-[24px] text-[20px] font-dm font-bold leading-[40px] text-white xl:mt-[40px] mt-[20px]">Easily scale operations to meet growing demand—without extra hires, extra headaches, or extra costs</p>
                        </div>
                        <div className="flex md:justify-center">
                            <img src="/images/home3.png" alt="efficiency" className="max-w-[633px] w-full max-h-[580px] object-cover object-center" />
                        </div>
                    </div>
                    <div className="xl:mt-[-30px] mt-[30px] md:grid md:grid-cols-2 flex flex-col gap-[20px] md:items-center">
                        <div className="">
                            <img src="/images/home4.png" alt="image" className="max-w-[590px] w-full" />
                        </div>
                        <div className="max-w-[800px] xl:pl-[56px]">
                            <h6 className="font-dm font-medium xl:text-[50px] sm:text-[34px] text-[26px] text-white tracking-tighter md:leading-[60px] leading-[38px]">Security You Can Trust </h6>
                            <p className="xl:text-[40px] sm:text-[24px] text-[20px] font-dm font-bold leading-[40px] text-white xl:mt-[40px] mt-[20px]">Enterprise-grade protection with advanced encryption and compliance standards—ensuring your automation is safe, secure, and ready for growth.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sm:pt-[80px] pt-[60px]">
                <div className="custom-container">
                    <h3 className="font-bricolage font-bold text-white xl:text-[50px] sm:text-[34px] text-[26px] text-center">Change How You Work. Transform How You Grow.  </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-x-[70px] gap-x-[30px] 2xl:gap-y-[50px] sm:gap-y-[20px] gap-y-[16px] mt-[50px]">
                        {categories.map((cat, idx) => (
                            <Link
                                key={idx}
                                to={cat.path}
                                className=" rounded-full bg-[#00000033] 2xl:py-[60px] sm:py-[30px] py-[20px] text-white 2xl:text-[40px] lg:text-[36px] md:text-2xl text-xl font-semibold 
                       text-center hover:bg-[#2A2A2E] transition-colors shadow-sm  font-bricolage whitespace-nowrap leading-[30px]"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="custom-container">
                <div className="flex items-center justify-center pt-[80px] md:[100px] lg:pt-[140px] pb-[100px] md:pb-[235px]">
                    <img src='/images/grow.svg' alt="ai" />
                </div>
            </section>
            <section>
                <div className="custom-container">
                    <h3 className="font-bricolage font-bold xl:text-[50px] sm:text-[34px] text-[26px]  text-center text-white">Seamless AI Integration in 3 Easy Steps!</h3>
                </div>
                <div className="custom-container pt-[80px]  md:pt-[100px] lg:pt-[200px] 2xl:pt-[315px]">
                    <div className="font-bricolage font-bold text-[16px] sm:text-[16px] md:text-[20px] lg:text-[40px]  xl:text-[50px]] text-white pb-[30px] md:pb-[40px] lg:pb-[60px] xl:pb-[70px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
                        <p className="font-bricolage">01</p>
                        <p className="font-bricolage">In-Depth Discovery</p>
                    </div>
                    <div className="font-bricolage font-bold text-[16px] sm:text-[16px] md:text-[20px] lg:text-[40px]  xl:text-[50px]] text-white pb-[30px] md:pb-[40px] lg:pb-[60px] xl:pb-[70px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
                        <p className="font-bricolage">02</p>
                        <p className="font-bricolage">Customized Solution Design</p>
                    </div>
                    <div className="font-bricolage font-bold text-[16px] sm:text-[16px] md:text-[20px] lg:text-[40px]  xl:text-[50px]] text-white pb-[30px] md:pb-[40px] lg:pb-[60px] xl:pb-[70px] tracking-[0px] sm:leading-[50px] md:tracking-[-1.03px] md:leading-[50px]">
                        <p className="font-bricolage">03</p>
                        <p className="font-bricolage">Seamless Deployment and Continuous Improvement</p>
                    </div>
                </div>
            </section>
            <section className="2xl:mb-[480px] xl:mb-[200px] md:mb-[100px] mb-[60px]">
                <div className="custom-container">
                    <div className="flex justify-center items-center lg:flex-nowrap flex-wrap gap-[55px]">
                        <div className="w-full max-w-[280px]">
                            <img src="images/Ai_Automation.svg" alt="Ai-Automation" />
                        </div>
                        <div className="md:rounded-[100px] rounded-[40px] bg-[#00000033] p-[30px] sm:p-[40px] md:p-[70px]">
                            <p className="font-bricolage font-semibold text-[18px] sm:text-[20px] md:text-[30px] xl:text-[40px] text-white text-center">Enhance efficiency,and achieve unparalleled growth with AI Automation with custom BOTs & Agents</p>
                            <div className="flex justify-end">
                                <button className="flex sm:mt-[70px] mt-[40px] max-w-[790px] w-full justify-center items-center border border-gray-500 py-[6px] rounded-full text-[#FFFFFF] shadow-[0_0_10px_rgba(255,255,255,0.05)] relative before:content-[''] before:block before:h-[60px] sm:before:w-[500px] before:w-[250px] before:bg-[url(/images/Mask.svg)] before:absolute sm:before:top-[83px] before:top-[-40px] before:right-[0px] before:bg-no-repeat before:bg-contain">
                                    <p className=" font-instrument italic font-normal md:text-4xl text-2xl mr-[44px]">
                                        Slash Your Overhead by 40%
                                    </p>
                                    <img src='/images/AI.svg' alt="ai" className="absolute sm:right-[44px] right-[10px] md:max-w-[48px] max-w-[28px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

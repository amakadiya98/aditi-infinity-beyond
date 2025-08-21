import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer';
export default function Blog() {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      image: "/images/blog_1.jpg",
      date: "Sep 10, 2024",
      heading: "The Business Impact of Job Jarvis: Automating Job Applications ",
      description:
        "In today’s fast-paced job market, time and efficiency are everything. Job seekers often spend countless hours filling out repetitive applications, uploading the same documents, and tailoring cover letters. At the same time, businesses are overwhelmed by the sheer number of applications, many of which don’t match the role. Job Jarvis is changing that. As an AI-powered automation platform, it streamlines the job application process for candidates while delivering better results for employers",
    },
    {
      id: 2,
      image: "/images/blog_2.jpg",
      date: "Feb 12, 2025",
      heading: "Roles Filled by Job Jarvis in the Past Few Months",
      description:
          "At Job Jarvis, speed and precision in recruitment are more than just buzzwords—they’re the foundation of how we operate. The moment a role goes live, our automation ensures applications reach the right recruiters within minutes. This edge has consistently translated into faster shortlists, quicker interview calls, and successful placements across some of the most innovative startups."
    },
    {
      id: 3,
      image: "/images/blog_3.jpg",
      date: "March 12, 2025",
      heading: "The Hidden Truth About LinkedIn “Easy Apply” — And a Smarter Way to Get Noticed",
      description:
           "When I first started applying for jobs, I loved LinkedIn’s “Easy Apply” feature. In just a few clicks, I could send out dozens of applications in minutes. It felt like a shortcut to success.But after weeks of hitting that blue button and sending out hundreds of applications, I realized something was wrong—not a single interview invite came through.So, I started asking recruiters why"
    },
    {
      id: 4,
      image: "/images/blog_4.jpg",
    date: "May 12, 2025",
      heading: "How Job Jarvis is Transforming Job Applications: 700+ Placements in 11 Months",
      description:
        "The job market is more competitive than ever. Traditional job boards are crowded, applications are repetitive, and candidates often feel lost in the noise. That’s why we built Job Jarvisan AI-powered automation that makes job hunting smarter, faster, and more effective.",
    },
 {
      id: 5,
      image: "/images/blog_5.jpg",
      date: "July 12, 2025",
      heading: "Why Avoiding Crowded Job Boards Leads to Better Job Placements",
      description:
        "For most job seekers, the default path begins with traditional job boards. It feels like the obvious choice—millions of listings, thousands of companies, and endless opportunities in one place. But here's the hidden truth: job boards are crowded, competitive, and slow. Standing out in a pool of hundreds or even thousands of applicants is nearly impossible.",
      author: "Emily Rodriguez",
      authorImage: "/images/author-img.jpeg",
    },
  {
      id: 6,
      image: "/images/blog_6.png",
     date: "August 12, 2025",
      heading: "Past Placements at Startups: How Job Jarvis Accelerates Careers ",
      description:
        "At Job Jarvis, we believe speed, precision, and automation are the future of recruitment. Over the last few months, we've proudly matched incredible talent with some of the fastest-growing startups, helping candidates land roles in record time while giving companies the first-mover advantage on top talent.",
      author: "David Thompson",
      authorImage: "/images/author-img.jpeg",
    },
    // {
    //   id: 7,
    //   image: "/images/blog_1.jpeg",
    //     date: "Oct 5, 2023",
    //   heading: "APlaced Principal Software Engineer",
    //   description:
    //     "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
    //   author: "Lisa Wang",
    //   authorImage: "/images/author-img.jpeg",
    // },
    // {
    //   id: 8,
    //   image: "/images/blog_1.jpeg",
    //     date: "Oct 10, 2023",
    //   heading:
    //     "Placed Senior Fullstack JS Engineer and Senior Backend/AI Engineer ",
    //   description:
    //     "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
    //   author: "Robert Kim",
    //   authorImage: "/images/author-img.jpeg",
    // },
    // {
    //   id: 9,
    //   image: "/images/blog_1.jpeg",
    //  date: "Oct 15, 2023",
    //   heading: "Placed Fullstack Engineers and Data Scientists",
    //   description:
    //     "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
    //   author: "Amanda Foster",
    //   authorImage: "/images/author-img.jpeg",
    // },
    // {
    //   id: 10,
    //   image: "/images/blog_1.jpeg",
    //   date: "Oct 20, 2023",
    //   heading: "Placed Engineering roles",
    //   description:
    //     "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
    //   author: "James Wilson",
    //   authorImage: "/images/author-img.jpeg",
    // },
    // {
    //   id: 11,
    //   image: "/images/blog_1.jpeg",
    //  
    //   date: "Oct 25, 2023",
    //   heading:
    //     "Placed Sales, Customer Success, Data Science, and Software Engineering roles",
    //   description:
    //     "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
    //   author: "Maria Garcia",
    //   authorImage: "/images/author-img.jpeg",
    // },
    // {
    //   id: 12,
    //   image: "/images/blog_1.jpeg",
    //   //   date: "Oct 30, 2023",
    //   heading: "Placed Founding Engineer",
    //   description:
    //     "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
    //   author: "Kevin Lee",
    //   authorImage: "/images/author-img.jpeg",
    // },
  ];

  const handleCardClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <>
      <div className="max-w-[1920px] w-full bg-[#1A1A1D]">
        <div className="custom-container py-[40px] md:py-[60px] lg:py-[80px]">
          <h1 className="font-bricolage font-bold text-[#FFFFFF] text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px] text-center mb-[40px] md:mb-[60px]">
            Blog
          </h1>

          <div className="grid grid-cols-1 gap-[24px] md:gap-[32px]">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="max-w-[80%] mx-auto bg-[#00000033] rounded-[16px] shadow-[0_0_10px_rgba(255,255,255,0.01)] overflow-hidden border border-[#333333] hover:border-[#555555] transition-all duration-300 cursor-pointer"
                onClick={() => handleCardClick(post.id)}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative lg:w-[40%] w-full">
                    <img
                      src={post.image}
                      alt={post.heading}
                      className="w-full aspect-[4/3] lg:aspect-[5/4]"
                    />
                  </div>

                  <div className="lg:w-[60%] w-full p-[20px] lg:p-[24px] flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[12px] mb-[16px]">
                        <span className="text-[#CCCCCC] text-[14px]">
                          {post.date}
                        </span>
                      </div>

                      <h2 className="font-bricolage font-bold text-[#FFFFFF] text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3] mb-[16px] line-clamp-2">
                        {post.heading}
                      </h2>

                      <p className="text-[#CCCCCC] text-[14px] md:text-[16px] leading-[1.6] mb-[20px] line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                    {/* <div className="flex items-center gap-[12px]">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-[32px] h-[32px] rounded-full object-cover border border-[#555555]"
                      />
                      <span className="font-dm font-medium text-[#FFFFFF] text-[14px] md:text-[16px]">
                        {post.author}
                      </span>
                    </div> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

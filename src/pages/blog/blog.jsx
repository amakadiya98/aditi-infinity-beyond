import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      image: "/images/blog-1.jpg",
      category: "Alga Biosciences",
      date: "Sep 3, 2023",
      heading: "Placed Formulation Scientists and Microbiologists ",
      description:
        "At Job Jarvis, speed and precision in recruitment are more than just buzzwords—they're the foundation of how we operate. The moment a role goes live, our automation ensures applications reach the right recruiters within minutes. This edge has consistently translated into faster shortlists, quicker interview calls, and successful placements across some of the most innovative startups. ",
      author: "Caroline McKeon",
      authorImage: "/images/author-img.jpeg",
    },
    {
      id: 2,
      image: "/images/blog-2.jpg",
      category: "Angle Health",
      date: "Sep 10, 2023",
      heading: " Placed Backend Engineers & Data Scientists",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      author: "Albert Flores",
      authorImage: "/images/author-img.jpeg",
    },
    {
      id: 3,
      image: "/images/blog_1.jpeg",
      category: "Avenue Marketing",
      date: "Sep 15, 2023",
      heading:
        " Placed Software Engineers, Solutions Engineers, Product Designers, and Growth roles",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      author: "Sarah Johnson",
      authorImage: "/images/author-img.jpeg",
    },
    {
      id: 4,
      image: "/images/blog_1.jpeg",
      category: "Axle",
      date: "Sep 20, 2023",
      heading: "Placed Sr. Product Engineers and Product Engineers",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      author: "Michael Chen",
      authorImage: "/images/author-img.jpeg",
    },
    {
      id: 5,
      image: "/images/blog_1.jpeg",
      category: "Operations",
      date: "Sep 25, 2023",
      heading: "Streamlining Business Operations with AI",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      author: "Emily Rodriguez",
      authorImage: "/images/author-img.jpeg",
    },
    {
      id: 6,
      image: "/images/blog_1.jpeg",
      category: "Belvo",
      date: "Sep 30, 2023",
      heading: "Placed Engineering and Product Managers ",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      author: "David Thompson",
      authorImage: "/images/author-img.jpeg",
    },
    // {
    //   id: 7,
    //   image: "/images/blog_1.jpeg",
    //   category: "Bend",
    //   date: "Oct 5, 2023",
    //   heading: "APlaced Principal Software Engineer",
    //   description:
    //     "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
    //   author: "Lisa Wang",
    //   authorImage: "/images/author-img.jpeg",
    // },
    // {
    //   id: 8,
    //   image: "/images/blog_1.jpeg",
    //   category: "Biodock",
    //   date: "Oct 10, 2023",
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
    //   category: "Cambio",
    //   date: "Oct 15, 2023",
    //   heading: "Placed Fullstack Engineers and Data Scientists",
    //   description:
    //     "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
    //   author: "Amanda Foster",
    //   authorImage: "/images/author-img.jpeg",
    // },
    // {
    //   id: 10,
    //   image: "/images/blog_1.jpeg",
    //   category: "Canix",
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
    //   category: "CarbonChain",
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
    //   category: "Chariot",
    //   date: "Oct 30, 2023",
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
                      className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover"
                    />
                  </div>

                  <div className="lg:w-[60%] w-full p-[20px] lg:p-[24px] flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[12px] mb-[16px]">
                        <span className="inline-block bg-[#333333] text-[#FFFFFF] text-[12px] font-medium px-[10px] py-[4px] rounded-full w-fit border border-[#555555]">
                          {post.category}
                        </span>
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
                    <div className="flex items-center gap-[12px]">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-[32px] h-[32px] rounded-full object-cover border border-[#555555]"
                      />
                      <span className="font-dm font-medium text-[#FFFFFF] text-[14px] md:text-[16px]">
                        {post.author}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

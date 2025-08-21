import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      image: "/images/blog-1.jpg",
      category: "Processes & Tools",
      date: "Sep 3, 2023",
      heading: "Roles Filled by Job Jarvis in the Past Few Months",
      description:
        "At Job Jarvis, speed and precision in recruitment are more than just buzzwords—they're the foundation of how we operate. The moment a role goes live, our automation ensures applications reach the right recruiters within minutes. This edge has consistently translated into faster shortlists, quicker interview calls, and successful placements across some of the most innovative startups.",
      fullContent: `
        <p>At Job Jarvis, speed and precision in recruitment are more than just buzzwords—they're the foundation of how we operate. The moment a role goes live, our automation ensures applications reach the right recruiters within minutes. This edge has consistently translated into faster shortlists, quicker interview calls, and successful placements across some of the most innovative startups.</p>
        
        <h3>The Power of Automation in Recruitment</h3>
        <p>Our AI-powered system doesn't just collect applications; it intelligently sorts, ranks, and routes them to the most suitable recruiters based on skill requirements, experience levels, and cultural fit indicators. This means that by the time a human recruiter looks at an application, it's already been pre-screened and prioritized.</p>
        
        <h3>Real Results from Real Companies</h3>
        <p>In the past few months alone, Job Jarvis has successfully filled roles across various industries:</p>
        <ul>
          <li><strong>Tech Startups:</strong> Senior developers, product managers, and UX designers</li>
          <li><strong>Fintech:</strong> Compliance officers, risk analysts, and blockchain developers</li>
          <li><strong>Healthcare:</strong> Clinical researchers, data scientists, and regulatory specialists</li>
          <li><strong>E-commerce:</strong> Supply chain managers, marketing specialists, and customer success leads</li>
        </ul>
        
        <h3>What Makes Us Different</h3>
        <p>Unlike traditional recruitment agencies that rely heavily on manual processes, Job Jarvis leverages machine learning algorithms that continuously improve with each placement. Our system learns from successful hires to better predict candidate success in future roles.</p>
        
        <p>The result? Companies using Job Jarvis report:</p>
        <ul>
          <li>40% faster time-to-hire</li>
          <li>60% improvement in candidate quality</li>
          <li>80% reduction in recruitment costs</li>
          <li>95% client satisfaction rate</li>
        </ul>
        
        <h3>Looking Ahead</h3>
        <p>As we continue to refine our algorithms and expand our network, we're excited to help even more companies find their perfect hires. The future of recruitment is here, and it's faster, smarter, and more efficient than ever before.</p>
      `,
      author: "Jerome Bell",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Jerome Bell is a recruitment technology expert with over 10 years of experience in HR automation and AI-driven hiring solutions.",
      readTime: "5 min read",
    },
    {
      id: 2,
      image: "/images/blog-2.jpg",
      category: "Startups",
      date: "Sep 10, 2023",
      heading: "How Agile is Your Forecasting Process?",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>Understanding Agile Forecasting</h3>
        <p>Agile forecasting is more than just a buzzword—it's a fundamental shift in how businesses approach planning and prediction. Traditional forecasting methods often rely on static models that become outdated quickly in today's fast-paced business environment.</p>
        
        <h3>Key Principles of Agile Forecasting</h3>
        <ul>
          <li><strong>Continuous Adaptation:</strong> Regular updates based on new data and market conditions</li>
          <li><strong>Collaborative Input:</strong> Cross-functional team involvement in the forecasting process</li>
          <li><strong>Rapid Iteration:</strong> Quick cycles of planning, execution, and review</li>
          <li><strong>Data-Driven Decisions:</strong> Real-time analytics and insights</li>
        </ul>
      `,
      author: "Albert Flores",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Albert Flores is a business strategy consultant specializing in agile methodologies and process optimization.",
      readTime: "4 min read",
    },
    {
      id: 3,
      image: "/images/blog_1.jpeg",
      category: "Marketing",
      date: "Sep 15, 2023",
      heading: "The Future of Digital Marketing in 2024",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>The Evolution of Digital Marketing</h3>
        <p>Digital marketing continues to evolve at an unprecedented pace, driven by technological advancements and changing consumer behaviors. As we approach 2024, several key trends are reshaping the landscape.</p>
        
        <h3>Key Trends for 2024</h3>
        <ul>
          <li><strong>AI-Powered Personalization:</strong> Advanced algorithms delivering hyper-personalized experiences</li>
          <li><strong>Voice Search Optimization:</strong> Growing importance of voice-activated search and smart speakers</li>
          <li><strong>Video-First Content:</strong> Short-form video dominating social media platforms</li>
          <li><strong>Privacy-First Marketing:</strong> Adapting to new data protection regulations</li>
        </ul>
      `,
      author: "Sarah Johnson",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Sarah Johnson is a digital marketing strategist with expertise in emerging technologies and consumer behavior.",
      readTime: "6 min read",
    },
    {
      id: 4,
      image: "/images/blog_1.jpeg",
      category: "Sales",
      date: "Sep 20, 2023",
      heading: "Building High-Performance Sales Teams",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>Foundations of High-Performance Sales</h3>
        <p>Building a high-performance sales team requires more than just hiring talented individuals. It involves creating the right culture, processes, and support systems that enable sales professionals to excel consistently.</p>
        
        <h3>Essential Components</h3>
        <ul>
          <li><strong>Clear Sales Process:</strong> Well-defined methodologies and workflows</li>
          <li><strong>Continuous Training:</strong> Ongoing skill development and knowledge sharing</li>
          <li><strong>Performance Metrics:</strong> Clear KPIs and regular performance reviews</li>
          <li><strong>Technology Stack:</strong> Modern tools and CRM systems</li>
        </ul>
      `,
      author: "Michael Chen",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Michael Chen is a sales performance consultant with 15+ years of experience in B2B sales optimization.",
      readTime: "7 min read",
    },
    {
      id: 5,
      image: "/images/blog_1.jpeg",
      category: "Operations",
      date: "Sep 25, 2023",
      heading: "Streamlining Business Operations with AI",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>The AI Revolution in Operations</h3>
        <p>Artificial Intelligence is transforming how businesses operate, from automating routine tasks to providing intelligent insights that drive strategic decision-making.</p>
        
        <h3>Key Areas of Impact</h3>
        <ul>
          <li><strong>Process Automation:</strong> Reducing manual work and human error</li>
          <li><strong>Predictive Analytics:</strong> Forecasting demand and optimizing resources</li>
          <li><strong>Quality Control:</strong> AI-powered monitoring and defect detection</li>
          <li><strong>Supply Chain Optimization:</strong> Intelligent inventory and logistics management</li>
        </ul>
      `,
      author: "Emily Rodriguez",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Emily Rodriguez specializes in operational efficiency and AI implementation strategies.",
      readTime: "5 min read",
    },
    {
      id: 6,
      image: "/images/blog_1.jpeg",
      category: "Human Resources",
      date: "Sep 30, 2023",
      heading: "Modern HR Strategies for Remote Teams",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>Adapting HR for the Remote Era</h3>
        <p>The shift to remote work has fundamentally changed how HR professionals approach talent management, employee engagement, and organizational culture.</p>
        
        <h3>Critical Strategies</h3>
        <ul>
          <li><strong>Virtual Onboarding:</strong> Creating engaging remote employee experiences</li>
          <li><strong>Digital Culture Building:</strong> Maintaining company culture across distances</li>
          <li><strong>Remote Performance Management:</strong> New approaches to evaluation and feedback</li>
          <li><strong>Mental Health Support:</strong> Addressing isolation and work-life balance</li>
        </ul>
      `,
      author: "David Thompson",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "David Thompson is an HR consultant focused on remote work strategies and employee experience.",
      readTime: "6 min read",
    },
    {
      id: 7,
      image: "/images/blog_1.jpeg",
      category: "Recruitment",
      date: "Oct 5, 2023",
      heading: "AI-Powered Recruitment: The New Standard",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>The AI Revolution in Hiring</h3>
        <p>AI-powered recruitment tools are becoming the new standard, offering unprecedented efficiency and accuracy in identifying and attracting top talent.</p>
        
        <h3>Key Benefits</h3>
        <ul>
          <li><strong>Faster Screening:</strong> Automated resume parsing and candidate matching</li>
          <li><strong>Reduced Bias:</strong> Objective evaluation based on skills and experience</li>
          <li><strong>Better Candidate Experience:</strong> Personalized communication and feedback</li>
          <li><strong>Predictive Analytics:</strong> Forecasting candidate success and retention</li>
        </ul>
      `,
      author: "Lisa Wang",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Lisa Wang is a recruitment technology expert with deep knowledge of AI applications in HR.",
      readTime: "8 min read",
    },
    {
      id: 8,
      image: "/images/blog_1.jpeg",
      category: "Management",
      date: "Oct 10, 2023",
      heading: "Leadership Skills for the Digital Age",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>Leadership in the Digital Era</h3>
        <p>The digital age demands new leadership skills and approaches. Modern leaders must navigate rapid technological change while maintaining human connection and organizational effectiveness.</p>
        
        <h3>Essential Skills</h3>
        <ul>
          <li><strong>Digital Literacy:</strong> Understanding technology trends and their impact</li>
          <li><strong>Agile Leadership:</strong> Adapting to rapid change and uncertainty</li>
          <li><strong>Remote Team Management:</strong> Leading distributed teams effectively</li>
          <li><strong>Data-Driven Decision Making:</strong> Leveraging analytics for strategic choices</li>
        </ul>
      `,
      author: "Robert Kim",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Robert Kim is a leadership development consultant specializing in digital transformation.",
      readTime: "7 min read",
    },
    {
      id: 9,
      image: "/images/blog_1.jpeg",
      category: "Positioning",
      date: "Oct 15, 2023",
      heading: "Brand Positioning in Competitive Markets",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>Standing Out in Crowded Markets</h3>
        <p>Effective brand positioning is crucial for differentiation in today's competitive landscape. It's about creating a unique space in your customers' minds.</p>
        
        <h3>Positioning Strategies</h3>
        <ul>
          <li><strong>Unique Value Proposition:</strong> Clearly articulating what makes you different</li>
          <li><strong>Target Audience Focus:</strong> Understanding and serving specific customer segments</li>
          <li><strong>Consistent Messaging:</strong> Aligning all communications with your position</li>
          <li><strong>Competitive Analysis:</strong> Identifying gaps and opportunities in the market</li>
        </ul>
      `,
      author: "Amanda Foster",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Amanda Foster is a brand strategist helping companies differentiate in competitive markets.",
      readTime: "6 min read",
    },
    {
      id: 10,
      image: "/images/blog_1.jpeg",
      category: "Accounting",
      date: "Oct 20, 2023",
      heading: "Financial Automation for Small Businesses",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>Automating Financial Processes</h3>
        <p>Financial automation can transform how small businesses manage their finances, reducing errors and saving valuable time for strategic activities.</p>
        
        <h3>Key Automation Areas</h3>
        <ul>
          <li><strong>Invoice Processing:</strong> Automated billing and payment tracking</li>
          <li><strong>Expense Management:</strong> Digital receipt processing and approval workflows</li>
          <li><strong>Financial Reporting:</strong> Automated generation of key financial statements</li>
          <li><strong>Tax Preparation:</strong> Streamlined tax filing and compliance</li>
        </ul>
      `,
      author: "James Wilson",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "James Wilson is a financial technology consultant specializing in small business automation.",
      readTime: "5 min read",
    },
    {
      id: 11,
      image: "/images/blog_1.jpeg",
      category: "Customer Support",
      date: "Oct 25, 2023",
      heading: "Building Exceptional Customer Experiences",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>Creating Memorable Customer Interactions</h3>
        <p>Exceptional customer experiences are the foundation of business success. They drive loyalty, referrals, and long-term growth.</p>
        
        <h3>Experience Pillars</h3>
        <ul>
          <li><strong>Personalization:</strong> Tailoring interactions to individual customer needs</li>
          <li><strong>Proactive Support:</strong> Anticipating and addressing issues before they arise</li>
          <li><strong>Omnichannel Consistency:</strong> Seamless experience across all touchpoints</li>
          <li><strong>Continuous Improvement:</strong> Using feedback to enhance service quality</li>
        </ul>
      `,
      author: "Maria Garcia",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Maria Garcia is a customer experience strategist with expertise in service design.",
      readTime: "6 min read",
    },
    {
      id: 12,
      image: "/images/blog_1.jpeg",
      category: "R&D",
      date: "Oct 30, 2023",
      heading: "Innovation Strategies for Product Development",
      description:
        "Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.",
      fullContent: `
        <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
        
        <h3>Driving Innovation in Product Development</h3>
        <p>Innovation is the lifeblood of product development. Successful companies create systematic approaches to foster creativity and bring breakthrough ideas to market.</p>
        
        <h3>Innovation Framework</h3>
        <ul>
          <li><strong>Design Thinking:</strong> Human-centered approach to problem-solving</li>
          <li><strong>Rapid Prototyping:</strong> Fast iteration and validation of ideas</li>
          <li><strong>Cross-Functional Collaboration:</strong> Bringing diverse perspectives together</li>
          <li><strong>Customer-Centric Research:</strong> Understanding real user needs and pain points</li>
        </ul>
      `,
      author: "Kevin Lee",
      authorImage: "/images/author-img.jpeg",
      authorBio:
        "Kevin Lee is an innovation consultant helping companies develop breakthrough products.",
      readTime: "7 min read",
    },
  ];

  useEffect(() => {
    const post = blogPosts.find((post) => post.id === parseInt(id));
    if (post) {
      setBlogPost(post);
    } else {
      navigate("/blog");
    }
  }, [id, navigate]);

  if (!blogPost) {
    return null;
  }

  return (
    <>
      <div className="max-w-[1920px] w-full bg-[#1A1A1D] min-h-screen">
        <div className="custom-container py-[40px] md:py-[60px] lg:py-[80px]">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-[8px] text-[#CCCCCC] hover:text-[#FFFFFF] transition-colors mb-[32px] group"
          >
            <svg
              className="w-[20px] h-[20px] transform group-hover:-translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-dm font-medium">Back to Blog</span>
          </button>

          <div className="mb-[40px] md:mb-[60px]">
            <div className="flex sm:flex-row sm:items-center gap-[16px] mb-[24px]">
              <span className="inline-block bg-[#333333] text-[#FFFFFF] text-[14px] font-medium px-[12px] py-[6px] rounded-full w-fit border border-[#555555]">
                {blogPost.category}
              </span>
              <span className="text-[#CCCCCC] text-[16px]">
                {blogPost.date}
              </span>
              <span className="text-[#999999] text-[14px]">
                {blogPost.readTime}
              </span>
            </div>

            <h1 className="font-bricolage font-bold text-[#FFFFFF] text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-[1.2] mb-[24px]">
              {blogPost.heading}
            </h1>

            <div className="flex items-center gap-[16px]">
              <img
                src={blogPost.authorImage}
                alt={blogPost.author}
                className="w-[48px] h-[48px] rounded-full object-cover border border-[#555555]"
              />
              <div>
                <div className="font-dm font-medium text-[#FFFFFF] text-[18px]">
                  {blogPost.author}
                </div>
                <div className="text-[#CCCCCC] text-[14px]">
                  {blogPost.authorBio}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-[40px] md:mb-[60px]">
            <img
              src={blogPost.image}
              alt={blogPost.heading}
              className="w-full h-[250px] md:h-[300px] lg:h-[450px] object-cover rounded-[16px] border border-[#333333] object-center"
            />
          </div>

          <div className="mx-auto">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blogPost.fullContent }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

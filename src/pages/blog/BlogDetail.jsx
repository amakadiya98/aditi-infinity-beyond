import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      image: "/images/blog_1.jpg",
      date: "Sep 10, 2024",
      heading: "The Business Impact of Job Jarvis: Automating Job Applications",
      description:
        "In today’s fast-paced job market, time and efficiency are everything. Job seekers often spend countless hours filling out repetitive applications, uploading the same documents, and tailoring cover letters. At the same time, businesses are overwhelmed by the sheer number of applications, many of which don’t match the role.Job Jarvis is changing that. As an AI-powered automation platform, it streamlines the job application process for candidates while delivering better results for employers.",
      fullContent: `
        <p>At Job Jarvis, speed and precision in recruitment are more than just buzzwords—they're the foundation of how we operate. The moment a role goes live, our automation ensures applications reach the right recruiters within minutes. This edge has consistently translated into faster shortlists, quicker interview calls, and successful placements across some of the most innovative startups.</p>
        
        <h3>What is Job Jarvis?</h3>
        <p>Job Jarvis is a smart automation tool designed to take the heavy lifting out of job hunting. It:</p>
        
        <h3>Real Results from Real Companies</h3>
        <p>In the past few months alone, Job Jarvis has successfully filled roles across various industries:</p>
        <ul class="list-disc">
          <li>Scrapes and matches jobs based on skills, resume, and preferences.</li>
          <li>Personalizes applications to align with job descriptions.</li>
          <li>Automates submissions across Job boards and career sites</li>
          <li>Tracks application status by integrating with email.</li>
        </ul>
        <p>Instead of managing dozens of tabs and repeating the same steps, job seekers can focus on what matters most—interviews and career growth.</p>
        
        <h3>How It Impacts Job Seekers</h3>
        
        <ul class="list-disc">
          <li><strong>Faster Applications:</strong> Apply to more jobs in less time without losing quality.</li>
          <li><strong>Better Matches:</strong> Focus on roles that align with your profile and skills.</li>
          <li><strong>Increased Opportunities:</strong> Higher volume of personalized applications means more chances to get noticed.</li>
          <li><strong>Less Stress:</strong> Automation removes the frustration of repetitive tasks.</li>
        </ul>

        <h3>How It Impacts Businesses</h3>
        <p>While designed for candidates, employers benefit as well:</p>
        <ul class="list-disc">
          <li><strong>Higher-Quality Applications: </strong>  Job Jarvis filters for relevance, reducing spam.</li>
          <li><strong>Quicker Hiring Cycles:</strong> Recruiters connect with better-fit candidates faster.</li>
          <li><strong>Improved Efficiency:</strong>  Less time wasted sorting through unqualified resumes.</li>
        </ul>
        
          <h3>What to Expect</h3>
          <p>With Job Jarvis, the application process becomes smarter, faster, and more effective. For job seekers, it means more interviews and better opportunities. For businesses, it means finding the right talent with less effort.</p>
        

            <h3>Why Adopt Job Application Automation Now</h3>
            <p>Automation is no longer optional—it’s the next step in modern hiring. By embracing platforms like Job Jarvis, job seekers can gain a competitive edge, and businesses can strengthen their recruitment pipelines.
            </p>
            <p>Ready to see the difference? Sign up with Job Jarvis today and experience a smarter way to apply.</p>
        `,
    },
    {
      id: 2,
      image: "/images/blog_2.jpg",
      date: "Feb 12, 2025",
      heading: "Roles Filled by Job Jarvis in the Past Few Months",
      description:
        "At Job Jarvis , speed and precision in recruitment are more than just buzzwords—they’re the foundation of how we operate. The moment a role goes live, our automation ensures applications reach the right recruiters within minutes. This edge has consistently translated into faster shortlists, quicker interview calls, and successful placements across some of the most innovative startups.",
      fullContent: `
       <p>Over the past few months, we’ve helped talented professionals secure positions across
engineering, product, design, marketing, and leadership roles. Here’s a look at some of the
standout placements we’ve powered recently:</p>
        <h3>A Track Record of Swift Placements</h3>
        <ul class="list-disc">
          <li><strong>Alga Biosciences</strong> — Placed Formulation Scientists and Microbiologists (caroline@alga.bio).</li>
          <li><strong>Angle Health</strong> — Placed Backend Engineers & Data Scientists (anirban@anglehealth.com).</li>
          <li><strong>Avenue</strong> — Placed Software Engineers, Solutions Engineers, Product Designers, and Growth roles (justin@useavenue.com).</li>
          <li><strong>Axle</strong> — Placed Sr. Product Engineers and Product Engineers (nihar@axle.insure).</li>
          <li><strong>Belvo</strong> — Placed Engineering and Product Managers (pablo@belvo.com).</li>
          <li><strong>Bend</strong> — Placed Principal Software Engineer (thomas@bend.green).</li>
          <li><strong>Biodock</strong> — Placed Senior Fullstack JS Engineer and Senior Backend/AI Engineer (michael@biodock.ai).</li>
          <li><strong>Cambio</strong> — Placed Fullstack Engineers and Data Scientists (founders@cambio.ai).</li>
          <li><strong>Canix</strong> — Placed Engineering roles (nicole@canix.com).</li>
          <li><strong>CarbonChain</strong> — Placed Sales, Customer Success, Data Science, and Software Engineering roles (roheet@carbonchain.com).</li>
          <li><strong>Chariot</strong> — Placed Founding Engineer (aaron@givechariot.com).</li>
          <li><strong>Clipboard Health</strong>  — Placed across Product, Engineering, Sales, and Finance (recruiting@clipboardhealth.com).</li>
          <li><strong>CollabKit</strong> — Placed Software Engineer (namit@collabkit.dev).</li>
          <li><strong>Decentro</strong> — Placed Compliance & Nodal Officer (rohit@decentro.tech).</li>
          <li><strong>Duffl</strong> — Placed Head of Product and UI/UX Designer (david@duffl.com).</li>
          <li><strong>Embrace</strong> Placed Marketing, Sales, Product Managers, and Product Designers (megan@embrace.io).</li>
          <li><strong>Emerge Tools</strong> — Placed Senior Mobile Engineer (josh@emergetools.com).</li>
          <li><strong>Encord</strong> — Placed Full Stack Engineers (ulrik@encord.com).</li>
          <li><strong>Epsilon3</strong> — Placed Software Engineers and Engineers in Test (max@epsilon3.io).</li>
          <li><strong>Eventual</strong> — Placed Distributed Data Systems Founding Engineer (sammy@eventualcomputing.com).</li>
          <li><strong>Explo</strong> — Placed Account Executive, Senior Software Engineer, and Product Manager (gary@explo.co).</li>
          <li><strong>Fieldguide</strong> — Placed Engineering Managers, Software Engineers, and Product Managers (chris@fieldguide.io).</li>
          <li><strong>Flock Safety</strong> — Placed Platform Engineers, Hardware Engineers, and Technical Project Managers (laura.barnes@flocksafety.com).</li>
          <li><strong>Fractional</strong> — Placed iOS Lead, Staff Engineers, Product Engineers (carlos@fractional.app).</li>
          <li><strong>GiveCampus</strong> — Placed Full Stack Engineer (mike@givecampus.com).</li>
          <li><strong>HealthSherpa</strong> — Placed Software Engineering, Product, Design, Data Science, and Marketing roles (ning@healthsherpa.com).</li>
          <li><strong>Heron Data</strong> — Placed Frontend Engineers (johannes@herondata.io).</li>
          <li><strong>Humaans</strong> — Placed Product Designers, Engineers, Head of Engineering (giovanni@humaans.io).</li>
          <li><strong>Humanloop</strong> — Placed Product Engineers (jordan@humanloop.com).</li>
          <li><strong>Joy</strong> — Placed Engineering, Product, Design, Marketing, BD, and Merchandising roles (vishal@withjoy.com).</li>
          <li><strong>Juniper Behavioral Health</strong> — Placed Product Manager and Software Engineer (christophe@juniperplatform.com).</li>
          <li><strong>Karat Financial</strong> — Placed Growth Marketing, Accountants, and Recruiters (ashleytocco@trykarat.com).</li>
          <li><strong>Keeper</strong> — Placed Founding Engineers (ben.stein@keeper.app).</li>
          <li><strong>Kula</strong> — Placed Software Engineer (saaras@joinkula.io)</li>
          <li><strong>LiveFlow</strong> — Placed Engineering, Sales, Marketing (anita@liveflow.io).</li>
          <li><strong>Luminai</strong> — Placed Engineering, Product Managers, and Product Marketing (vikram@luminai.com).</li>
          <li><strong>Maker AI</strong> — Placed Senior Growth Marketer and Staff Developer (naeem@maker.ai).</li>
          <li><strong>Mashgin</strong> — Placed Senior Software Engineer (stephanie@mashgin.com).</li>
          <li><strong>Mednet</strong>  — Placed Engineers, Sales, Scientific Analysts (samir@themednet.org).</li>
          <li><strong>Memfault</strong>  — Placed Engineering, Sales, Customer Success (francois@memfault.com).</li>
          <li><strong>Memora Health</strong> — Placed Engineering, Finance, Clinical Research (manav@memorahealth.com).</li>
          <li><strong>Motion</strong> — Placed Senior Full Stack Engineer (ethan@usemotion.com).</li>
          <li><strong>Moxion Power</strong> — Placed across Engineering, Finance, Marketing, Operations, and People (recruiting@moxionpower.com).</li>
          <li><strong>Netomi AI</strong> — Placed Sales, Partnerships, Data Science, Product Design (puneet@netomi.com).</li>
          <li><strong>Oklo</strong> — Placed Engineering, Finance, and BD (founders@oklo.com).</li>
          <li><strong>OneSchema</strong> — Placed Software Engineer and Founding Demand Generation Manager (andrew@oneschema.co).</li>
          <li><strong>OneShop</strong> — Placed Backend Engineers and Growth Engineers (albert@oneshop.com).</li>
          <li><strong>Pasito</strong>  — Placed VP Engineering and Full Stack Engineer (pauline@joinpasito.com).</li>
          <li><strong>PermitFlow</strong> — Placed Founding Engineer, Sales Lead, and Senior Ops Lead (francist@permitflow.com).</li>
          <li><strong>PolicyFly</strong> — Placed Frontend, Backend, and EM Engineers (cory@policyfly.com).</li>
          <li><strong>PowerUs</strong> — Placed Software Engineers (julian@powerus.de).</li>
          <li><strong>Qventus</strong> — Placed Data Platform and Software Engineers (jchavez@qventus.com).</li>
          <li><strong>ReadMe</strong> — Placed Product, Engineering, Design (greg@readme.io).</li>
          <li><strong>Reality Defender</strong> — Placed Research Scientists, Engineers, DataOps, and Partnerships (ben@realitydefender.ai).</li>
          <li><strong>Reframe</strong>  — Placed iOS Engineers (vedant@reframeapp.com).</li>
          <li><strong>Resquared</strong> — Placed Sales, Customer Success, Engineering (griffin@re2.ai).</li>
          <li><strong>Ribbon Health</strong> — Placed Enterprise Sales, Customer-Facing Engineers, and Senior Engineers (recruiting@ribbonhealth.com).</li>
          <li><strong>Rinsed</strong>  — Placed Full Stack Engineers (nic@rinsed.co).</li>
          <li><strong>Riot</strong>  — Placed Engineers, Account Execs, Heads of Content/Partnerships (ben@tryriot.com).</li>
          <li><strong>Roboflow</strong>  — Placed Engineering, Sales (brad@roboflow.com).</li>
          <li><strong>Rutter</strong>  — Placed Senior Software Engineer (eric@rutterapi.com).</li>
          <li><strong>SafeBase</strong> — Placed Team Leaders, Principal Engineers, and Customer Success Managers (al@safebase.io).</li>
          <li><strong>Secoda Inc</strong> — Placed across Sales, Engineering, Integrations, and Growth (etai@secoda.co).</li>
          <li><strong>Sieve</strong>  — Placed Full Stack Engineers and ML Engineers (mokshith@sievedata.com).</li>
          <li><strong>Skio</strong> — Placed Software Engineers (kennan@skio.com).</li>
          <li><strong>Slope</strong>  — Placed Engineering, Data Science, and Customer Success roles (alice@slope.so).</li>
          <li><strong>Spade</strong> — Placed Engineering Manager and Data Scientist (tess@spade.com).</li>
          <li><strong>Stepful</strong>  — Placed Head of Growth, Community Manager, Founding Product Engineer, and Ops Associate (carl@stepful.com).</li>
          <li><strong>Strive Math</strong> — Placed Sales, Customer Success, and Growth Interns (tamir@strivemath.com).</li>
          <li><strong>Svix</strong>  — Placed Engineering, DevRel, and Chief of Staff (tomh@svix.com).</li>
          <li><strong>TERRA</strong> — Placed Engineers, Ops, Designers, Growth Engineers (kyriakos@tryterra.co).</li>
          <li><strong>Text Blaze</strong> — Placed Account Exec, Head of Marketing, Full Stack Engineer (dan@blaze.today).</li>
          <li><strong>Two Dots</strong> — Placed Software Engineer (max@twodots.net).</li>
          <li><strong>Vanta</strong> — Placed Engineering, Design, and Sales roles (christina@vanta.com).</li>
        </ul>

            <h3>The Job Jarvis Advantage</h3>
            <p>What makes these wins possible is our ability to act faster than traditional recruitment workflows. By automating the application process, candidates supported by Job Jarvis don’t just get noticed—they often land in the recruiter’s inbox before anyone else.</p>
             <p>For companies, this means top-tier candidates are available sooner. For job seekers, it means greater chances of being shortlisted and ultimately placed.</p>
             <p>At Job Jarvis, we’re proving every day that the future of recruitment isn’t just about finding talent—it’s about finding it faster.</p>
      `,
    },
    {
      id: 3,
          image: "/images/blog_3.jpg",
      date: "March 12, 2025",
      heading: "The Hidden Truth About LinkedIn “Easy Apply” — And a Smarter Way to Get Noticed",
      description:
        "When I first started applying for jobs, I loved LinkedIn’s “Easy Apply” feature. In just a few clicks, I could send out dozens of applications in minutes. It felt like a shortcut to success.But after weeks of hitting that blue button and sending out hundreds of applications, I realized something was wrong—not a single interview invite came through.So, I started asking recruiters why",
      fullContent: `
      
        <h3>What Recruiters Told Me About Easy Apply</h3>
       <p>It turns out, the <strong>“Easy Apply” convenience comes at a cost.</strong></p>
        <ul class="list-disc">
          <li><strong>Low Priority Applications:</strong> Many recruiters admit that Easy Apply submissions often get less attention than applications submitted through official career portals.</li>
          <li><strong>Bypassed Systems:</strong> Easy Apply doesn’t always integrate into a company’s main applicant tracking system (ATS). Instead, your resume may sit in a secondary list recruiters rarely check.</li>
          <li><strong>Missing Information:</strong> Easy Apply skips fields that companies actually want—making your application incomplete compared to someone who applied directly.</li>
          <li><strong>High Competition:</strong> Since it’s easy, everyone uses it. Recruiters are flooded with hundreds of generic applications, making it harder for anyone to stand out.</li>
        </ul>
            <p>The truth? Easy Apply feels productive but often leads to  <strong> hidden rejection piles.</strong></p> 

            <h3>Why This Matters for Job Seekers</h3>
            <p>Most candidates think volume is the key—“If I apply to 100 jobs, one will work.” But if 90% of those applications are lost in low-priority channels, the volume doesn’t matter.</p>
             <p>This creates two big problems for job seekers:</p>
             <ul class="list-decimal">
              <li><strong> Wasted Time:</strong> Hours spent applying don’t translate into results.</li>
               <li><strong> Missed Opportunities:</strong> Jobs that could have been a perfect fit slip through the cracks.</li>
             </ul>

             <h3>How a Job Application Agent Changes the Game</h3>
             <p>This is where tools like <strong>Job Jarvis</strong> make a real difference. Unlike Easy Apply, a job application
         agent:</p>
     <ul class="list-disc">
          <li><strong>Applies directly on company portals</strong> so your resume enters the official ATS.</li>
          <li><strong>Fills out the full application</strong> (not just the short Easy Apply form), making you a complete candidate.</li>
          <li><strong>Targets the right jobs</strong>  by analyzing your skills, resume, and fit.</li>
          <li><strong>Covers more than job boards</strong>—including startups and seed-funded companies wherecompetition is lower.</li>
          <li><strong>Tracks application progress</strong> by monitoring your email for updates, so you never miss recruiter responses.</li>
        </ul>
        <p>Instead of feeling like your efforts disappear into a void, automation ensures your applications are <strong>seen, processed, and prioritized.</strong></p>

        <h3>The Smarter Path Forward</h3>
        <p>LinkedIn Easy Apply isn’t useless—but relying on it alone can stall your job search. To stand out in today’s hiring market, you need a system that:</p>
         <ul class="list-disc">
          <li>Gets your application into the <strong> right channels</strong> </li>
          <li>Maximizes visibility with recruiters</li>
          <li>Scales your efforts without wasting time</li>
        </ul>
        <p>That’s exactly what a job application agent provides.</p>

        <h3>Final Takeaway</h3>
        <p>“Easy” doesn’t always mean “effective.” While Easy Apply feels convenient, it often leaves candidates stuck in a cycle of silence. A smarter, more targeted approach not only increases your chances of landing interviews but also saves you from endless frustration.</p>
        <p><strong>👉 Ready to stop applying blindly? Try Job Jarvis today and put your applications where they truly count.</strong></p>
      `,
    },
    {
      id: 4,
      image: "/images/blog_4.jpg",
     date: "May 12, 2025",
      heading: "How Job Jarvis is Transforming Job Applications: 700+ Placements in 11 Months",
      description:
        "The job market is more competitive than ever. Traditional job boards are crowded, applications are repetitive, and candidates often feel lost in the noise. That’s why we built Job Jarvisan AI-powered automation that makes job hunting smarter, faster, and more effective.",
      fullContent: `
        <p>And the results speak for themselves: in just the past <strong>11 months, Job Jarvis has helped over 700 people land jobs.</strong></p>
        
        <h3>Going Beyond Crowded Job Boards</h3>
        <p>Most job seekers rely only on well-known job boards, where thousands of applicants compete
        for the same role. The chances of standing out are slim, and opportunities are often delayed.</p>
        <p><strong>Job Jarvis goes further.</strong> Not only does it apply on job boards, but it also targets <strong>new-age,
        seed-funded companies—businesses</strong> that are actively hiring, moving fast, and offering quicker
        placement opportunities. This gives our users an advantage that others simply don’t have.
        </p>
        
        <h3>Why Candidates Choose Job Jarvis</h3>
        <ul>
          <li><strong>Speed:</strong> Applications go out instantly, getting candidates noticed faster.</li>
          <li><strong>Relevance:</strong> Smart matching ensures jobs truly fit skills and experience.</li>
          <li><strong>More Opportunities:</strong> Covering both job boards and emerging companies increases chances dramatically.</li>
          <li><strong>Results That Count:</strong> Over 700 successful placements prove that automation works.</li>
        </ul>
            <h3>Why It Works</h3>
        <p>The edge lies in <strong>removing delays and maximizing reach.</strong> Every day spent applying manually
        is a missed opportunity. With Job Jarvis, candidates are among the first in the recruiter’s inbox,
        increasing their visibility and interview calls.
        </p>
    <h3>The Future of Job Applications</h3>
        <p>Automation is no longer a “nice to have”—it’s becoming the standard. Candidates who adopt
      tools like Job Jarvis aren’t just saving time; they’re gaining a competitive advantage.
      Businesses, in turn, connect with better-fit candidates faster, making hiring more efficient.
      </p>
    <h3>Ready to Experience It?</h3>
        <p>With <strong>700+ success stories in 11 months,</strong> Job Jarvis is already proving its impact. Whether
        you’re tired of crowded job boards or want faster access to real opportunities, now is the time to
        act.
        </p>
        <p>👉 <strong>Sign up with Job Jarvis today</strong> and experience a smarter, faster, and more effective way to
        land your next role.
        </p>
      `,
    },
    {
      id: 5,
      image: "/images/blog_5.jpg",
      date: "July 12, 2025",
      heading: "Why Avoiding Crowded Job Boards Leads to Better Job Placements",
      description:
        "For most job seekers, the default path begins with traditional job boards. It feels like the obvious choice—millions of listings, thousands of companies, and endless opportunities in one place. But here's the hidden truth: job boards are crowded, competitive, and slow. Standing out in a pool of hundreds or even thousands of applicants is nearly impossible.",
      fullContent: `
        <p>That's why shifting focus away from job boards has become one of the most impactful strategies in modern job hunting.</p>
        
        <h3>The Problem with Job Boards</h3>
        <p>Job boards have become the online equivalent of crowded marketplaces. Everyone is
         competing for attention, and companies are buried under waves of applications. For candidates,
         this means:</p>
         <ul>
         <li> Applications get lost in the crowd.</li>
         <li>Recruiters take longer to respond.</li>
         <li>Great opportunities are delayed or missed altogether.</li>
         </ul>
         <p>In short, traditional job boards are no longer the fastest way to secure interviews.</p>
        
        <h3>The Power of Targeting Startups</h3>
        <p>Instead of competing on crowded platforms, a smarter approach is to target <strong>startups and
         seed-funded companies</strong>. These businesses are growing rapidly, they're actively hiring, and
         they move faster in their decision-making.</p>
         <p>By focusing on startups, job seekers gain several advantages:</p>
        <ul>
          <li><strong>Less Competition:</strong> Fewer applicants compared to mainstream job boards.</li>
          <li><strong>Faster Hiring Cycles: </strong>Startups often hire quickly to meet urgent needs.</li>
          <li><strong>More Opportunities:</strong>Emerging companies create roles that don't always appear on job boards.</li>
          <li><strong>Direct Access:</strong> Applicants often connect more closely with founders, hiring managers,
          or small HR teams.</li>
        </ul>
        <p>This direct and agile hiring process creates better chances for candidates to land the right role.</p>
        <h3>How This Strategy Changes Outcomes</h3>
        <p>The difference is clear: instead of chasing opportunities where everyone else is applying,
        candidates who focus on startups step into spaces where <strong>their applications are seen, valued,
        and acted upon faster.</strong></p>
        <p>It's not just about applying more—it's about applying smarter. And by targeting companies that
        are actively building and expanding, candidates align themselves with organizations that are
        eager to bring new talent onboard.
        </p>
        <h3>Looking Ahead</h3>
        <p>The future of hiring won't be decided by crowded job boards alone. It will be shaped by
        candidates and companies willing to think differently, move faster, and create more meaningful
        connections.</p>
        <p>For job seekers, the takeaway is simple:<strong> step away from the crowd, and step into
        growth-driven companies where opportunities are real, timely, and within reach.</strong></p>
      `,

    },
    {
      id: 6,
     image: "/images/blog_6.png",
      date: "August 12, 2025",
      heading: "Past Placements at Startups: How Job Jarvis Accelerates Careers",
      description:
        "At Job Jarvis, we believe speed, precision, and automation are the future of recruitment. Over the last few months, we've proudly matched incredible talent with some of the fastest-growing startups, helping candidates land roles in record time while giving companies the first-mover advantage on top talent.",
      fullContent: `
        <p>Below is a snapshot of where our candidates have recently secured opportunities:</p>
        
        <h3>🚀 Highlighted Placements</h3>
        
        <ul>
          <li><strong>Alga Biosciences —</strong> Formulation Scientist, Microbiologist (Contact: caroline@alga.bio)</li>
          <li><strong>Angle Health —</strong> Backend Engineers & Data Scientists (Contact: anirban@anglehealth.com)</li>
          <li><strong>Avenue —</strong> Software Engineer, Solutions Engineer, Growth, Product Design (Contact: justin@useavenue.com)</li>
          <li><strong>Axle —</strong>Sr. Product Engineer, Product Engineer(Contact: nihar@axle.insure)</li>
          <li><strong>Belvo —</strong>Engineering, Product Managers(Contact: pablo@belvo.com)</li>
          <li><strong>Bend —</strong>Principal Software Engineer(Contact: thomas@bend.green)</li>
          <li><strong>Biodock —</strong>Senior Fullstack JS Engineer, Senior Backend/AI Engineer(Contact: michael@biodock.ai)</li>
          <li><strong>Cambio —</strong>Fullstack Software Engineer, Data Scientist(Contact: : founders@cambio.ai)</li>
          <li><strong>Canix —</strong>Engineering(Contact: nicole@canix.com)</li>
          <li><strong>CarbonChain —</strong>Sales, Customer Success, Data Science, Software Engineering(Contact: roheet@carbonchain.com)</li>
          <li><strong>Chariot —</strong>Founding Engineer(Contact: aaron@givechariot.com)</li>
          <li><strong>Clipboard Health —</strong>Engineering Roles(Contact: weihan@clipboardhealth.com)</li>
          <li><strong>CoLoop —</strong>Senior Fullstack Engineer(Contact: jason@coloop.ai)</li>
          <li><strong>Curri —</strong>Software Engineer(Contact: matt@curri.com)</li>
          <li><strong>Dock —</strong>Frontend Engineer, Fullstack Engineer(Contact: alex@dock.us)</li>
          <li><strong>Eppo —</strong>Software Engineer, Infrastructure Engineer(Contact: chetan@geteppo.com)</li>
          <li><strong>Encord —</strong>Software Engineer, Machine Learning Engineer(Contact: eric@encord.com)</li>
          <li><strong>Federato —</strong>Fullstack Engineer(Contact: will@federato.ai)          </li>
          <li><strong>Finch —</strong>Backend Engineer, Fullstack Engineer(Contact: jeremiah@tryfinch.com)</li>
          <li><strong>Fynn —</strong>Data Engineer, Analytics Engineer(Contact: cole@fynncredit.com)</li>
        </ul>
        <p>(and many more across our growing startup placement list)></p>

        <h3>💡 Why This Matters</h3>
        <p>What sets Job Jarvis apart is our automation-first recruitment engine. The moment a role
         goes live, our system matches candidates instantly, auto-fills applications, and ensures they are
         among the first to reach hiring teams</p>
         <p>For startups, this means critical roles get filled faster. For candidates, it means better odds
         of landing interviews—before the competition even hits "Apply."
         </p>
         <p>✨ At Job Jarvis, we're proving that with the right blend of automation and human insight, the
         hiring process doesn't need to drag on for weeks. Roles can be filled within hours of going live.</p>
      `,
    },
    {
      id: 7,
      image: "/images/blog_1.jpeg",
     
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

            {/* <div className="flex items-center gap-[16px]">
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
            </div> */}
          </div>

          <div className="mb-[40px] md:mb-[60px]">
            <img
              src={blogPost.image}
              alt={blogPost.heading}
              className="w-full h-[250px] md:h-[300px] lg:h-[450px] rounded-[16px]  object-contain"
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

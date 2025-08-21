
import HeroSection from '../../components/Bench_hero';
import VideoSection from '../../components/Bench_video';
import ReviewsSection from '../../components/Bench_reviews'
import AlternatingImageContent from '../../components/Bench_fiveimg'
import GlassCards from '../../components/Bench_horizontalcards';
import Frame from '../../components/Bench_frame'
import Hiring from '../../components/Bench_hiring'
import Footer from '../../components/Bench_footer';
import Peoples from '../../components/Bench_peoples';
import Subs1 from '../../components/Bench_plane-1';
 
export default function BenchSales1() {
  return (
    <div className="bg-[#1A1A1D] h-screen  relative">
      <HeroSection />
      <VideoSection />
      <ReviewsSection/>
      <AlternatingImageContent/>
      <GlassCards/>
      <Frame/>
      <Hiring/>
      <Subs1/>
      <div className="bg-[#1A1A1D] space-y-0"> {/* Removes all gaps between children */}
      <Peoples />
      <Footer />
    </div>
    </div>
  );
}
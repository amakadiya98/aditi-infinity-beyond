import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import HumanResources from "./pages/human-resources/humanResources";
import Recruitment from "./pages/recruitment/recruitment";
import Opertaion from "./pages/operation/operation";
import Marketing from "./pages/marketing/marketing";
import Sales from "./pages/sales/sales";
import Positioning from "./pages/positioning/positioning";
import Accounting from "./pages/accounting/accounting";
import CustomerSupport from "./pages/customer-support/customerSupport";
import R_D from "./pages/r&d/r&d";
import Founders from "./pages/founders/founders";
import Solopreneurs from "./pages/solopreneurs/solopreneurs";
import Management from "./pages/management/management";
import Header from "./components/header";
import BenchSales from "./pages/benchsales/benchsales";
import Blog from "./pages/blog/blog";
import BlogDetail from "./pages/blog/BlogDetail";
import "./App.css";
import BenchSales1 from "./pages/benchsales-1/benchsales";
import BenchSales3 from "./pages/benchsales-3/benchsales";
export default function App() {
  return (
    <Router>
      <div className="max-w-[1920px] w-full bg-[#1A1A1D]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/benchsales" element={<BenchSales />} />
          <Route path="/benchsales-1" element={<BenchSales1 />} />
          <Route path="/benchsales-3" element={<BenchSales3 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/human-resources" element={<HumanResources />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/operation" element={<Opertaion />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/positioning" element={<Positioning />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/r&d" element={<R_D />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/solopreneurs" element={<Solopreneurs />} />
          <Route path="/management" element={<Management />} />
        </Routes>
      </div>
    </Router>
  );
}

// import "./App.css";
// import Header from "./components/Header";
// import SideBar from "./components/SideBar";
// import ProfilePic from "./components/ProfilePic";
// import Introduction from "./components/Introduction";
// import About from "./components/About";
// import Services from "./components/Services";
// import ProgressBar from "./components/ProgressBar";

// function App() {
//   return (
//     <div className="w-screen">
//       <Header />
//       <SideBar />
//       <div
//         className="ml-[90px]
//     grid grid-cols-1 md:grid-cols-3
//     "
//       >
//         <div className="col-span-2 p-5 mt-[90px]">
//           <Introduction />
//           <About />
//           <Services />
//         </div>
//         <div className="hidden md:block">
//           <ProgressBar />
//           <ProfilePic />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ProfilePic from "./components/ProfilePic";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Services from "./components/Services";
import ProgressBar from "./components/ProgressBar";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="w-screen">
        <Header />
        <SideBar />
        <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 p-5 mt-[90px]">
            <Introduction />
            <About />
            <Services />
            <Skills/>
            <Projects/>
            <Contact/>
          </div>
          <div className="hidden md:block">
            <ProgressBar />
            <ProfilePic />
          </div>
        </div>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

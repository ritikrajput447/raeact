import React from 'react'
import Layout from './component/Layout/Layout.jsx'
import About from './Pages/about/About';
import Rrkstack from './Pages/Rrkstack/Rrkstack';
import Projects from './Pages/projects/Projects';
import Education from './Pages/Education/Education';
import Contact from './Pages/Contact/Contact.jsx';

import ScrollToTop from "react-scroll-to-top";
import MobileNav from './MobileNav/MobileNav.jsx';
import WorkExp from './Pages/workexp/WorkExp.jsx';

const App = () => {
  return (
    <>
      {/* <h1 className='text-success'>hello ritik!!</h1> */}
      <MobileNav></MobileNav>
      <Layout></Layout>
      <div className="container">
        <About></About>
        <Education></Education>
        <Rrkstack></Rrkstack>
        <Projects></Projects>
        {/* <WorkExp></WorkExp> */}
        <Contact></Contact>
      </div >
      <ScrollToTop smooth color="#138781" style={{ backgroundColor: '#1e1e2c', borderRadius: '80px' }} />
    </>
  )
}

export default App
import React from 'react';
import { NavbarDefault } from '../Navbar';
import { FooterWithSitemap } from '../Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import TwoDev from '../pages/TwoDiv'
import Blogs from '../tourMangmnt/Blogs';
import { RatingWithComment } from '../pages/Destination';
import {AvatarWithText} from '../pages/HappyCustm'
import Carduse from '../experience/Carduse';
// import Navbarr from '../practice/Navbarr';
// import Twodiv from '../practice/Twodiv';
// import Ucard from '../practice/card/Ucard';
// import Footer from '../practice/card/Footer';


const Layout = () => {
  const location = useLocation();

  return (
    <div className='mx-auto overflow-hidden'>
      <header>
        {/* <Navbarr/>
        <Twodiv/>
        <Ucard/>
         <Footer/> */}
        <NavbarDefault />
      </header>
      
      {/* Render Home on the root path ("/"), otherwise render Outlet for other routes */}
      {location.pathname === "/" ? (
        <main className='min-h-screen flex-grow'>
         <>
          <Home />
          <TwoDev/>
          <Carduse/>
          <Blogs/>
          <AvatarWithText/>
          <RatingWithComment/>
         </>
        </main>
      ) : (
        <main className='min-h-screen flex-grow'>
          <Outlet /> {/* Renders Contact, About, etc. */}
        </main>
      )}
      
      <footer>
        <FooterWithSitemap />
      </footer>
    </div>
  );
};

export default Layout;

















// import React from 'react';
// import { NavbarDefault } from '../Navbar';
// import { FooterWithSitemap } from '../Footer';
// import Home from '../pages/Home';
// import { useLocation } from 'react-router-dom';

// const Layout = () => {
//    const location = useLocation();

//   return (
//     <div className='mx-auto overflow-hidden'>
//       <header>
//         <NavbarDefault />
//       </header>
//       <main className='min-h-screen flex-grow'>
//         <>
//         <Home/>
//         </>
//       </main>
       
//       <footer>
//         <FooterWithSitemap />
//       </footer>
//     </div>
//   );
// };

// export default Layout;

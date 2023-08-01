import React, { useEffect, useRef, useState } from "react";
import './assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ReservationPage from "./pages/ReservationPage";
import BlogPage from "./pages/BlogPage";
import GalleryPage from "./pages/GalleryPage";






function App() {
  const scrollDemo = useRef()
  const [offset, setOffset] = useState(0);

  console.log("hight==>", offset);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      {/*----------------------------- Browser Router Section ----------------------*/}
      <BrowserRouter>
        <div className="App">

          {/*----------------------------- Header Section ----------------------*/}
          <div className='header'>
            <HeaderComponent offset={offset} />
          </div>


          {/*----------------------------- Toaster Section ----------------------*/}
          {/* <Toaster position="top-right1"></Toaster> */}

          {/*----------------------------- Main Contant ----------------------*/}
          <div className="main-content">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/menu' element={<MenuPage />} />
              <Route path='/reservation' element={<ReservationPage />} />
              <Route path='/services' element={<ServicesPage />} />
              <Route path='/about' element={<AboutUsPage />} />
              <Route path='/blog' element={<BlogPage/>} />
              <Route path='/gallery' element={<GalleryPage />} />
              <Route path='/contact' element={<ContactUsPage />} />
              <Route path="/footer" element={<FooterComponent />} />
            </Routes>
          </div>
          <div className="footer">
            <FooterComponent />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

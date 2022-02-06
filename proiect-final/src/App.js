import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home/home";
import { NotFound } from "./pages/not-found";
import { Footer } from "./Header_Footer/footer";
import { AboutUs } from "./pages/AboutUs/aboutUs";
import { Services } from "./pages/Services/Services";
import GoogleApiWrapper from "./pages/Contact/contact"
import "./Scss_files/main.scss";

function App() {

  return (
      <div className="App">
              <BrowserRouter>
                  
                  <Routes>
                      <Route path={'/'} element={<Home />} />
                      <Route path={'/aboutus'} element={<AboutUs />} />
                      <Route path={'/services'} element={<Services />} />
                      <Route path={'/contactus'} element={<GoogleApiWrapper />} />
                      <Route path={'*'} element={<NotFound />} />
                  </Routes>

                  <Footer />
              </BrowserRouter>
      </div>
  );
}

export default App;

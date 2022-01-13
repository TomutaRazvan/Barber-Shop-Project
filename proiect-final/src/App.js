import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home/home";
import { NotFound } from "./pages/not-found";
import { Footer } from "./Header_Footer/footer";
import { WhyUs } from "./pages/WhyUs/whyUs";
import "./Scss_files/main.scss";

function App() {

  return (
      <div className="App">
              <BrowserRouter>
                  
                  <Routes>
                      <Route path={'/'} element={<Home />} />
                      <Route path={'/whyus'} element={<WhyUs />} />
                      <Route path={'*'} element={<NotFound />} />
                  </Routes>

                  <Footer />
              </BrowserRouter>
      </div>
  );
}

export default App;

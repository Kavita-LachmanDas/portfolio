import About from "./components/About";
import Contact from "./components/Contact";
import LoadingReveal from "./components/hello";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TestimonialsSlider from "./components/Testimonials";
import { ThemeProvider } from "./ThemeContext";



function App() {
  return (
<>

<ThemeProvider>
<LoadingReveal/>
<About/>
<Services/>
<Projects/>
<TestimonialsSlider/>
<Contact/>

 
</ThemeProvider>

</>
  );
}

export default App;

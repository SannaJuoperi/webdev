import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Section from "./components/Section.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Section id="home" title="Home" text="This is the home section. Scroll down to explore more!"/>
        <Section id="about" title="About" text="This is the about section. Learn more about this page here."/>
      </main>
      <Footer />
    </div>
  )
}

export default App

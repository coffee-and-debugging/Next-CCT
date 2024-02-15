import { About, Contact, Experiences, Projects, Skills } from "@cct/components";
import AppFooter from "@cct/components/AppFooter";
import AppHeader from "@cct/components/AppHeader";
import Herosection from "@cct/components/Herosection";

export default function Home() {
  return (
    <>
      <AppHeader />
      <Herosection />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <AppFooter />
    </>
  );
}

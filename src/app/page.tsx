import AboutUs from "@/components/home/AboutUs";
import Articles from "@/components/home/Articles";
import Banner from "@/components/home/Banner";
import CompanyLogos from "@/components/home/CompanyLogos";
import OurProject from "@/components/home/OurProject";
import Stylish from "@/components/home/Stylish";
import WorkSystem from "@/components/home/WorkSystem";
import Container from "@/components/shares/Container";
import Counter from "@/components/shares/Counter";
import Join from "@/components/shares/Join";


const workSystemData = [
  {
      title: "Project Plan",
      disc: "There are many variations of the passages of lorem Ipsum from available, majority."
  },
  {
      title: "Interior Work",
      disc: "There are many variations of the passages of lorem Ipsum from available, majority."
  },
  {
      title: "Reallization",
      disc: "There are many variations of the passages of lorem Ipsum from available, majority."
  },
]

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <Container isPadding={false} >
        <WorkSystem data={workSystemData}/>
        <Stylish />
        <AboutUs />
        <CompanyLogos />
        <OurProject />
      </Container>
      
      <Counter />

      <Container isPadding={false} >
        <Articles isHome={true}/>
        <Join />
      </Container>
    </div>
  );
}

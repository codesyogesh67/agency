import Image from "next/image";
import Container from "@/components/Container"
import Banner from "@/components/banner/Banner";
import Service from "@/components/sections/Service";
import Testimonials from "@/components/sections/Testimonials";
import Teams from "@/components/sections/Teams";

export default function Home() {
  return (
    <Container>
   
      <Banner />
      <Service />
      <Testimonials />
      <Teams />
 

  </Container>
  );
}

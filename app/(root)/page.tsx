import Image from "next/image";
import Container from "@/components/Container"
import Banner from "@/components/banner/Banner";
import Service from "@/components/sections/Service";

export default function Home() {
  return (
    <Container>
   
      <Banner />
      <Service />
 

  </Container>
  );
}

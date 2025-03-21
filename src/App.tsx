

import {
  useFetchBySlug,
  ExperienceRoot,
} from "@contentful/experiences-sdk-react";

import { client } from "./contentfulClient.ts";
// trigger component registration
import "./registeredComponents.ts";
import "./registeredDesignTokens.ts";
import "./App.css";
import { useParams } from "react-router-dom";
import { Carousel } from "./components/Carousel/Carousel.tsx";
import { CarouselItem } from "./components/Carousel/CarouselItem.tsx";
import { Button } from "./components/Button/Button.tsx";



const App = () => {
  // replace this section with however you choose to get your slug and locale (ex. from router, from internal state)
    const { slug , locale } = useParams<{
      slug: string;
      locale?: string;
    }>();
    const localeCode = locale ?? "en-US";
    


  const { isLoading, error, experience } = useFetchBySlug({
    client,
    // id of the experience type (content type)
    experienceTypeId: import.meta.env.VITE_CONTENTFUL_EXPERIENCE_TYPE,
    localeCode,
    slug: slug ?? "guest-house",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }


  return (
    <>
    <div className="flex flex-col items-center  h-screen justify-around">
    
      <ExperienceRoot  experience={experience} locale={localeCode} />
      <h1 className="text-4xl font-bold">React Carousel</h1>
      <Carousel autoplay interval={5000} className="h-96">
        <CarouselItem>
          <Button variant={'destructive'} text="Button 1"/>
        </CarouselItem>
        <CarouselItem>
          <Button variant={'ghost'} text="Button 2" />
        </CarouselItem>
        <CarouselItem>
          <Button  text="Button 3"/>
        </CarouselItem>
      </Carousel>
    </div>

    </>
  );
};

export default App;

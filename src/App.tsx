

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
      <ExperienceRoot  experience={experience} locale={localeCode} />
    </>
  );
};

export default App;

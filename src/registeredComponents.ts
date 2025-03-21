// src/registeredComponents.ts

import { defineComponents } from "@contentful/experiences-sdk-react";
import { Button } from "./components/Button/Button";
import { buttonDefinition } from "./components/Button/buttonDefinition";
import { ComponentCard } from "./components/ComponentCard/ComponentCard";
import { componentCardDefinition } from "./components/ComponentCard/componentCardDefinition";
import { Tab } from "./components/Tab/Tab";
import { tabDefinition } from "./components/Tab/tabDefinition";
import { Toggle } from "./components/Toggle/Toggle";
import { toggleDefinition } from "./components/Toggle/toggleDefinition";
import { Select } from "./components/Select/Select";
import { selectDefinition } from "./components/Select/selectDefinition";
import { Carousel } from "./components/Carousel/Carousel";
import { carouselDefinition } from "./components/Carousel/carouselDefinition";

defineComponents([
  {
    component: Button,
    definition: buttonDefinition, 
  },
  {
    component: ComponentCard,
    definition: componentCardDefinition
  },
  {
    component: Tab,
    definition: tabDefinition
  },
  {
    component: Toggle,
    definition: toggleDefinition
  },
  {
    component: Select,
    definition: selectDefinition
  },
  {
    component: Carousel,
    definition: carouselDefinition,
    
  },
]);

// src/registeredComponents.ts

import { defineComponents } from "@contentful/experiences-sdk-react";
import { Button } from "./components/Button/Button";
import { buttonDefinition } from "./components/Button/buttonDefinition";
import { ComponentCard } from "./components/ComponentCard/ComponentCard";
import { componentCardDefinition } from "./components/ComponentCard/componentCardDefinition";

defineComponents([
  {
    component: Button,
    definition: buttonDefinition, 
  },
  {
    component: ComponentCard,
    definition: componentCardDefinition
  }
]);

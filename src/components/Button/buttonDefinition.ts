
export const buttonDefinition = {
  id: "button",
  name: "Button",
  category: "Custom Components",
  variables: {
    text: {
      displayName: "Text",
      type: "Text",
      defaultValue: "Click me!",
    },
    variant: {
        displayName: "Variant",
        type: "Text",
        defaultValue: "default",
        group: "style",
        validations : {
            in: [
                { value: "default", displayName: "Default" },
                { value: "secondary", displayName: "Secondary" },
                { value: "destructive", displayName: "Destructive" },
                { value: "outline", displayName: "Outline" },
                { value: "ghost", displayName: "Ghost" },
                { value: "link", displayName: "Link" },
            ]
        }
    },
    size: {
        displayName: "Size",
        type: "Text",
        defaultValue: "md",
        group: "style",
        validations : {
            in: [
                { value: "sm", displayName: "Small" },
                { value: "md", displayName: "Medium" },
                { value: "lg", displayName: "Large" },
                { value: "xl", displayName: "Extra Large" },
            ]
        }
    }
  },
};
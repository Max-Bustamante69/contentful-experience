
export const toggleDefinition = {
  id: "toggle",
  name: "Toggle",
  category: "Custom Components",
  variables: {
    variant: {
        displayName: "Variant",
        type: "Text",
        defaultValue: "default",
        group: "style",
        validations : {
            in: [
                { value: "default", displayName: "Default" },
                { value: "block", displayName: "Block" },
                { value: "sound", displayName: "Sound" },
            ]
        }
    },
  },
};
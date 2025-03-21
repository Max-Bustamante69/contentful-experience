export const carouselDefinition = {
  id: "carousel",
  name: "Carousel",
  category: "Custom Components",
  children: true,
  
  
  variables: {
    isContentful: {
        displayName: "Is Contentful",
        type: "Boolean",
        defaultValue: false,
        
    },
    autoplay: {
      displayName: "Autoplay",
      type: "Boolean",
      defaultValue: false,
      
    },
    interval: {
      displayName: "Interval (ms)",
      type: "Number",
      defaultValue: 5000,
      
      validations: {
        in: [
            {value: 5000, displayName: "5s"},
            {value: 10000, displayName: "10s"},
            {value: 15000, displayName: "15s"},
        ]
      },
    },
  },
};

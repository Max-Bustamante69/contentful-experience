// src/components/Button.tsx
import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { classConstructor } from "../../utils/classConstructor";



const buttonVariants = cva(
  
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors transition duration-200ms"
  , { 
    variants: {
      variant: {
        default: "bg-plain-primary text-plain-background border border-transparent hover:opacity-70",
        secondary: "bg-plain-secondary text-plain-background border border-transparent hover:opacity-70",
        destructive: "bg-destructive text-destructiveForeground border-2 border-red-900 hover:opacity-70",
        outline: "bg-transparent text-plain-primary border border-plain-primary hover:bg-plain-primary hover:text-plain-background",
        ghost: "bg-transparent text-plain-primary border border-transparent hover:shadow-lg",
        link: "bg-transparent text-plain-primary border border-transparent hover:underline",
    },
    size : {
      sm: "px-2.5 py-1.5",
      md: "px-3 py-2",
      lg: "px-4 py-2.5",
      xl: "px-5 py-3",
    },
    defaultVariants : {
      variant: "default",
      size: "md"
    }
  },
}
)


interface ButtonComponentProps extends VariantProps<typeof buttonVariants> {
  text: string;
}

const Button: React.FC<ButtonComponentProps> = ({
  text,
  variant = "default",
  size = "md",
  ...experienceProps
}) => {
  return (
    <button
      {...experienceProps}
      className={classConstructor(buttonVariants({ variant, size }))}
    >
      {text}
    </button>
  );
};

export { Button, buttonVariants };


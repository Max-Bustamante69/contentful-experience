// src/components/Button.tsx
import React from "react";

interface CardComponentProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ComponentCard: React.FC<CardComponentProps> = ({ title, description, children, ...experienceProps }) => {
  return (
    <div
      {...experienceProps}
      id='component-card'
      className="flex flex-col gap-2 p-4 bg-primary rounded border border-neutral-200 shadow-md items-start w-full"
    >
      <h2 className="font-bold text-3xl text-black">{title}</h2>
      <p className="text-neutral-500">{description}</p>
      {children}
    </div>
  );
};

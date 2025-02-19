// src/components/Button.tsx
import React from "react";

interface TabComponentProps {
  options: string;
}

export const Tab: React.FC<TabComponentProps> = ({ options, ...experienceProps }) => {

    const tabs = options.split(',');
    const [activeTab, setActiveTab] = React.useState(tabs[0]);

    

  return (
    <div
      {...experienceProps}
      id='component-card'
      className="flex flex-col gap-2 p-4 bg-white rounded  items-start "
    >
      <div className="flex flex-row bg-neutral-200 p-1 rounded-sm">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded font-semibold font-sans capitalize cursor-pointer transition-all duration-200 ${
              activeTab === tab ? "bg-white" : "bg-neutral-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} 
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div   key={index} hidden={activeTab !== tab}>
            <span className="font-semibold ">Active tab: </span>{tab.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

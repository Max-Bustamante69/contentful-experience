// src/components/Button.tsx
import { useState } from "react";
import more from "../../assets/select/expand_more_24dp_E8EAED.svg";

interface SelectComponentProps {
  label: string;
  options: string;
}


export const Select: React.FC<SelectComponentProps> = ({ label, options, ...experienceProps }) => {


    const selectOptions = options.split(',');
    const [selectedOption, setSelectedOption] = useState('');
    const [focused, setFocused] = useState(false);


    return (
        <div
            {...experienceProps}
            id='component-card'
            className="flex flex-col gap-2 p-4 bg-white rounded  items-start "
        >
            <label className="font-semibold">{label}</label>
            <div className="relative w-full px-4 py-2 rounded border border-neutral-200"
            >
                <button
                    className="w-full rounded font-semibold font-sans capitalize cursor-pointer transition-all duration-200 bg-white text-left flex justify-between"
                    onClick={() => setFocused(!focused)}
                >
                    {selectedOption || "Select an Option"}
                    <img src={more} alt = "more" className="ml-auto" />
                </button>
            
                    <div className={`absolute w-full bg-white border border-neutral-200 rounded mt-1 ease transition-all duration-300 left-0  top-12 ${focused ? "opacity-100 z-10" : "opacity-0 -z-10"}`}>
                        {selectOptions.map((option, index) => (
                            <button
                                key={index}
                                className={ `w-full px-4 py-2 rounded font-semibold font-sans capitalize cursor-pointer transition-all duration-200 hover:bg-neutral-100 $`}
                                onClick={() => {
                                    setSelectedOption(option);
                                    setFocused(false);
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

       
            </div>
            <div className="mt-4">
                <p className="font-semibold">Selected Option: </p>
                <p>{selectedOption}</p>
            </div>
   
   
        </div>
        );

};

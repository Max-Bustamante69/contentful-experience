import React from "react";

import dark from "../../assets/toggle/theme/dark_mode_24dp_E8EAED.svg";
import light from "../../assets/toggle/theme/light_mode_24dp_E8EAED.svg";
import lockOpen from "../../assets/toggle/block/lock_open_24dp_E8EAED.svg";
import lockOutline from "../../assets/toggle/block/lock_outline_24dp_E8EAED.svg";
import volumeUp from "../../assets/toggle/sound/volume_up_24dp_E8EAED.svg";
import volumeOff from "../../assets/toggle/sound/volume_off_24dp_E8EAED.svg";




const toggleVariants = {
  default: {
    on: dark,
    off: light,
  },
  block: {
    on: lockOpen,
    off: lockOutline,
  },
  sound: {
    on: volumeUp,
    off: volumeOff,
  },
};

type VariantKeys = keyof typeof toggleVariants;
interface ToggleComponentProps {
  variant?: VariantKeys;
}

export const Toggle: React.FC<ToggleComponentProps> = ({ variant = "default" }) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded items-start">
      <button
        className={`px-4 py-2 rounded font-semibold font-sans capitalize cursor-pointer transition-all duration-200 ${
          toggle ? "bg-black" : "bg-neutral-700"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <img  src={toggle ? toggleVariants[variant].on : toggleVariants[variant].off} alt="toggle icon" />
      </button>
    </div>
  );
};

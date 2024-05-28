import { useState } from "react";

import Icon from "@/lib/components/ui/Icon/Icon";
import Tooltip from "@/lib/components/ui/Tooltip/Tooltip";

type ThoughtsButtonProps = {
  text: string;
  size: string;
};

export const ThoughtsButton = ({ text, size }: ThoughtsButtonProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (

      <Tooltip tooltip={text}>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon name="question" size={size} color={isHovered ? "primary" : "black"} />
        </button>
      </Tooltip>
  );
};
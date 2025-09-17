"use client";

import { Button, Tooltip } from "antd";
import type { ButtonProps } from "antd";
import { forwardRef, type ReactNode } from "react";

export interface CustomButtonProps extends ButtonProps {
  tooltip?: ReactNode;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, tooltip, ...rest }, ref) => {
    const buttonNode = (
      <Button ref={ref} {...rest}>
        {children}
      </Button>
    );

    return tooltip ? (
      <Tooltip title={tooltip}>{buttonNode}</Tooltip>
    ) : (
      buttonNode
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;

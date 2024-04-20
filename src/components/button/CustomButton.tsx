import React, { useRef } from "react";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

interface CustomButtonProps {
  label: any;
  isLoading?: boolean;
  onChange: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  isLoading = false,
  onChange,
}) => {
  // if celebrate needed use this.
  // const handleConfetti = () => {
  //   confetti({
  //     particleCount: 100,
  //     spread: 70,
  //     origin: { x: 0.5, y: 0.5 },
  //   });
  // };
  const buttonRef = useRef(null);
  return (
    <Button
      ref={buttonRef}
      disableRipple
      size="lg"
      color="primary"
      isLoading={isLoading}
      onPress={onChange}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

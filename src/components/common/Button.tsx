import React from "react";

interface CommonButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  label,
  onClick,
  className = "",
  ...props
}) => (
  <button
    onClick={onClick}
    className={`bg-custom-btn-gradient ${className}`}
    {...props}
  >
    {label}
  </button>
);

export default CommonButton;

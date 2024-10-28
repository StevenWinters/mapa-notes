import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <button
      className={`btn flex justify--center align--center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

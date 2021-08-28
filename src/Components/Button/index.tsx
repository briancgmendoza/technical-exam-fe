type Props = {
  type: "button" | "submit" | "reset";
  className: string;
  onClick?: (e: React.SyntheticEvent) => void | any;
  children?: JSX.Element | string;
};

const Button = ({ onClick, type, className, children }: Props) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;

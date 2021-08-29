type Props = {
  /* Please note I didn't use reset here because I'm not going to need it 
  since I'm refreshing the page using window.location.reload(); for every 
  successful form submission */
  type: "button" | "submit" | "reset";
  className: string;
  name?: string;
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

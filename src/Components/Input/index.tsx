type Props = {
  type: string;
  className?: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  className,
  placeholder,
  required,
  value,
  onChange,
}: Props) => {
  return (
    <input
      className={className}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

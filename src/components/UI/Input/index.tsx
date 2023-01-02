export const Input = ({
    type = "text",
    value = "",
    placeholder = "Choose your destiny",
    onChange = () => {},
}: {
    type: string,
    value: string,
    placeholder: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}) => <input onChange={onChange} type={type} value={value} placeholder={placeholder} />;

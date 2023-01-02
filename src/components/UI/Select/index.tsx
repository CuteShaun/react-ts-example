export const Select = ({
    options = [],
    placeholder = "",
    onChange = () => {},
}: {
    options: Array<HTMLOptionElement | String>,
    placeholder: string,
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void
}) => (
    <select onChange={onChange}>
        <option disabled selected>
           {placeholder}
        </option>
        {options.map((item) => (
            <option key={item as string} value={item as string}>{`${item}`}</option>
        ))}
    </select>
);

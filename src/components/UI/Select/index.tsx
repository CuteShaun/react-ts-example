import './Select.scss';

export const Select = ({
    options = [],
    placeholder = "",
    onChange = () => {},
}: {
    options: Array<HTMLOptionElement | String>,
    placeholder: string,
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void
}) => (

    <div className="select">
    <select id="standard-select" onChange={onChange} defaultValue={placeholder}>
        <option disabled value={placeholder}>
           {placeholder}
        </option>
        {options.map((item) => (
            <option key={item as string} value={item as string}>{`${item}`}</option>
        ))}
    </select>
    </div>
);

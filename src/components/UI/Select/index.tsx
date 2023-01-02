import React from "react";

export const Select = ({ options = [] }: {options: Array<HTMLOptionElement | String>}) => (
    <select>
        {options.map((item) => (
            <option value={item as string}>{`${item}`}</option>
        ))}
    </select>
);

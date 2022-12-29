import React from "react";

export const Input = ({ type = "text", value = "", placeholder = "Choose your destiny" }) => (
    <input type={type} value={value} placeholder={placeholder} />
);

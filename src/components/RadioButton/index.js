import React from "react";
import {Radio} from './style';

export default function RadioButton({ id, onClick, value, isSelected, label }) {
    return (
        <Radio>{id + 1}.
            <input id={id} onChange={onClick} value={value} type="radio" checked={isSelected} />
            <label htmlFor={id}>{label}</label>
        </Radio>
    );
}
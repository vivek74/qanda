import React from 'react';
import { CardComponent } from './style';

export default function Card({ children, borderColor }) {
    return (
        <CardComponent>
            {children}
        </CardComponent>
    )
}
import React from 'react';
import tariffStyles from './tariffStyles';
import "./Tariff.css";

const Tariff = ({ name, price, speed, isSelected, onSelect }) => {

    const style = {
        ...tariffStyles.tariff,
        ...(isSelected ? tariffStyles.selected : tariffStyles.unselected),
        ...(price === 550 && tariffStyles.specialBackground),
    }


    return (
        <div style={style} onClick={onSelect} >
            <h2>{name}</h2>
            <p>{price}р</p>
            <p>{speed}</p>
            <p>Объем включенного трафика не ограничен</p>
        </div >

    );
};

export default Tariff;

import React from 'react';
import NumberFormat from 'react-number-format';

export const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
};

export const formatPercentage = (value) => {
    return value.toLocaleString('en-US', {
        style: 'percent',
        minimumFractionDigits: 2,
    });
};

export const CurrencyFormatInput = (props) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="$"
        />
    );
};

const getRandomIndex = (list) => Math.floor(Math.random() * list.length);

const getRandomArbitrary = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(4));

export const eventWillHappenWithProbability = () => {
    const notRandomBool = [false, false, false, false, true];
    return notRandomBool[getRandomIndex(notRandomBool)];
};

export const generateRegularMonthMarket = () => {
    return {
        inflation: getRandomArbitrary(-0.002, 0.015),
        interestRate: getRandomArbitrary(-0.002, 0.015),
        stockMarketPoints: getRandomArbitrary(-0.010, 0.035),
        rareMaterial: getRandomArbitrary(-0.035, 0.010),
    };
};

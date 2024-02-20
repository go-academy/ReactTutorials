import React from 'react';
import AlertButton from './AlertButton';

export default function AlertBox() {
    function handleAlert(message) {
        alert(message);
    }


    return (
        <AlertButton onAlert={handleAlert}/>
    )
}
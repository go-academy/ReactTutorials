import React from 'react';

export default function AlertButton({onAlert}) {
    return (
        <button onClick={()=> {
            onAlert('This message is getting passed from children component');
        }}> Alert Me</button>
    )
}
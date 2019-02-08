import React from 'react';
import Homepage from './Homepage'

const account = (props) => (
    <div>
    <h1> Hello {props.name}</h1>
    <Homepage/>
    </div>
)

export default account;
import React from 'react';
import {useState} from 'react';
import './Test.css';
// don't change the Component name "App"


export default function Test() {
    const [warning , setWarning] = useState(false);

    const proceedClickHandler = () =>
    {
        setWarning(false);
    };
    
    let warningContent = <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick = {proceedClickHandler}>Proceed</button>
        </div>
        
    const deleteButtonClickHandler = () => {
        setWarning(true);
    }
    
    
    
    return (
      <div>
        {warning && warningContent}
        <button onClick={deleteButtonClickHandler}>Delete</button>
      </div>    
    );
}
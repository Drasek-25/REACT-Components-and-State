import React, { useState } from 'react';

const ButtonInputExample = () => {

  const [value, setValue] = useState('');
  const [entries, setEntries] = useState([]);


  const onChange = event => {
    setValue(event.target.value);
  }

  const buttonClicked = () => {
    /**
     *  Here we are using spread operator to copy our entries state variabke
     *  (RULE: no direct mutation of state)
     *  along with adding our current value into our 'newEntries'
     */
    let newEntries = [...entries, value];

    /**
     * Set 'entries' to 'newEntries' now which has the effect of adding our input value.
     * Clear the input box by changing value into an empty string.
     */

    setEntries(newEntries);
    setValue('');

  }

  return (
    <div>
      <div>
        {/* This is code for us to see our array being built.
              '.join' converts an array of strings into one string */}
        {entries.join(', ')}
      </div>
      <div>
        <input value={value} onChange={onChange} />
        <button className="btn btn-primary" onClick={buttonClicked}>Enter</button>
      </div>
    </div>
  );
}


export default ButtonInputExample;

/**
 * Exer. 4
 *
 * > Make another array in your state
 * > Make an input and button that when something is entered,
 *   the input value is pushed into your new array
 * > Render this array on the screen using '.join(' + ')
 *
 */


/**
 * After Exercise 4, uncomment <MapExample /> in the 'return' function
 * in /src/App.js
 * Then proceed to /src/sample-components/mapExample.js
 *
 * There we will talk about dynamically rendering an array of data.
 *
 */
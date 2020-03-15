import React, { useState } from 'react';

const InputExample = () => {

  const initialState = {
    value: ''
  }
  const [state, setState] = useState(initialState);

  /**
   * 'onChange' function can be called anything
   */
  const onChange = event => {
    /**
     * Step 1:
     *
     * Make sure we have React Devtools installed in Chrome by now
     * > Inspect what 'event.target.value' is
     * > What is 'setState'?
     * > Can we just change 'state' directly?
     * > Using the Devtools, what happens to 'state' as you type into the input?
     *
     */
    setState({ value: event.target.value });
  }


  /**
   * Step 2:
   *
   * 'Two-way Binding'
   *
   * > Try removing 'value' and see if you can type into your input box
   * > Try removing 'onChange' and see if your input box behaves normally
   * > Keep React Devtools open to see if your 'state' is changing accordingly
   */
  return (
    <>
      <h2>Input Value: {state.value}</h2>
      <input
        value={state.value}
        onChange={onChange}
      />
    </>
  );
}


/**
   * Exercise 3:
   * > Try to create a h2 tag to display 'state'
   * > See if it updates when you type
   *
   */

export default InputExample;

/**
 * After Exercise 3, uncomment <ButtonInputExample /> in the 'return' function
 * in /src/App.js
 * Then proceed to /src/sample-components/buttonInputExample.js
 *
 * There we will talk about combining click behavior with inputs in React.
 *
 */
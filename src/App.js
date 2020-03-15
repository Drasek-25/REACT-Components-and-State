import React, { useState } from 'react';
import './App.css';

/**
 * Plan for this section:
 *
 * > explore import & export statements (ES6 Modules)
 * > see how state can store component data for us
 * > presentational components vs container components
 *
 */

/**
 * My sample import
 *
 * Note the omission of the '.js' file extension at the end of my
 * import statement.
 *
*/
import ImportExample from './sample-components/importExample';
import StateExample from './sample-components/stateExample';
import InputExample from './sample-components/inputExample';
import ButtonInputExample from './sample-components/buttonInputExample';
import MapExample from './sample-components/mapExample';

/**
 * Exer. 1
 *
 * > Create a new folder called "components" in your /src folder.
 * > Create a new file in your folder /src/components called header.js
 * > In header.js create a React Component that can render a title
 * > Import and use <Header /> in your App 'render' function below
 *
 * Your folder structure should look like this when you are finished:
 *
 *    src
 *    ├── App.css
 *    ├── App.js
 *    ├── components
 *    │   └── header.js
 *    ├── index.js
 *    └── sample-components
 *        └── example.js
 *
 * ( order is not important, but folder hierarchy is )
 *
 */

const App = () => {
  const [generals, setGenerals] = useState(['Grant', 'Lee', 'Sherman', 'Meade', 'McClellan'])
  const [input, setInput] = useState('Add new names here')
  // These are currently empty components, we will fill them out later
  return (
    <div>
      <header />
      {/* <ImportExample /> */}
      <StateExample />
      <InputExample />
      <ButtonInputExample />
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type='submit'
        onClick={() => setGenerals([...generals, input])}
      >Enter</button>
      <MapExample data={generals} />
    </div>
  );
}

export default App;


/**
 * After Exercise 1, uncomment <StateExample /> in your 'return' function
 * Then proceed to /src/sample-components/stateExample.js
 *
 * There we will talk about 'state' in React.
 *
 */
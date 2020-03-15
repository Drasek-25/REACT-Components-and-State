import React, { useState } from 'react';
import Header from '../components/header'

/**
 * Step 1:
 *
 * First thing we will want to do is import your
 * /src/components/header.js component into this file
 *
 * NOTE
 * > header.js must have a prop to allow us to dynamically render a string
 */

const StateExample = () => {
  /**
  /**
   * Exer. 2
   *
   * > Create a state attribute that is a string
   * > Put <Header /> into your 'return' function
   * > Now get your new state attribute to render on the page using <Header />
   *
   */

  const [pageTitle, setPageTitle] = useState('App Header')

  return (
    <div><Header pageTitle={pageTitle} /></div>
  );
}

export default StateExample;

/**
 * After Exercise 2, uncomment <InputExample /> in the 'return' function
 * in /src/App.js
 * Then proceed to /src/sample-components/inputExample.js
 *
 * There we will talk about 'two-way binding' in 'React'.
 *
 */
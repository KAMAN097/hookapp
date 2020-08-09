import React from 'react';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
// import Accordion from "./components/Accordion";
// import Search from './components/Search';

// const items = [
//   {
//     title: 'what is react?',
//     content: 'React is a front-end framework',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a famous JS library amoung enginners',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'Use React to reach',
//   },
// ];

const App = () => {
  const options = [
    {
      title: 'This Is Red',
      description: 'Red Color',
    },
    {
      title: 'This Is Blue',
      description: 'Blue Color',
    },
    {
      title: 'This Is Orange',
      description: 'Orange Color',
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/*<Accordion items={items} /> 
      <Search />*/}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;

import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'what is react?',
    content: 'React is a front-end framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a famous JS library amoung enginners',
  },
  {
    title: 'How do you use React?',
    content: 'Use React to reach',
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;

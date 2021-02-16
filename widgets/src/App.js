import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
      title: 'what is react?',
      content: 'React es un frontend papá'
    },
    {
      title: 'Why use react?',
      content: 'React is a favorite JS library que va como pigna'
    },
    {
      title: 'How do you use react?',
      content: 'You use react by creating components'
   }
];


export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
    );

};
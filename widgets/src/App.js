import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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


const options = [
{
  label: 'The Color Red',
  value: 'red'
},
{
  label: 'The Color Green',
  value: 'green'
},
{
  label: 'A shade of Blue',
  value: 'blue'
}
];


export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);


  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
       { showDropdown ?
       <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
      /> : null
      }
    </div>
    );

};
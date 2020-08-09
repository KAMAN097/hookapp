import React from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const dropItems = options.map((option) => {
    return (
      <div
        key={option.title}
        className='item'
        selected={selected}
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.description}
      </div>
    );
  });

  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Select a color</label>
        <div className='ui selection dropdown visible active'>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.title}</div>
          <div className='menu visible transition'>{dropItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

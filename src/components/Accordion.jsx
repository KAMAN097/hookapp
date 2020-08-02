import React, { Fragment } from 'react';

const Accordion = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <Fragment id={item.title}>
        <div class='title active'>
          <i class='dropdown icon'></i>
          {item.title}
        </div>
        <div class='content active'>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });
  return <div class='ui styled accordion'>{renderItems}</div>;
};

export default Accordion;

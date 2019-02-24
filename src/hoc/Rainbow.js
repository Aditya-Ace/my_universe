import React from 'react';

const Rainbow = WrappedComponent => {
  const colours = [
    'red',
    'green',
    'blue',
    'black',
    'violet',
    'yellow',
    'orange'
  ];
  const randomColours = colours[Math.floor(Math.random() * 6)];
  const className = randomColours + '-text';

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;

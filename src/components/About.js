import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        pariatur velit officiis. Harum soluta nostrum porro molestias sint,
        sequi cumque totam inventore, accusantium tempore, autem asperiores
        alias debitis ducimus repellendus?
      </p>
    </div>
  );
};

export default Rainbow(About);

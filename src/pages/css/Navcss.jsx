import React from 'react';
import SideItem from '../../components/SideItem.jsx';

const Navcss = () => {
  return (
    <div className="h-full fixed bottom-0 overflow-x-hidden top-20 m-1 px-2 md:flex md:flex-col mt-2">
      <SideItem
        text={'basic'}
        array={[
          'syntax',
          'comment',
          'color',
          'unit',
          'styles',
          'inheritence',
          'boxmodel',
          'specificity',
          'pseudoclass',
        ]}
      />
      <SideItem text={'position'} array={['static', 'float', 'flex', 'grid']} />
      <SideItem text={'advance'} array={['static', 'float', 'flex', 'grid']} />
      <SideItem
        text={'animation'}
        array={['static', 'float', 'flex', 'grid']}
      />

      {/* <div className="flex justify-between">
        <a href="#display">layout&position</a>
        <button>+</button>
      </div>
      <div className="flex justify-between">
        <a href="#advance">advance</a>
        <button>+</button>
      </div>
      <div className="flex justify-between">
        <a href="#animation">animation</a>
        <button>+</button>
      </div> */}
    </div>
  );
};

export default Navcss;

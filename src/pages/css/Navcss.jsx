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
          'inheritance',
          'boxmodel',
          'specificity',
          'pseudoclass',
        ]}
      />
      <SideItem
        text={'posilayout'}
        array={[
          'normalflow',
          'float',
          'flex',
          'inlineflex',
          'grid',
          'position',
          'zindex',
          'mulColL',
          'overflow',
        ]}
      />
      <SideItem
        text={'advance'}
        array={[
          'custom',
          'calc',
          'advanceSel',
          'pseudoel',
          'advancemar',
          'browsersup',
          'resetnor',
          'featurequ',
          'mediaqu',
          'customfont',
        ]}
      />
      <SideItem
        text={'animation'}
        array={['transition', 'animation.', 'transform ', '3danimation']}
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

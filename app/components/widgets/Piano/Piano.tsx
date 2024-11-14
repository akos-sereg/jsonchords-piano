import * as React from 'react';
import { useEffect } from 'react';
import { getScreenRatio } from '../../../packages/utils/screenUtils';
import imgOctave from '../../../images/octav.png';

const Piano = () => {

    let ratio = getScreenRatio();

    const octaves = ['O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7'];

    return (
       <div>
           {octaves.map((id) => <img key={id} src={imgOctave} width={619 * ratio} />)}
       </div>
   );

};

export default Piano;

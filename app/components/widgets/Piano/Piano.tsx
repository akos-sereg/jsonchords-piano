import * as React from 'react';
import { useEffect } from 'react';
import { getScreenRatio } from '../../../packages/utils/screenUtils';
import imgOctave from '../../../images/octav.png';
import pressed4 from '../../../images/pressed-4.png';
import {
    noteMap,
    noteOffset,
    pressedImageOriginalHeight,
    octaveImageOriginalWidth,
    indexedNotes,
    noteOriginalWidth,
    halfNoteOffsets,
} from './const';

interface PianoProps {
    displayNotes: string[];
}

const Piano = ({ displayNotes }: PianoProps) => {
    let ratio = getScreenRatio();

    const octaves = ['O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7'];
    const displayedNotes = displayNotes.map((note) => {
        const fragments = note.split('-');
        const octavNumber = Number(fragments[0].replace(/O/, ''));
        const noteImage: any = noteMap[fragments[1]];
        if (fragments[1].includes('#')) {
           const offsetX = (ratio * octaveImageOriginalWidth) * (octavNumber - 1) + halfNoteOffsets[fragments[1].replace('#', '')] * ratio;
           return (
               <img
                   src={pressed4}
                   width={69 * ratio}
                   style={{ position: 'absolute', left: offsetX }}
               />);
        } else {
            const offsetX = (ratio * octaveImageOriginalWidth) * (octavNumber - 1)
                + (indexedNotes.indexOf(fragments[1]) * (noteOriginalWidth * ratio))
                + noteOffset[fragments[1]] * ratio;
            return (
                <img
                    src={noteImage}
                    height={pressedImageOriginalHeight * ratio}
                    style={{ position: 'absolute', left: offsetX, top: 4 * ratio }}
                />);
        }
    });

    return (
       <div style={{ position: 'relative' }}>
           {displayedNotes}
           <div style={{ width: 'fit-content', borderRight: 'solid 2px #000000' }}>
                {octaves.map((id, index) => <img key={id} src={imgOctave} width={619 * ratio} />)}
           </div>
       </div>
   );

};

export default Piano;

import pressed1 from '../../../images/pressed-1.png';
import pressed2 from '../../../images/pressed-2.png';
import pressed3 from '../../../images/pressed-3.png';
import pressed4 from '../../../images/pressed-4.png';

export const octaveImageOriginalWidth = 619;
export const pressedImageOriginalHeight = 586;
export const noteOriginalWidth = 88;

export const indexedNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'H', 'C'];

export const noteMap: any = {
    'C': pressed3,
    'D': pressed1,
    'E': pressed2,
    'F': pressed3,
    'G': pressed1,
    'A': pressed1,
    'H': pressed2,
};

export const noteOffset: any = {
    'C': 5,
    'D': 6,
    'E': 6,
    'F': 6,
    'G': 7,
    'A': 7,
    'H': 7,
};

export const halfNoteOffsets: any = {
    'C': 57,
    'D': 145,
    'F': 322,
    'G': 410,
    'A': 499,
}
interface UsedPianoNote {
    key: string;
    value: any;
};

const usedNotes: UsedPianoNote[] = [];

const playSound = (pianoNote: string) => {
    const key = `/static/mp3/${pianoNote.replace('#', '%23')}.mp3`;

    let audio = usedNotes.find((usedNote) => usedNote.key === pianoNote);
    if (!audio) {
        const sound = new Audio();
        const src1  = document.createElement("source");
        src1.type = "audio/mp3";
        src1.src  = key;
        sound.appendChild(src1);
        usedNotes.push({ key, value: audio});
        sound.play();
        return;
    }

    audio.value.play();
};

export { playSound };

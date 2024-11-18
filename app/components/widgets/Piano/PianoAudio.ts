const audioList: any[] = [];

const playSound = (pianoNote: string) => {
    var snd1  = new Audio();
    var src1  = document.createElement("source");
    src1.type = "audio/mp3";
    src1.src  = `/static/mp3/${pianoNote.replace('#', '%23')}.mp3`;
    snd1.appendChild(src1);
    snd1.play();
    audioList.push(snd1);
};

export { playSound };

const getFullLengthMs = (data: any) => {
    if (!data) {
        return 0;
    }

    let length = 0;
    for (const episode of data.episodes) {
        for (const chordItem of episode.chords) {
            length += chordItem.interval;
        }
    }

    return length;
};

const getLengthMsUntil = (data: any, episodeIndex: number, chordIndex: number) => {
    if (!data) {
        return 0;
    }

    let length = 0;
    for (let i=0; i!=data.episodes.length; i++) {
        for (let j=0; j!=data.episodes[i].chords.length; j++) {
            length += data.episodes[i].chords[j].interval;

            if (episodeIndex === i && chordIndex === j) {
                return length;
            }
        }
    }

    return 0;
};

export { getFullLengthMs, getLengthMsUntil };
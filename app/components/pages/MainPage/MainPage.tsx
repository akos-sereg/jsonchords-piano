import * as React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useState, useContext, useMemo, useEffect } from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import JsonChordsText from '../../widgets/JsonChordsText/JsonChordsText';
import JsonChordsTextContext from '../../widgets/JsonChordsText/JsonChordsTextContext';
import PlayingContext from '../../widgets/PlayControls/PlayingContext';
import styles from './style.scss';
import { indexedHalfNotes, indexedNotes } from '../../widgets/Piano/const';
import { playSound } from '../../widgets/Piano/PianoAudio';

const sleep = async (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), duration)
  })
}

const MainPage = () => {
  const { data } = useContext(JsonChordsTextContext);
  const [isInitializing, setInitializing] = useState(false);
  const [isInitRequested, setInitRequested] = useState(false);
  const { playingEpisode, playingChord, isPlaying } = useContext(PlayingContext);

  const arePianoNotesCached = localStorage.getItem('arePianoNotesCached');
  useEffect(() => {
    if (arePianoNotesCached && JSON.parse(arePianoNotesCached) === true) {
      return;
    }
    setInitRequested(true);
  }, [arePianoNotesCached]);

  useEffect(() => {
    if (!isInitializing) {
      return;
    }

    const initCache = async () => {
      for (let octav = 1; octav != 8; octav++) {
        for (let fullNote = 0; fullNote != indexedNotes.length; fullNote++) {
          playSound(`O${octav}-${indexedNotes[fullNote]}`);
          await sleep(100);
        }
        for (let halfNote = 0; halfNote != indexedHalfNotes.length; halfNote++) {
          playSound(`O${octav}-${indexedHalfNotes[halfNote]}`);
          await sleep(100);
        }
      }

      setInitializing(false);
      setInitRequested(false);
      localStorage.setItem('arePianoNotesCached', 'true');
    };
    initCache();
  }, [isInitializing]);

  const displayedNotes = useMemo(() => {
    try {
      return data ? data.episodes[playingEpisode].chords[playingChord].chord : [];
    } catch (error) {
      return [];
    }
  }, [data, playingEpisode, playingChord]);

  return (
    <div>
      <BrowserView>
        {!arePianoNotesCached && isInitRequested && (
          <div className="alert alert-info" role="alert">
            <p>
              Before we get started, piano notes need to be downloaded and cached on your browser.
              <br />
              Click initialize button below. This is a one-time operation, so you dont need to do
              this again in the future.
            </p>
            <br />
            <button className="btn btn-primary" onClick={() => setInitializing(true)}>
              Initialize
            </button>

            {isInitializing && (
              <p>
                <br />
                Initializing: playing all notes on the piano, so they are downloaded and cached on
                your computer.
              </p>
            )}
          </div>
        )}
        <div>
          <Piano displayNotes={displayedNotes} />
          <div className={styles.codeAndEpisodes}>
            <JsonChordsText />
            <div className={styles.episodes}>
              <PlayControls disabled={!arePianoNotesCached} />
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>Mobile is not supported</MobileView>
    </div>
  );
};

export default MainPage;

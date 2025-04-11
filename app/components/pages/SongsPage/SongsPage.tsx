import * as React from 'react';
import { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PlayingContext from '../../widgets/PlayControls/PlayingContext';
import styles from './style.scss';

interface Song {
  title: string;
  file: string;
  coverImage: string;
  type: 'full' | 'riff';
}

const Songs: Song[] = [
  {
    title: 'Jurassic Park',
    file: 'jurassic-park.json',
    coverImage: 'jurassic-park.png',
    type: 'full'
  },
  {
    title: 'Peppa Pig',
    file: 'peppa-pig.json',
    coverImage: 'peppa-pig.jpg',
    type: 'riff'
  },
  {
    title: 'Mad World',
    file: 'mad-world.json',
    coverImage: 'mad-world.jpg',
    type: 'full'
  },
  {
    title: 'Through My Words',
    file: 'through-my-words.json',
    coverImage: 'scenes-from-a-memory.jpg',
    type: 'full'
  },
  {
    title: 'Star Wars (basic)',
    file: 'star-wars.json',
    coverImage: 'star-wars.png',
    type: 'riff'
  },
  {
    title: 'Star Wars',
    file: 'star-wars-advanced.json',
    coverImage: 'star-wars.png',
    type: 'riff'
  },
  {
    title: 'Clocks',
    file: 'clocks.json',
    coverImage: 'clocks.png',
    type: 'riff'
  },
  {
    title: 'Pyramid Song',
    file: 'pyramid-song.json',
    coverImage: 'pyramid-song.png',
    type: 'riff'
  },
  {
    title: 'Teardrop',
    file: 'teardrop.json',
    coverImage: 'mezannine.jpg',
    type: 'full'
  },
  {
    title: 'Nobody Home',
    file: 'nobody-home.json',
    coverImage: 'the-wall.jpg',
    type: 'full'
  },
  {
    title: 'The great gig in the sky',
    file: 'the-great-gig-in-the-sky.json',
    coverImage: 'dark-side-of-the-moon.jpg',
    type: 'full'
  },
  {
    title: 'The Scientist',
    file: 'the-scientist.json',
    coverImage: 'the-scientist.png',
    type: 'full'
  },
  {
    title: 'Bohemian Rhapsody',
    file: 'bohemian-rhapsody.json',
    coverImage: 'freddy.png',
    type: 'riff'
  },
  {
    title: 'Imagine',
    file: 'imagine.json',
    coverImage: 'imagine.png',
    type: 'full'
  },
  {
    title: 'Inception',
    file: 'inception.json',
    coverImage: 'inception.png',
    type: 'full'
  }
];

const SongsPage = () => {
  const { setPlaying, setPlayingEpisode, setPlayingChord } = useContext(PlayingContext);
  const history = useHistory();

  const handleSelectSong = useCallback(async (e: any, song: Song) => {
    e.preventDefault();

    const response = await fetch(`/static/sheets/${song.type}/${song.file}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // const json = await response.json();
    localStorage.setItem('most-recent-data', await response.text());
    setPlaying(false);
    setPlayingEpisode(0);
    setPlayingChord(0);
    history.push('/app');
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {Songs.map((song) => (
          <div
            key={`${song.type}/${song.file}`}
            className={`panel panel-default ${styles.card}`}
            onClick={(event) => handleSelectSong(event, song)}
          >
            <div className="panel-body">
              <div className={styles.centered}>
                <img height="170" src={`/static/images/${song.coverImage}`} />
              </div>
              <div className={styles.centered}>
                <div className="caption">
                  <h4>{song.title}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsPage;

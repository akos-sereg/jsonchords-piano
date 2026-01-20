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
  format: 'json' | 'midi';
}

const Songs: Song[] = [
  {
    title: 'Jurassic Park',
    file: 'jurassic-park.json',
    coverImage: 'jurassic-park.png',
    type: 'full',
    format: 'json'
  },
  {
    title: 'Peppa Pig',
    file: 'peppa-pig.json',
    coverImage: 'peppa-pig.jpg',
    type: 'riff',
    format: 'json'
  },
  {
    title: 'Mad World',
    file: 'mad-world.json',
    coverImage: 'mad-world.jpg',
    type: 'full',
    format: 'json'
  },
  {
    title: 'Through My Words',
    file: 'through-my-words.json',
    coverImage: 'scenes-from-a-memory.jpg',
    type: 'full',
    format: 'json'
  },
  {
    title: 'Fatal Tragedy',
    file: 'fatal-tragedy.json',
    coverImage: 'scenes-from-a-memory.jpg',
    type: 'full',
    format: 'json'
},
  {
    title: 'Star Wars (basic)',
    file: 'star-wars.json',
    coverImage: 'star-wars.png',
    type: 'riff',
    format: 'json'
  },
  {
    title: 'Star Wars',
    file: 'star-wars-advanced.json',
    coverImage: 'star-wars.png',
    type: 'riff',
    format: 'json'
  },
  {
    title: 'Clocks',
    file: 'clocks.json',
    coverImage: 'clocks.png',
    type: 'riff',
    format: 'json'
  },
  {
    title: 'Pyramid Song',
    file: 'pyramid-song.json',
    coverImage: 'pyramid-song.png',
    type: 'riff',
    format: 'json'
  },
  {
    title: 'Teardrop',
    file: 'teardrop.json',
    coverImage: 'mezannine.jpg',
    type: 'full',
    format: 'json'
  },
  {
    title: 'Nobody Home',
    file: 'nobody-home.json',
    coverImage: 'the-wall.jpg',
    type: 'full',
    format: 'json'
  },
  {
    title: 'The great gig in the sky',
    file: 'the-great-gig-in-the-sky.json',
    coverImage: 'dark-side-of-the-moon.jpg',
    type: 'full',
    format: 'json'
  },
  {
    title: 'The Scientist',
    file: 'the-scientist.json',
    coverImage: 'the-scientist.png',
    type: 'full',
    format: 'json'
  },
  {
    title: 'Bohemian Rhapsody',
    file: 'bohemian-rhapsody.json',
    coverImage: 'freddy.png',
    type: 'riff',
    format: 'json'
  },
  {
    title: 'Imagine',
    file: 'imagine.json',
    coverImage: 'imagine.png',
    type: 'full',
    format: 'json'
  },
  {
    title: 'Inception',
    file: 'inception.json',
    coverImage: 'inception.png',
    type: 'full',
    format: 'json'
  },
  {
    title: 'Is There Life On Mars',
    file: 'is-there-life-on-mars.mid',
    coverImage: 'is-there-life-on-mars.png',
    type: 'riff',
    format: 'midi'
  },
  {
    title: 'November Rain',
    file: 'november-rain.mid',
    coverImage: 'november-rain.png',
    type: 'riff',
    format: 'midi'
  },
  {
    title: 'The Entertainer',
    file: 'the-entertainer.mid',
    coverImage: 'the-entertainer.png',
    type: 'riff',
    format: 'midi'
  }
];

const SongsPage = () => {
  const { setPlaying, setPlayingEpisode, setPlayingChord } = useContext(PlayingContext);
  const history = useHistory();

  const handleSelectSong = useCallback(async (e: any, song: Song) => {
    e.preventDefault();

    if (song.format === 'midi') {
      document.location.href = `/static/midi/${song.file}`;
      return
    }


    const response = await fetch(`/static/sheets/${song.type}/${song.file}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

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
                <div className="panel-body">
                  <div className={styles.centered} style={{ position: 'relative', display: 'inline-block' }}>
                    <img height="170" src={`/static/images/${song.coverImage}`} alt={song.title} />
                    {song.format === 'midi' && (
                            <span className={styles.midiBadge}>
                    MIDI
                  </span>
                    )}
                  </div>
                </div>
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

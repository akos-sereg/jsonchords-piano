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

const Songs : Song[] = [
    {
        title: 'Jurassic Park',
        file: 'jurassic-park.json',
        coverImage: 'jurassic-park.png',
        type: 'full',
    }, {
        title: 'Peppa Pig',
        file: 'peppa-pig.json',
        coverImage: 'peppa-pig.jpg',
        type: 'riff',
    },
    {
        title: 'Mad World',
        file: 'mad-world.json',
        coverImage: 'mad-world.jpg',
        type: 'full',
    },
    {
        title: 'Through My Words',
        file: 'through-my-words.json',
        coverImage: 'scenes-from-a-memory.jpg',
        type: 'full',
    },
    {
        title: 'Star Wars (basic)',
        file: 'star-wars.json',
        coverImage: 'star-wars.png',
        type: 'riff',
    },
    {
        title: 'Star Wars',
        file: 'star-wars-advanced.json',
        coverImage: 'star-wars.png',
        type: 'riff',
    },
    {
        title: 'Teardrop',
        file: 'teardrop.json',
        coverImage: 'mezannine.jpg',
        type: 'full',
    },
    {
        title: 'Nobody Home',
        file: 'nobody-home.json',
        coverImage: 'the-wall.jpg',
        type: 'full',
    },
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
        <div className={styles.container}>
            {Songs.map((song) => (

                <div key={`${song.type}/${song.file}`} className={`panel panel-default ${styles.card}`}>
                  <div className="panel-body">
                    <div className={styles.centered}>
                        <img height="170" src={`/static/images/${song.coverImage}`} />
                    </div>
                    <div className={styles.centered}>
                        <div className="caption">
                          <h3>{song.title}</h3>
                        </div>
                        <p><a href="#" onClick={(event) => handleSelectSong(event, song)} className="btn btn-primary" role="button">Play</a></p>
                    </div>
                  </div>
                </div>

            ))}
        </div>
    );
};

export default SongsPage;

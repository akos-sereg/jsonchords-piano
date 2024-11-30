import * as React from 'react';
import styles from './style.scss';

const Songs = [
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
];

const SongsPage = () => {
    return (
        <div className={styles.container}>
            {Songs.map((song) => (

                <div className={`panel panel-default ${styles.card}`}>
                  <div className="panel-body">
                    <div className={styles.centered}>
                        <img height="170" src={`/static/images/${song.coverImage}`} />
                    </div>
                    <div className={styles.centered}>
                        <div className="caption">
                          <h3>{song.title}</h3>
                        </div>
                        <p><a href="#" className="btn btn-primary" role="button">Play</a></p>
                    </div>
                  </div>
                </div>

            ))}
        </div>
    );
};

export default SongsPage;

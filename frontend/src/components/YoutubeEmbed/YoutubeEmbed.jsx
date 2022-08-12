import './YoutubeEmbed.scss';

const YoutubeEmbed = ({ embedId }) => (
    <iframe
        width="1130"
        height="500"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        sandbox="allow-scripts allow-presentation allow-same-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className='video-player'
    />
);

export default YoutubeEmbed;
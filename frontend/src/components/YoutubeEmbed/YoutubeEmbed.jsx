import './YoutubeEmbed.scss';

const YoutubeEmbed = ({ embedId }) => (
    <iframe
        width="80%"
        height="400"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
        frameBorder="0"
        sandbox="allow-scripts allow-presentation allow-same-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className='video-player'
    />
);

export default YoutubeEmbed;
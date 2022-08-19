import "./VideosGallery.scss";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import { useState } from "react";
import { ReactComponent as YoutubeIcon } from "../../assets/YoutubeIcon.svg";
import VideosPagination from "../VideosPagination/VideosPagination";

const VideosGallery = ({ videos }) => {
    const [embedId, setEmbedId] = useState("6mbwJ2xhgzM");

    const handleClick = (id) => {
        setEmbedId(id);
    };

    return (
        <div className="videos-gallery-container">
            <YoutubeEmbed embedId={embedId} className='asdf' />

            <div className="videos-gallery">
                {videos &&
                    videos.items.map((item) => (
                        <div className="video-container" key={item.id}>
                            <YoutubeIcon
                                className='video-icon'
                                style={{
                                    display: item.snippet.resourceId.videoId === embedId ? "block" : "",
                                }}
                                onClick={() => handleClick(item.snippet.resourceId.videoId)}
                            />
                            <img
                                src={item.snippet.thumbnails.medium.url}
                                alt={item.snippet.title}
                                className='video-thumbnail'
                                onClick={() => handleClick(item.snippet.resourceId.videoId)}
                            />
                            <p className="video-title">{item.snippet.title}</p>
                        </div>
                    ))}
            </div>
            {/* <VideosPagination /> */}
        </div>
    );
};

export default VideosGallery;

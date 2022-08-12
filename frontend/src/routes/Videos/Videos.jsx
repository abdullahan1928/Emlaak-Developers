import "./Videos.scss";
import { useEffect, useState } from "react";
import VideosGallery from "../../components/VideosGallery/VideosGallery";
import VideosPagination from "../../components/VideosPagination/VideosPagination";

const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";

const Videos = () => {
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch(
                `${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&playlistId=${process.env.REACT_APP_YOUTUBE_PLAYLIST_ID}&part=snippet&maxResults=10`
            );
            const data = await res.json();
            setVideos(data);
        };
        fetchdata();
    }, []);

    return (
        <div className="videos-container">
            <h1>Videos</h1>
            <VideosGallery videos={videos} />
        </div>
    );
};

export default Videos;

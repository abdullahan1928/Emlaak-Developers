import './VideosPagination.scss'
import ReactPaginate from 'react-paginate';

const VideosPagination = () => {
    return (
        <div className='pagination-container'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                pageRangeDisplayed={5}
                pageCount='5'
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default VideosPagination
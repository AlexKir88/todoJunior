import {HiOutlineTrash} from 'react-icons/hi';

let Delete = ({rem}) => {
    function onClick(e) {
        rem();
        // e.stopPropagation();
    }
    return (
        <div className='Delete' onClick={onClick} tabIndex={0}>
            <HiOutlineTrash className='Trash' size={27} />
        </div>
        
    )
}

export default Delete;
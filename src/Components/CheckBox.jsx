import { BsCheck } from 'react-icons/bs';

const CheckBox = ({isComplited}) => {
    
    return (
        <div className='CheckBox' >
            {isComplited && 
                <BsCheck size={'2vw'} style={{color: 'rgb(194, 57, 80)'}} />
            }
        </div>
    )
}

export default CheckBox;
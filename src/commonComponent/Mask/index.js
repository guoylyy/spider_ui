import classNames from 'classnames';
import './index.css';

const Mask = (props)=> {
    const className = classNames('Mask', props.className || '');
    return (
        <div className={className}/>
    );
}

export default Mask;
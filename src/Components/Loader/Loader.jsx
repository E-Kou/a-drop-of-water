import styles from './Loader.css'

function Loader(props){
    return(
        props.mode == "dots" ? (
<div className={styles.dotFlashing + (props.show ? " show":'')}></div>
    ) : (
        <div className={styles.loader + (props.show ? " show":'')}></div>
    )
    )
};

export default Loader
import React from "react";
// CSS MODULE
import styles from './Card.module.scss';
// REACT ICONS
import {AiOutlineInstagram, AiFillGithub, } from 'react-icons/ai';


const Card = ({ name, job, img, github, instagram }) => {

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.image} src={img} alt={`${name} picture`}/>

                <h1 className={styles['card-name']}>{ name }</h1>

                <p className={styles['card-job']}>{ job }</p>

                <ul className={styles['social-icons']}>
                    {
                        github ? <div><li><a href={`#${github}`}><AiFillGithub color={'white'} /></a></li></div> : ''
                    }
                    {
                        instagram ? <div> <li><a href={`#${instagram}`}><AiOutlineInstagram color={'white'} /></a></li></div> : ''
                    }
                </ul>
            </div>
        </div>
    )
}

export default Card;

// const Card = () => {
//     return(
//         <div></div>
//     )
// }
//
// export default Card;
import React from 'react';
import Layout from '@theme/Layout';
import Card from "../components/Card-Team/Card";
// CSS MODULE
import styles from './ourTeam.module.scss';
// UUID
import { v4 as uuidv4 } from 'uuid';
// DATA TEAM
import {teamData, advisorData, partnerData} from "../utils/team-data";
// React Icons
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
// Motion Frames
import {motion} from "framer-motion";
// Animation
import {socialItemAnime} from "../utils/Animation";
// test pic
import testPic from '../../static/img/team-pictures/vincenzo-cirillo.jpg';


const GridContainerTeam = ({ title, data }) => {
    return (
        <div className={styles.wrapper_grid}>


            <div className={styles.container}>

                <div className={styles.section}>
                    <div className={`${styles.section__title} ${styles.space__team__wrap} ` }>
                        { title }
                    </div>
                </div>

                <div className={styles.grid}>

                    {/*  each user in users  */}

                    {
                        data.map( (user) => (
                            <div className={styles.column} key={uuidv4()}>
                                <div className={styles.user}>

                                    <div className={styles.user__avatar}>
                                        <img className={styles.user__avatar} src={user.img} alt={user.name} />
                                    </div>

                                    <div className={styles.user__name}>
                                        { user.name }
                                    </div>

                                    <div className={styles.user__title}>
                                        { user.title }
                                    </div>

                                    {/*  SOCIAL  */}

                                    <ul className={styles.social}>
                                        {/* social links users */}

                                        {
                                            user.facebook && <li
                                                key={uuidv4()}
                                                className={styles.social__item}
                                            >
                                                <a href={user.facebook}> <BsFacebook/> </a>
                                            </li>
                                        }
                                        {
                                            user.twitter && <li key={uuidv4()} className={styles.social__item}>
                                                <a href={user.twitter}> <BsTwitter/> </a>
                                            </li>
                                        }
                                        {
                                            user.github && <li key={uuidv4()} className={styles.social__item}>
                                                <a href={user.github}> <BsGithub/> </a>
                                            </li>

                                        }{
                                        user.instagram && <li key={uuidv4()} className={styles.social__item}>
                                            <a href={user.instagram}> <BsInstagram/> </a>
                                        </li>

                                    }
                                    </ul>

                                </div>
                            </div>
                        ) )
                    }



                </div>

            </div>

        </div>
    )
}


const CardAdvisor = ({ advisorData, title }) => {
    return (
        <div className={styles.wrapper_advisor}>
            <div className={`${styles.section__title} ${styles.space__team__wrap} ` }>
                { title }
            </div>
            <div className={styles.container_advisor}>

                {
                    advisorData.map((data) => (
                        <div className={styles.advisor_box} key={uuidv4()}>
                            <div className={styles.advisor_box__img}>
                                <img src={data.img} alt="pic"/>
                            </div>
                            <div className={styles.advisor_box__info}>
                                <h1 className={styles.advisor_box__title}>
                                    {data.name}
                                </h1>
                                <p className={styles.advisor_box__text}>
                                    {data.text1}                                </p>
                                <p className={styles.advisor_box__text}>
                                    {data.text2}                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>

    )
}

const OurTeam = () => {
    return(
        <Layout title={'Out Team'}>

            <GridContainerTeam title={'The Team'} data={teamData} />

            <CardAdvisor title={'The Advisor'} advisorData={advisorData} />

            <GridContainerTeam title={'The Partner'} data={partnerData} />

        </Layout>
    )
}

export default OurTeam;
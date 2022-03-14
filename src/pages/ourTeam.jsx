import React from 'react';
import Layout from '@theme/Layout';
import Card from "../components/Card-Team/Card";
// CSS MODULE
import styles from './ourTeam.module.scss';
// UUID
import { v4 as uuidv4 } from 'uuid';
// DATA TEAM
import {teamData, adviserData} from "../utils/team-data";
// React Icons
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';
// Motion Frames
import {motion} from "framer-motion";
// Animation
import {socialItemAnime} from "../utils/Animation";



// const OurTeam = () => {
//
//     return (
//         <Layout title="Hello">
//             <div className={styles.wrapper}>
//                 <div className={styles['title-team']}>
//                     <h1>Team</h1>
//                 </div>
//                 <div className={styles['container-card']}>
//                     {
//                         teamData.map((data) => <Card
//                             key={uuidv4()}
//                             name={data.name}
//                             job={data.job}
//                             img={data.img}
//                             github={data.github}
//                             instagram={data.instagram}
//                         />)
//                     }
//                 </div>
//
//                 <div className={styles['title-team']}>
//                     <h1>Advisor</h1>
//                 </div>
//                 <div className={styles['container-card']}>
//                     {
//                         adviserData.map((data) => <Card
//                             key={uuidv4()}
//                             name={data.name}
//                             job={data.job}
//                             img={data.img}
//                             github={data.github}
//                             instagram={data.instagram}
//                         />)
//                     }
//                 </div>
//
//                 <div className={styles['title-team']}>
//                     <h1>Partner</h1>
//                 </div>
//                 <div className={styles['container-card']}>
//                     {
//                         adviserData.map((data) => <Card
//                             key={uuidv4()}
//                             name={data.name}
//                             job={data.job}
//                             img={data.img}
//                             github={data.github}
//                             instagram={data.instagram}
//                         />)
//                     }
//                 </div>
//             </div>
//         </Layout>
//     );
// }
//
// export default OurTeam;



const OurTeam = () => {
    return(
        <Layout title={'Out Team'}>

            <div >


                <div className={styles.container}>

                    <div className={styles.section}>
                        <div className={styles.section__title}>
                            The Team
                        </div>
                    </div>

                    <div className={styles.grid}>

                        {/*  each user in users  */}

                        {
                            teamData.map( (user) => (
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

        </Layout>
    )
}

export default OurTeam;
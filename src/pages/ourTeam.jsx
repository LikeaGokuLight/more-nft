import React from 'react';
import Layout from '@theme/Layout';
import Card from "../components/Card-Team/Card";
// CSS MODULE
import styles from './ourTeam.module.scss';
// UUID
import { v4 as uuidv4 } from 'uuid';
// DATA TEAM
import {teamData, adviserData} from "../utils/team-data";


const OurTeam = () => {

    return (
        <Layout title="Hello">
            <div className={styles.wrapper}>
                <div className={styles['title-team']}>
                    <h1>Team</h1>
                </div>
                <div className={styles['container-card']}>
                    {
                        teamData.map((data) => <Card
                            key={uuidv4()}
                            name={data.name}
                            job={data.job}
                            img={data.img}
                            github={data.github}
                            instagram={data.instagram}
                        />)
                    }
                </div>

                <div className={styles['title-team']}>
                    <h1>Advisor</h1>
                </div>
                <div className={styles['container-card']}>
                    {
                        adviserData.map((data) => <Card
                            key={uuidv4()}
                            name={data.name}
                            job={data.job}
                            img={data.img}
                            github={data.github}
                            instagram={data.instagram}
                        />)
                    }
                </div>

                <div className={styles['title-team']}>
                    <h1>Partner</h1>
                </div>
                <div className={styles['container-card']}>
                    {
                        adviserData.map((data) => <Card
                            key={uuidv4()}
                            name={data.name}
                            job={data.job}
                            img={data.img}
                            github={data.github}
                            instagram={data.instagram}
                        />)
                    }
                </div>
            </div>
        </Layout>
    );
}

export default OurTeam;


// const OurTeam = () => {
//     return(
//         <div >
//
//         </div>
//     )
// }
//
// export default OurTeam;
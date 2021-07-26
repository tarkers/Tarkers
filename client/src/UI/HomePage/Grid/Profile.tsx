import React from 'react'
import { Grid } from 'rsuite'
import style from '../home.module.scss'
const Profile: React.FC = () => {
    return (
        <Grid fluid className={style.pageDivTest}>
            <h1 className={style.pageTitle}>Profile</h1>
        </Grid>
    )
}

export default Profile

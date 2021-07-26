import React from 'react'
import { Grid } from 'rsuite'
import style from '../home.module.scss'
const Article:React.FC = () => {
    return (
        <Grid fluid className={style.pageDivTest}>
            <h1 className={style.pageTitle}>Article</h1>
        </Grid>
    )
}

export default Article

import React from 'react'
import { Grid } from 'rsuite'
import style from '../home.module.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Article: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <Grid fluid >
            <div id="ARTICLE" className={style.pageDivTest} onMouseEnter={() => { dispatch(jumpToPage("ARTICLE")) }} >
                <h1 className={style.pageTitle}>Article</h1>
            </div>
        </Grid>
    )
}

export default Article

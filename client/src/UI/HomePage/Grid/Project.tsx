import React from 'react'
import { Grid } from 'rsuite'
import style from '../home.module.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Project: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <Grid fluid >
            <div id="PROJECT" className={style.pageDivTest} onMouseEnter={() => { dispatch(jumpToPage("PROJECT")) }} >
                <h1 className={style.pageTitle}>Project</h1>
            </div>

        </Grid>
    )
}

export default Project

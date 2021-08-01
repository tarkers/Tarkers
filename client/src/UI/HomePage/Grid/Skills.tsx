import React from 'react'
import { Grid } from 'rsuite'
import style from '../home.module.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Skills: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <Grid fluid className={style.pageDivTest}>
            <div id="SKILLS" className={style.pageDivTest} onMouseEnter={() => { dispatch(jumpToPage("SKILLS")) }} >
                <h1 className={style.pageTitle}>SKILLS</h1>
                
            </div>

        </Grid>
    )
}

export default Skills

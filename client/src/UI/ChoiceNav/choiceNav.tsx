import React from 'react'
import { Grid, Row, Col, Navbar, Nav, } from 'rsuite'
import style from './choicenav.module.scss'
const choiceNav: React.FC = () => {
    const section = [
        'About me',
        'Skills',
        'Experience',
        'Project',
        'Article',
        'Contact'];
    return (
        <Grid fluid className={style.GridStyle}>
            {section.map((item, index) => (
                <Row className={style.ListStyle} key={index} index={index}>
                    {item}
                    <div className={style.testBar}></div>
                </Row>
            ))}
        </Grid>
    )
}

export default choiceNav

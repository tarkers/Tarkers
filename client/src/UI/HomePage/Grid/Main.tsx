import React from 'react'
import { Col, Row } from 'rsuite'
import style from '../home.module.scss'
const Main: React.FC = () => {
    return (
        <Row className={style.backGround}>
            <div className={`${style.centerDiv} ${style.backGroundDiv}`}>
                <h1 >LIFE is a Game
                    <br />
                    Controller in Hand
                    <br />
                    Start Playing Like The Champion
                </h1>
                <br />
                <p>quote in my mind ,nobody can controll our lives
                    <br />
                    don't be afraid to fall down ,all these are the mark of glory
                    <br />
                    Fight till the sun rise
                </p>
            </div>
            <Col sm={12}>

            </Col>
            <Col sm={12}>

            </Col>
        </Row>
    )
}

export default Main

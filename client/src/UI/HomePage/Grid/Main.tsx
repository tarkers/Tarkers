import React from 'react'
import { Grid } from 'rsuite'
import style from '../home.module.scss'
const Main:React.FC = () => {
    return (
        <Grid className="m-0" fluid >
        <div className={style.backGround}>
            <div className={style.backGroundIn}>
                <h1 >LIFE is a Game
                    <br />
                    Controller in Hand
                    <br />
                    Start Playing Like The Champion
                </h1>
                <br/>
                <p>quote in my mind ,nobody can controll our lives
                    <br />
                    don't be afraid to fall down ,all these are the mark of glory
                    <br />
                    Fight till the sun rise
                </p>
            </div>
        </div>
    </Grid >
    )
}

export default Main

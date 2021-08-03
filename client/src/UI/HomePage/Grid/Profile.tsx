import React from 'react'
import { Grid, Row, Col, Timeline } from 'rsuite'
import style from './profile.module.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Profile: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <Grid id="PROFILE" fluid onMouseEnter={() => { dispatch(jumpToPage("PROFILE")) }} >

            <h1 className={`${style.pageTitle} `}></h1>
            <Row style={{ marginTop: "50px" }}>
                <Col md={4} xsHidden >
                    {/* <div className={style.decorateStyle}>  <h3>PROFILE</h3></div>     */}
                </Col>
                {/* <Col md={4} xsHidden className={style.decorateStyle}>
                    <h3>PROFILE</h3>
                </Col> */}
                <Col md={8} xs={24}>
                    <div className="pt-3">
                        <h1 style={{ fontFamily: "Roboto", textAlign: "center", fontSize: "86px" }}>古真禛</h1>
                        <h1 style={{ textAlign: "end" }}>CHEN KU</h1>
                        <div className={`m-4 text-start`}>
                            <h4>Introduction</h4>
                            <p>
                                主要致力於編寫網頁前後端，以及AR室內環境建構相關
                                研究，對接觸各樣新事物有絕對的熱忱，跳脫舒適圈來
                                接收各樣的挑戰，也能很快地吸取新知。
                                平時興趣喜歡打籃球和彈吉他。
                            </p>
                            {/* <p>
                                Mainly dedicated to the preparation of the front and back ends of the webpage, as well as research on the construction of the AR indoor environment. He has an absolute enthusiasm for contacting all kinds of new things, jumping out of the comfort zone to accept all kinds of challenges, and being able to quickly absorb new knowledge.
                                <br />
                                Hobby basketball and guitar.
                            </p> */}
                        </div>
                        <div className={`m-4 text-start`}>
                            <h4>Backgournd</h4>
                            <Timeline>
                                <Timeline.Item>2018 - 2022 國立成功大學 資訊工程學系</Timeline.Item>
                                <Timeline.Item>2021 SideeX Intern</Timeline.Item>
                            </Timeline>
                        </div>
                    </div>

                </Col >

                <Col md={6} xs={24} className="text-center">
                    <div className={style.selfieDivStyle}>
                    </div>
                </Col>
                <Col md={2} xsHidden>
                </Col>
            </Row>

        </Grid>
    )
}

export default Profile

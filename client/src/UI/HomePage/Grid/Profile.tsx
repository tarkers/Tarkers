import React from 'react'
import {  Row, Col, Timeline } from 'rsuite'
import style from './profile.module.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Profile: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <Row id="PROFILE" className={style.profileRow} onMouseEnter={() => { dispatch(jumpToPage("PROFILE")) }} >
            <h1 className={`${style.pageTitle} `}></h1>
            <Row style={{ marginTop: "50px" }}>
                <Col md={8} sm={24}>
                    <div className="pt-3">
                        <h1 className={style.nameTitle}>古真禛</h1>
                        <h1 className={style.enNameTitle}>CHEN KU</h1>
                        <h1 className={style.posTitle}>Software Engineer</h1>
                        <h1 className={style.posTitle}>Guitarist</h1>
                    </div>

                </Col >

                <Col md={8} sm={24} style={{ textAlign: "center" }}>
                    <div className={style.selfieDivStyle}>
                    </div>
                </Col>
                <Col md={8} sm={24}>
                    <div className={`m-4 text-start`}>
                        <h2>Introduction</h2>
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
                        <h2>Background</h2>
                        <Timeline>
                            <Timeline.Item><p>2018 - 2022 國立成功大學 資訊工程學系</p></Timeline.Item>
                            <Timeline.Item><p>2021 SideeX Intern</p></Timeline.Item>
                        </Timeline>
                    </div>

                </Col >
            </Row>

        </Row>
    )
}

export default Profile

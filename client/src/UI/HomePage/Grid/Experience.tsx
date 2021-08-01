import React from 'react'
import { Grid, Icon, Timeline } from 'rsuite'

import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
import style from './experience.module.scss'
import './style.scss'
const Experience: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <div id="EXPERIENCE" onMouseEnter={() => { dispatch(jumpToPage("EXPERIENCE")) }} >
            <h1 className={style.pageTitle}>Experience</h1>
            <Timeline align="alternate" className="custom-timeline mt-4 mb-2">
                <Timeline.Item dot={<label >2018</label>}>
                    <p style={{ height: "40px" }}></p>
                </Timeline.Item>
                <Timeline.Item >
                    <p >Scratch Design Competition</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>成大Maker festival</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>Hacktober festival</p>
                </Timeline.Item>
                <Timeline.Item dot={<label >2019</label>}>
                    <p style={{ height: "40px" }}></p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>夏日台灣季VR Competition</p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>高中童軍營領隊</p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>成大 Maker festival</p>
                </Timeline.Item>
                <Timeline.Item dot={<label >2020</label>}>
                    <p style={{ height: "40px" }}></p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>夏日台灣季VR Competition</p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>癲癇協會宣傳片參與設計</p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>高中論壇網頁架架設</p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>蹦世界實境AR解謎設計Competition</p>
                </Timeline.Item>
                <Timeline.Item dot={<label >2021</label>}>
                    <p style={{ height: "45px" }}></p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>黑客松Competition</p>
                </Timeline.Item>
                <Timeline.Item >
                    <p>桌球心理測試網頁架設</p>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}

export default Experience

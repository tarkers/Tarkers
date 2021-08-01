import React from 'react'
import { Col, FlexboxGrid, Grid, Panel, Row, Tag, TagGroup } from 'rsuite'
import style from './project.module.scss'
import './style.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Project: React.FC = () => {
    const dispatch = useAppDispatch()
    const addTitle = (title: string, tag: string) => {
        return (
            <div>
                <h4 style={{ display: "inline-block" }}>132456</h4>
            </div>

        )
    }
    return (
        <div id="PROJECT" className={style.pageDivTest} onMouseEnter={() => { dispatch(jumpToPage("PROJECT")) }} >
            <h1 className={style.pageTitle}>Project</h1>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item className={style.projectGrid} colspan={24} md={6} >
                    <Panel header={<h4 style={{ display: "inline-block", textAlign: "center" }}>Pacman Game</h4>} collapsible bordered>
                        <h4>Arduino</h4>
                        <p>
                            製作一款空氣pm2.5偵測器
                        </p>
                    </Panel>

                </FlexboxGrid.Item>
                <FlexboxGrid.Item className={style.projectGrid} colspan={24} md={6} >
                    <Panel header={<h4 style={{ display: "inline-block", textAlign: "center" }}>2.5 Monitor</h4>} collapsible bordered>
                        <TagGroup>
                            <Tag color="green">Arduino</Tag>
                            <Tag color="red">java</Tag>
                            <Tag color="orange">html</Tag>
                        </TagGroup>
                        <div className="mt-2">
                            <p>
                                製作一款空氣pm2.5偵測器，並且製作手機使用者介面,主要呈現四種形式
                                良好，中等，危害，危險。
                            </p>
                        </div>

                    </Panel>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item className={style.projectGrid} colspan={24} md={6} >
                    <Panel header={<h4 style={{ display: "inline-block", textAlign: "center" }}>Moxie Music app</h4>} collapsible bordered>
                        <p>
                            製作一款空氣pm2.5偵測器
                        </p>
                    </Panel>
                </FlexboxGrid.Item>     
            </FlexboxGrid>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item className={style.projectGrid} colspan={24} md={6} >
                    <Panel header={<h4 style={{ display: "inline-block", textAlign: "center" }}>Pacman Game</h4>} collapsible bordered>
                        <h4>Arduino</h4>
                        <p>
                            製作一款空氣pm2.5偵測器
                        </p>
                    </Panel>

                </FlexboxGrid.Item>
                <FlexboxGrid.Item className={style.projectGrid} colspan={24} md={6} >
                    <Panel header={<h4 style={{ display: "inline-block", textAlign: "center" }}>2.5 Monitor</h4>} collapsible bordered>
                        <TagGroup>
                            <Tag color="green">Arduino</Tag>
                            <Tag color="red">java</Tag>
                            <Tag color="orange">html</Tag>
                        </TagGroup>
                        <div className="mt-2">
                            <p>
                                製作一款空氣pm2.5偵測器，並且製作手機使用者介面,主要呈現四種形式
                                良好，中等，危害，危險。
                            </p>
                        </div>

                    </Panel>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item className={style.projectGrid} colspan={24} md={6} >
                    <Panel header={<h4 style={{ display: "inline-block", textAlign: "center" }}>Moxie Music app</h4>} collapsible bordered>
                        <p>
                            製作一款空氣pm2.5偵測器
                        </p>
                    </Panel>
                </FlexboxGrid.Item>

                
            </FlexboxGrid>
        </div>
    )
}

export default Project

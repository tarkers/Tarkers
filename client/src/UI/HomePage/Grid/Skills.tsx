import React from 'react'
import { Progress, Col, Row, Divider } from 'rsuite'
import style from './skills.module.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Skills: React.FC = () => {
    const dispatch = useAppDispatch()
    const { Line, Circle } = Progress
    const skillData = [
        {
            title: "Frontend",
            usage: [
                { title: "Vuejs", color: "#ff5757", percentage: 75 },
                { title: "React", color: "#eb5050", percentage: 80 },
                { title: "Angular", color: "#be4141", percentage: 55 },
                { title: "jquery", color: "#ad3c3c", percentage: 75 },
            ],
            language: [
                { title: "Javascript", color: "#ff5757", percentage: 75 },
                { title: "Typescript", color: "#ff5757", percentage: 75 },
                { title: "HTML5", color: "#be4141", percentage: 55 },
                { title: "EJS", color: "#ad3c3c", percentage: 45 },
            ]
        },
        {
            title: "Backend",
            usage: [
                { title: "Nodejs", color: "#68aaff", percentage: 50 },
                { title: "Express", color: "#5c96e2", percentage: 65 },
                { title: "Flask", color: "#5c96e2", percentage: 65 },
                { title: "Django", color: "#4e7fbe", percentage: 65 },
            ],
            language: [
                { title: "Python", color: "#68aaff", percentage: 50 },
                { title: "Javascript", color: "#5c96e2", percentage: 65 },
            ]
        },
        {
            title: "Gaming",
            usage: [
                { title: "VR", color: "#ffd95c", percentage: 60 },
                { title: "AR", color: "#e9cc4e", percentage: 30 },
                { title: "Unity", color: "#ebce50", percentage: 75 },
                { title: "Unreal", color: "#d1b745", percentage: 30 },
            ],
            language: [
                { title: "C#", color: "#fdd246", percentage: 80 },
                { title: "C++", color: "#d3ae35", percentage: 50 },
            ]
        },
        {
            title: "DataBase",
            usage: [
                { title: "MongoDB", color: "#75ffa3", percentage: 55 },
                { title: "MySQL", color: "#66e08f", percentage: 73 },
            ],
            language: [
                { title: "SQL", color: "#53b674", percentage: 50 },
                { title: "Python", color: "#3c8856", percentage: 50 },
            ]
        },
        {
            title: "Others",
            usage: [
                { title: "Qt", color: "#7a7a7a", percentage: 70 },
                { title: "LineBot", color: "#7a7a7a", percentage: 75 },
                { title: "Java", color: "#7a7a7a", percentage: 75 },
                { title: "C", color: "#7a7a7a", percentage: 65 },
                { title: "WPF", color: "#7a7a7a", percentage: 55 },
                { title: "Yacc", color: "#7a7a7a", percentage: 73 },
                { title: "Arduino", color: "#7a7a7a", percentage: 50 },
            ],
            language: [],
        },
    ]
    const Development = [
        { title: "Frontend ", color: "#e45555", percentage: 50 },
        { title: "Backend ", color: "#e2d34d", percentage: 30 },
        { title: "DataBase ", color: "#4d8ee2", percentage: 25 },
        { title: "Gaming ", color: "#79CE79", percentage: 15 },

    ]
    const developForeach = () => {
        const Item: JSX.Element[] = []
        Development.forEach((item, key) => {
            Item.push(
                key % 2 == 0 ? <Row key={key}>
                    <Col xs={10}>
                        <div className={style.circleProgress} >
                            <Circle trailWidth={1} percent={item.percentage} strokeColor={item.color} />
                        </div>
                    </Col>
                    <Col xs={14} >
                        <h1 style={{ marginTop: "20%", textAlign: "center" }}>{item.title}</h1>
                    </Col>
                </Row> :
                    <Row key={key}>
                        <Col xs={14} >
                            <h1 style={{ marginTop: "20%", textAlign: "center" }}>{item.title}</h1>
                        </Col>
                        <Col xs={10}>
                            <div className={style.circleProgress} style={{ float: "right" }}>
                                <Circle trailWidth={1} percent={item.percentage} strokeColor={item.color} />
                            </div>
                        </Col>
                    </Row>
            )
        })
        return Item
    }
    const detailForeach = () => {
        const Items: JSX.Element[] = []
        skillData.forEach((items, key) => {
            const Item: JSX.Element[] = []
            if (items.title == "Others") {
                items.usage.forEach((item, index) => {
                    Item.push(
                        <Col key={index} xs={12} md={6} style={{ display: "inline-block" }}>
                            <label>{item.title}</label>
                            <Line style={{ textAlign: "center" }} percent={item.percentage} strokeColor={item.color} showInfo={false} />
                        </Col>
                    )
                })
                Items.push(
                    <Row key={key} style={{ margin: "15px", marginTop: "0" }}>
                        <Divider><h3 style={{ textAlign: "center" }}>{items.title}</h3></Divider>
                        {Item}
                    </Row>
                )
            }
            else {
                const mapToList = (items: { title: string, color: string, percentage: number }[]) => {
                    const Items = items.map((item, index) => (
                        <Col key={index} xs={12} sm={12} md={12} style={{ display: "inline-block" }}>
                            <label>{item.title}</label>
                            <Line style={{ textAlign: "center" }} percent={item.percentage} strokeColor={item.color} showInfo={false} />
                        </Col>
                    ))
                    return Items
                }
                Items.push(
                    <Row key={key} style={{ margin: "15px", marginTop: "0" }}>
                        <Divider><h3 style={{ textAlign: "center" }}>{items.title}</h3></Divider>
                        <Col md={12}>
                            <Row> <h4 style={{ textAlign: "center" }}>Tool</h4></Row>
                            <Row>  {mapToList(items.usage)}</Row>

                        </Col>
                        <Col md={12}>
                            <Row> <h4 style={{ textAlign: "center" }}>Language</h4></Row>
                            <Row>  {mapToList(items.language)}</Row>
                        </Col>
                    </Row>
                )
            }
        })
        return Items
    }
    return (

        <Row >
            <h1 className={style.pageTitle}>SKILLS</h1>
            <Row style={{ backgroundColor: "#3a3a3a" }} id="SKILLS" onMouseEnter={() => { dispatch(jumpToPage("SKILLS")) }} >

                <Col sm={24} md={10} className={style.developmentCol}>
                    <div style={{ marginTop: "10px" }}>
                        {developForeach()}
                    </div>
                </Col>
                <Col sm={24} md={14} style={{ backgroundColor: "#ffffff", padding: "50px" }}>
                    {detailForeach()}
                </Col>
            </Row>
        </Row>


    )
}

export default Skills

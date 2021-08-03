import React from 'react'
import { Row,Col } from 'rsuite'
import style from '../home.module.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Article: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <div id="ARTICLE" className={style.pageDivTest} onMouseEnter={() => { dispatch(jumpToPage("ARTICLE")) }} >
            <h1 className={style.pageTitle}>Article</h1>
            <Row>
                <Col>
                
                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
        </div>
    )
}

export default Article

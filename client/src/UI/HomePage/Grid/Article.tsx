import React from 'react'
import { Row, Col } from 'rsuite'
import style from './article.module.scss'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const Article: React.FC = () => {
    const dispatch = useAppDispatch()

    return (
        <div id="ARTICLE" onMouseEnter={() => { dispatch(jumpToPage("ARTICLE")) }} >
            <h1 className={style.pageTitle}>Article</h1>
            <Row style={{backgroundColor:"#ff9f9f"}}>
                <Col sm={24} md={8} >
                    <h2 className="text-center">Article</h2>
                </Col>
                
                <Col sm={24} md={16}>
                    <Row>
                        <Col sm={24} md={12} className={style.articleDiv}>
                      
                        </Col>
                        <Col sm={24} md={12} className={style.articleDiv}>
                      
                        </Col>
                        <Col sm={24} md={12} className={style.articleDiv}>
                      
                        </Col>
                        <Col sm={24} md={12} className={style.articleDiv}>
                      
                        </Col>
                        <Col sm={24} md={12} className={style.articleDiv}>
                      
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Article

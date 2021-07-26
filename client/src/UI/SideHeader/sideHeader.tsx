import React from 'react'
import { Header, Grid, Row, Col } from 'rsuite'

const sideHeader: React.FC = () => {
    return (
        <Header>
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={24} sm={24} md={3} >ICON</Col>
                    <Col xs={24} sm={6} md={3} >ICON</Col>
                    <Col xs={24} sm={6} md={3} >ICON</Col>
                    <Col xs={24} sm={6} md={3} >ICON</Col>
                    <Col xs={24} sm={6} md={3} >ICON</Col>
                    <Col xs={24} sm={6} md={3} >ICON</Col>
                    <Col xs={24} sm={6} md={3} >ICON</Col>
                    <Col xs={24} sm={6} md={3} >ICON</Col>
                    <Col xs={24} sm={6} md={3} >ICON</Col>
                </Row>
            </Grid>
        </Header>
    )
}

export default sideHeader

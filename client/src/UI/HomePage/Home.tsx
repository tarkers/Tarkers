import React from 'react'
import { Grid, Row, Col, Navbar, Nav, Container, } from 'rsuite'
import { Main, Profile, Skills, Experience, Project, Article, Contact } from './index'
import './home.scss'
const Home: React.FC = () => {
    return (
        <Container >
            <Main />
            <Profile />
            <Skills />
            <Experience />
            <Project />
            <Article />
            <Contact />
        </Container>

    )
}

export default Home

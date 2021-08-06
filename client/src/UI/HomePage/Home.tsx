import React from 'react'
import { Grid, Row, Col, Navbar, Nav, Container, } from 'rsuite'
import { Main, Profile, Skills, Experience, Project, Article, Contact } from './index'
import './home.scss'
const Home: React.FC = () => {
    return (
        <Grid >
            <Main />
            <Profile />
            <Skills />
            <Experience />
            <Project />
            <Article />
            <Contact />
        </Grid>

    )
}

export default Home

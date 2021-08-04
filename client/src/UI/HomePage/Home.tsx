import React from 'react'
import { Grid, Row, Col, Navbar, Nav, Container, } from 'rsuite'
import { Main, Profile, Skills, Experience, Project, Article, Contact } from './index'
import './home.scss'
import SideHeader from './SideHeader/sideHeader'
const Home: React.FC = () => {
    return (
        < Grid fluid>   
             {/* <SideHeader/>        */}
            {/* <Main /> */}
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

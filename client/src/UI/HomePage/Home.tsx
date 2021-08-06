import React from 'react'
import { Grid } from 'rsuite'
import { Main, Profile, Skills, Experience, Project, Article, Contact } from './index'
import SideHeader from './SideHeader/sideHeader'
const Home: React.FC = () => {
    return (
        < Grid fluid style={{ margin: "0 10px 0 10px" }}>
            {/* <SideHeader/>        */}
            <Main />
            <Grid>
                <Profile />
                <Skills />
                <Experience />
                <Project />
                <Article />
                <Contact />
            </Grid>
        </Grid>

    )
}

export default Home

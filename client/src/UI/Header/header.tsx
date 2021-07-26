import React, { useState } from 'react'
import styles from './header.module.scss'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useWindowDimensions } from '../../Component/useWindowDimensions'
import { Header, Grid, Row, Col, Navbar, Nav, Icon, Dropdown, IconButton, Button } from 'rsuite'
const header: React.FC = () => {
    const { height, width } = useWindowDimensions();
    return (
        <Header>
            <div className="d-flex bd-highlight">
                <div className={`p-1 w-100 bd-highlight`}><h2 style={{fontFamily:"Monoton"}}>Tarkers</h2></div>
                <div className={`p-1 flex-shrink-1 bd-highlight my-auto ${styles.navStyle}`}><Link to="/">Home</Link></div>
                <div className={`p-1 flex-shrink-1 bd-highlight my-auto ${styles.navStyle}`}><Link to="/Artical">Artical</Link></div>
                <span className={`p-1 flex-shrink-1 bd-highlight my-auto ${styles.navStyle}`}> <Link to="/Project">Project</Link></span>
                <div className="p-1 flex-shrink-1 bd-highlight"><Link to="/choicNav"> <IconButton size='lg' icon={<Icon icon="bars" />} /></Link></div>
            </div>
        </Header>
    )
}

export default header
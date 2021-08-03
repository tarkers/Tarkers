import { InputAdornment, TextField } from '@material-ui/core'
import React from 'react'
import { useAppDispatch } from '../../../reduxFile/hook'
import { jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
import { Button, ButtonToolbar, Col, FlexboxGrid, Icon, IconButton, Row, } from 'rsuite'
import testman from '../../../../public/image/testman.png'
import style from './contact.module.scss'
const Contact: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <div id="CONTACT" className={`${style.contactPageStyle}`} onMouseEnter={() => { dispatch(jumpToPage("CONTACT")) }}>
            {/* <h1 className={style.pageTitle}>Contact</h1> */}
            <Col xsHidden md={5} >
                    <div className="mt-5">
                        {/* <img src={testman} alt="" style={{ width: "60%" }} /> */}
                    </div>

                </Col>
            <Row style={{ height: "480px" }}>
                <Col xs={24} md={5} className="mb-5">
                    <div className={style.contactDivStyle}>
                        <h2 style={{ whiteSpace: "pre-wrap" }}>Contact      Me</h2>
                        <div className="mt-3">
                            <Row className={`m-2`}>
                                <Icon icon='map' size="2x" style={{ color: "black" }} />
                                <label className={style.contactLabelStyle}>Tainan,Taiwan</label>
                            </Row>
                            <Row className={`m-2`}>
                                <Icon icon='send' size="2x" style={{ color: "black" }} />
                                <label className={style.contactLabelStyle}>Yaksa1117@gmail.com</label>
                            </Row>
                            <Row className={`m-2`}>
                                <Icon icon='phone' size="2x" style={{ color: "black" }} />
                                <label className={style.contactLabelStyle}>(+886) 978353250</label>
                            </Row>
                        </div>
                        <FlexboxGrid justify="start" className="mt-3">
                            <ButtonToolbar>
                                <a href="https://www.facebook.com/profile.php?id=100027221091827" target="_blank"> <IconButton icon={<Icon icon="facebook" />} color="blue" circle ></IconButton></a>
                                <a href="https://www.linkedin.com/in/真禛-古-055b77176/" target="_blank"><IconButton icon={<Icon icon="linkedin" />} color="red" circle ></IconButton></a>
                                <a href="https://www.github.com/tarkers" target="_blank"> <IconButton icon={<Icon icon="github" />} color="violet" circle ></IconButton></a>
                                <a href="https://twitter.com/Tarkers2?s=09" target="_blank"><IconButton icon={<Icon icon="twitter" />} color="cyan" circle ></IconButton></a>
                                <a href="https://twitter.com/Tarkers2?s=09" target="_blank"><IconButton icon={<Icon icon="wechat" />} color="green" circle ></IconButton></a>
                            </ButtonToolbar>
                        </FlexboxGrid>
                    </div>
                </Col>
                <Col xs={24} md={10}>
                    <div className={style.mailDivStyle}>
                        <h2 >MESSAGE</h2>
                        <div>
                            <Row>
                                <TextField
                                    className={style.mailInputStyle}
                                    fullWidth
                                    label="Your Name"
                                />
                            </Row>
                            <Row>
                                <TextField className={style.mailInputStyle} fullWidth label="your Email"
                                />
                            </Row>
                            <Row>
                                <TextField maxRows={9} minRows={9} className={style.mailInputStyle} fullWidth multiline id="standard-basic" label="Your Message" />
                            </Row>
                            <Row>
                                <Button color="orange" className="w-100 mt-1">
                                    <Icon icon="envelope-open-o" /> Send
                                </Button>
                            </Row>
                        </div>

                    </div>
                </Col>
                <Col xsHidden md={4} >
                    <div className="mt-5">
                        {/* <img src={testman} alt="" style={{ width: "60%" }} /> */}
                    </div>

                </Col>
            </Row>


        </div>
    )
}

export default Contact
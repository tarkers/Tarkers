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
        <Row id="CONTACT" className={`${style.contactPageStyle}`} onMouseEnter={() => { dispatch(jumpToPage("CONTACT")) }}>
            <FlexboxGrid justify="center" >
                <FlexboxGrid.Item colspan={8} >
                    <h2 >MORE</h2>

                    {/* </FlexboxGrid> */}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={8}>
                    <h2 style={{ whiteSpace: "pre-wrap" }}>Contact      Me</h2>
                    <div className="mt-5">
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
                        <Row style={{marginTop:"50px"}}>
                            <ButtonToolbar>
                                <a href="https://www.facebook.com/profile.php?id=100027221091827" target="_blank"> <IconButton size="lg" icon={<Icon icon="facebook" />} color="blue" circle ></IconButton></a>
                                <a href="https://www.linkedin.com/in/真禛-古-055b77176/" target="_blank"><IconButton size="lg" icon={<Icon icon="linkedin" />} color="red" circle ></IconButton></a>
                                <a href="https://www.github.com/tarkers" target="_blank"> <IconButton size="lg" icon={<Icon icon="github" />} color="violet" circle ></IconButton></a>
                                <a href="https://twitter.com/Tarkers2?s=09" target="_blank"><IconButton size="lg" icon={<Icon icon="twitter" />} color="cyan" circle ></IconButton></a>
                                <a href="https://twitter.com/Tarkers2?s=09" target="_blank"><IconButton size="lg" icon={<Icon icon="wechat" />} color="green" circle ></IconButton></a>
                            </ButtonToolbar>
                        </Row>
                    </div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={8}>
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
                                <TextField maxRows={6} minRows={6} className={style.mailInputStyle} fullWidth multiline id="standard-basic" label="Your Message" />
                            </Row>
                            <Row>
                                <Button color="orange" className="w-100 mt-1">
                                    <Icon icon="envelope-open-o" /> Send
                                </Button>
                            </Row>
                        </div>
                    </div>
                </FlexboxGrid.Item>
                {/* <FlexboxGrid.Item colspan={4}>colspan={4}</FlexboxGrid.Item> */}
            </FlexboxGrid>

        </Row>
    )
}

export default Contact
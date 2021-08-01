import React from 'react'
import style from './sideheader.module.scss'
import { useAppSelector, useAppDispatch } from '../../../reduxFile/hook'
import { nextPage, previousPage, jumpToPage } from '../../../reduxFile/feature/sideHeaderSlice'
const sideHeader: React.FC = () => {
    const dispatch = useAppDispatch()
    const Title = useAppSelector((state: { sideHeader: { title: string } }) => state.sideHeader.title)
    const keyTitle = [
        { title: "PROFILE", color: "#e45555" },
        { title: "SKILLS", color: "#e2d34d" },
        { title: "EXPERIENCE", color: "#79CE79" },
        { title: "PROJECT", color: "#6FAFA0" },
        { title: "ARTICLE", color: "#8EBAE1" },
        { title: "CONTACT", color: "#9b6faf" },

    ]


    return (
        <div className={style.sideHeaderStyle}>
            {
                keyTitle.map((item, key) => (
                    <div key={key} className={item.title == Title ? style.selectListstyle : style.sideListStyle} style={{ backgroundColor: item.color }}>
                        <a href={`#${item.title}`} style={{ textDecoration: "none", userSelect: "none" }} onClick={() => { dispatch(jumpToPage(item.title)) }} >
                            <h3>{item.title}</h3>
                        </a>
                        <div className={style.decorateDiv} style={{borderColor: `${item.color} transparent ${item.color} ${item.color}`}}>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default sideHeader

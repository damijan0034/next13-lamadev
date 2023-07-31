"use client"

import styles from './DarkModeToggle.module.css'
import {IoIosMoon} from 'react-icons/io'
import {CgSun} from 'react-icons/cg'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function DarkModeToggle() {
   const{toggle,mode}=useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}><IoIosMoon /></div>
        <div style={{color:'yellow'}} className={styles.icon}><CgSun /></div>
        <div className={styles.ball} style={mode === "dark" ? {left:"2px"} : {right:"2px"} } />
    </div>
  )
}

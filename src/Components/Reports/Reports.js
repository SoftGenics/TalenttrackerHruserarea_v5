import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container } from 'react-bootstrap'
import './Report.css'
import useLocalStorage from 'use-local-storage'
const Reports = () => {
  const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
  return (
    <div  data-theme={theme} style={{overflow:'hidden', height:'100vh', width:'100%'}}>
      <Sidebar />
      <NavbarMenu />
      <Container className='reports'>
        <h5 className='mt-5  fw-bold text-center'>Reports</h5>
      </Container>
    </div>
  )
}

export default Reports
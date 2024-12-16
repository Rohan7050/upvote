import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar.component';
import styles from './LayoutContainer.module.css'

const LayoutContainer = () => {
  return (
    <>
        <Navbar/>
        <div className={"px-2 px-md-3 px-lg-4 " + styles.mainContaint}>
          <div className='container-fluid'>
            <Outlet/>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>&copy; {new Date().getFullYear()} Rohan Pagare. All rights reserved.</p>
          </div>
        </footer>
    </>
  )
}

export default LayoutContainer
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import styles from "../App.module.css";
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


function NavBar() {
  const [active, setActive] = useState(false)
  return (
    <>
        <nav>
        <div className={styles["nav-title"]}>Afolabi Esther</div>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={4} className={styles["large-links"]}>
        <span>
            <a href="https://github.com/Hestia-Arc" target="blank">
            <i className="fa-brands fa-github icon"></i>
            </a>
        </span>
        <span>
            <a href="https://www.linkedin.com/in/hestiaarc00" target="blank">
            <i className="fa-brands fa-linkedin icon"></i>
            </a>
        </span>
        <span>
            <a href="https://twitter.com/arc_hestia00" target="blank">
            <i className="fa-brands fa-twitter icon"></i>
            </a>
        </span>
        <span>
            <a href="mailto:hestia.dev005@gmail.com">
            <i className="fa-solid fa-envelope icon"></i>
            </a>
        </span>
        <div className={styles["nav-btn"]}>
        <Link to="contact">Contact</Link>
        </div>
  
        </Stack>
        <div className={styles["m-toggle"]} onClick={() => setActive(!active)}>
          <MenuOutlinedIcon />
          
        </div>
        <div className={active ?  styles["m-menu"] : styles["m-menu-hidden"]}></div>
      </nav>
    
    </>
  )
}

export default NavBar
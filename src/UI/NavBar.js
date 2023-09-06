import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import styles from "../App.module.css";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const variants = {
  visible: { display: "block" },
  hidden: {
    display: "none",
  },
};

function NavBar() {
  // const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className={styles["nav-title"]}>Afolabi Esther</div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          className={styles["large-links"]}
        >
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
          {/* <div className={styles["nav-btn"]}>
            <Link to="contact">Contact</Link>
          </div> */}
        </Stack>
        <motion.div
          whileTap={{ scale: 1 }}
          className={styles["m-toggle"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuOutlinedIcon />

          <Box
            // initial='hidden'
            // animate='visible'
            // variants={variants}
            // transition={{
            //   ease: "easeOut", duration: 4
            // }}
            className={isOpen ? styles["m-menu"] : styles["m-menu-hidden"]}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              spacing={4}
              // className={styles["large-links"]}
            >
              <span>
                <a href="https://github.com/Hestia-Arc" target="blank">
                  GitHub <i className="fa-brands fa-github icon"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/hestiaarc00"
                  target="blank"
                >
                  LinkedIn <i className="fa-brands fa-linkedin icon"></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com/arc_hestia00" target="blank">
                  Twitter<i className="fa-brands fa-twitter icon"></i>
                </a>
              </span>
              <span>
                <a href="mailto:hestia.dev005@gmail.com">
                  E-mail<i className="fa-solid fa-envelope icon"></i>
                </a>
              </span>
              
            </Stack>

            <div style={{marginTop: 90, border: '1px solid #fff', padding: 20 }}>Built by Esther &copy;2023</div>
          </Box>
        </motion.div>
      </nav>
    </>
  );
}

export default NavBar;

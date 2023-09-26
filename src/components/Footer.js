import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '60px', margin: '20px 0'}}>
        <Typography>
            &copy; 2023. Built by Hestia
        </Typography>
    </Box>
  )
}

export default Footer
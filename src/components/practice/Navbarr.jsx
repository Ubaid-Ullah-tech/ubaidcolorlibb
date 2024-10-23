import { Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShowerIcon from '@mui/icons-material/Shower';
const Navbarr = () => {
    const [openNav , setOpenNav] = useState(false);
    
     useEffect(()=>{
        window.addEventListener(
            'resize', ()=>{
                window.innerWidth >= 900 && setOpenNav(false)
            }
        )
     })
    
    const navlist = (
        <ul className='flex flex-col lg:flex-row gap-3'>
             <Typography>
                <ShowerIcon/>
                <a href="/">Home</a>
            </Typography>

            <Typography>
            <ShowerIcon/>
                <a href="/">About</a>
            </Typography>

            <Typography>
            <ShowerIcon/>
                <a href="/">Contact</a>
            </Typography>
        </ul>
     )
  return (
    <Navbar className='text-black'>
       <div className='flex justify-between items-center'>
       <h1>Colorlib</h1>
       <div className='hidden lg:block'>{navlist}</div>
       <IconButton
       className='lg:hidden'
       onClick={()=> setOpenNav(!openNav)}>
        {openNav ? (
            <>
            <CloseIcon/>
            </>
        ):(
            <>
            <MenuIcon/>
            </>
        )}
       </IconButton>
       </div>
       <Collapse open={openNav}>
         {navlist}
       </Collapse>
    </Navbar>
  )
}

export default Navbarr

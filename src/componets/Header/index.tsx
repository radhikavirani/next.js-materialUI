"use client"
import { Box, Button, Container, IconButton, InputBase, Menu, MenuItem, Paper, Typography, } from "@mui/material"
import logo from './../../assets/img/Logo.png'
import menu_icon from './../../assets/img/navbaricon.svg'
import icon from './../../assets/img/Small.svg'
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import Image from "next/image"
import React from "react";
import Drop from "../Dropdown"
import Drop2 from "../Dropdown2"
import Wrapper from "./style"


const MenuList = [
    { menu: 'Products' },
    { menu: 'Developers' },
    { menu: 'Packages' },
    { menu: 'Blog' },
    { menu: 'SDK’S' },
]

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Wrapper>
            <Container className="header-bg main-flex">
                <Box display={'flex'} alignItems={'center'} marginRight={'auto'}>
                    <Image className="cursor" alt="img" src={logo} />
                    <Paper className="form-area form-bg" component="form" sx={{ padding: '0', display: 'flex', alignItems: 'center', width: 287.93, height: '36px' }}>
                        <IconButton className="searchicon" type="button" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className="Gilroy_400 input-tx"
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search packages,users or apps"
                            inputProps={{ 'aria-label': 'Search packages,users or apps' }}
                        />
                    </Paper>
                </Box>
                <Box className="main-flex display-n">
                    <Drop title="Products"/>
                    <Drop2 title="Developers"/>
                    <Typography className="Gilroy_600 cursor menu">Explore</Typography>
                    <Typography className="Gilroy_600 cursor menu">Blog</Typography>
                </Box>
                <Box className="main-flex">
                    <Box className="git-btn main-flex cursor btn-border" padding={'5px 10px 5px 6px'} marginLeft={'32px'}>
                        <GitHubIcon className="icon-size" />
                        <Typography className="Gilroy_600" fontSize={'13px'} paddingLeft={'4px'} lineHeight={'18px'}>16k</Typography>
                    </Box>
                    <Box className="black-mark main-flex cursor btn-border" padding={'6px'} marginLeft={'12px'}>
                        <Image alt="img" className="icon-size" src={icon} />
                    </Box>
                    <Box className="cursor btn-border main-flex" marginLeft={'12px'} padding={'3px 8px'}>
                        <Typography className="signin-tx Gilroy_600" lineHeight={'22.4px'}>Sign in</Typography>
                    </Box>
                </Box>

                {/* hide menubar */}
                <Box className="menu-icon-hide">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="btn-bg"
                    >
                        <DensityLargeIcon className="menu-icon" />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>

                        <Paper className="form-area Gilroy_600" component="form" sx={{
                            m: '16px 24px 10px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '295px',
                            height: '36px',
                            bgcolor: '#0F05180D',
                            boxShadow: 'none'
                        }}>
                            <IconButton type="button" aria-label="search" sx={{
                                p: '7px 6px 7px 16px',
                            }}>
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{
                                    fontSize: '16px',
                                    lineHeight: '19.41px',
                                    fontFamily: 'Gilroy',
                                    fontWeight: '400',
                                }}
                                placeholder="Search packages, users or apps"
                                inputProps={{ 'aria-label': 'Search packages, users or apps' }}
                            />
                        </Paper>
                        {MenuList.map((menubar) =>
                            <MenuItem className="menu123" onClick={handleClose} sx={{
                                p: '10px 24px',
                                fontFamily: 'Gilroy',
                                fontWeight: '600',
                                lineHeight: '19.41px',
                            }}>
                                {menubar.menu}</MenuItem>
                        )}
                        <Box width={'319px'} border={'1px solid #0F05180D'} margin={'10px auto'}></Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Image style={{ padding: '10px 8px 10px 24px' }} alt="img" src={menu_icon} />
                            <Typography className="Gilroy_600" lineHeight={'19.9px'}>CLI</Typography>
                        </Box>
                        <Box width={'319px'} border={'1px solid #0F05180D'} margin={'10px auto'}></Box>
                        <Typography className="Gilroy_600" padding={'10px 0 16px 24px'} color={'#00000080'} lineHeight={'19.41px'}>Tools</Typography>
                        <Typography className="Gilroy_600" padding={'0 0 16px 24px'} lineHeight={'19.9px'}>Visual Studio Code Extension</Typography>
                    </Menu>
                </Box>
                
            </Container>
        </Wrapper>
    )
}

export default Header
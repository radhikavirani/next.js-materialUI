"use client"
import { Box, Container, Typography } from "@mui/material"
import Runtimeicon from './../../assets/img/Runtime.svg'
import Image from "next/image"
import CommonBtn from "../Commenbtn"
import CommenBox from "../Commenbox"
import i1 from './../../assets/img/i1.svg'
import i2 from './../../assets/img/i2.svg'
import i3 from './../../assets/img/i3.svg'
import i4 from './../../assets/img/i4.svg'
import i5 from './../../assets/img/i5.svg'
import i6 from './../../assets/img/i6.svg'
import logo from './../../assets/img/Grouplogo.svg'
import img1 from './../../assets/img/runtimeimg2.svg'
import img2 from './../../assets/img/runtimeimg1.svg'
import box_shadow from './../../assets/img/box_shadow.png'
import Wrapperrun from "./style"


const iconsData = [
    { img: i1 },
    { img: i2 },
    { img: i3 },
    { img: i4 },
    { img: i5 },
    { img: i6 },
]

const Runtime = () => {
    return (
        <Wrapperrun>
            <Container>
                <Box className="main-flex" marginBottom={'8px'}>
                    <Box className="line"></Box>
                </Box>
                <Box className="main-flex">
                    <CommonBtn title="Runtime" icon={Runtimeicon} showAerrow={false} />
                </Box>
                <Box className="main-flex">
                    <Typography className="run-tx Gilroy_600">Run the world</Typography>
                </Box>
                <Box className="main-flex">
                    <Typography className="detail-gap detail-tx Gilroy_500 text-align">Using a binary for each platform and chip is the past. Rise above with lightweight containerized apps that simply run everywhere.</Typography>
                </Box>
                <Box position={'relative'} className="main-flex">
                    <Image className="box_shadow" alt="img" src={box_shadow} />
                    <Box className="box-gradient position-r" margin={'auto'} marginTop={'64px'}>
                        <Box width={'100%'} position={'relative'} zIndex={100}>
                            <Box className="main-flex flex-wrap">
                                {iconsData.map((icon) =>
                                    <Box className="icon d-none">
                                        <Image className="icon" alt="i1" src={icon.img} />
                                    </Box>
                                )}
                            </Box>
                            <Box className="main-flex">
                                <Typography className="detail-tx tx-color Gilroy_500 text-align">Supports almost every programming language</Typography>
                            </Box>
                        </Box>
                        <Box position={'absolute'}>
                            <Image className="circle1" alt="img" src={img1} />
                            <Image className="circle2" alt="img" src={img2} />
                        </Box>
                        <CommenBox title="Truly universal, runs everywhere & fast as native." text="See more info about Runtime" />
                    </Box>
                </Box>

                <Box className="logo-bg" marginTop={'64px'}>
                    <Typography className="detail-space detail-tx Gilroy_500 text-align">“This programming tool makes it easier for apps to work anywhere”</Typography>
                    <Image className="logo" alt="logo" src={logo} />
                </Box>
            </Container>
        </Wrapperrun>
    )
}

export default Runtime
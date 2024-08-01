"use client"
import React from "react";
import CommonBtn from "../Commenbtn";
import { Box, Container, Typography } from "@mui/material"
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import icon0 from './../../assets/img/Package icon 12.svg'
import icon1 from './../../assets/img/Package icon 12.svg'
import icon2 from './../../assets/img/Frame 48097762.png'
import icon3 from './../../assets/img/layer1.svg'
import icon4 from './../../assets/img/Unofficial_JavaScript_logo_2 1.svg'
import icon5 from './../../assets/img/Unofficial_JavaScript_logo_2 1.svg'
import icon6 from './../../assets/img/Group 48095749.svg'
import icon7 from './../../assets/img/Group.svg'
import icon8 from './../../assets/img/php 3.svg'
import icon9 from './../../assets/img/Frame 48097762.svg'
import icon10 from './../../assets/img/Group 48095750.svg'
import icon11 from './../../assets/img/Vector.svg'
import icon12 from './../../assets/img/Vector (1).svg'
import icon13 from './../../assets/img/Group 48095748.svg'
import icon14 from './../../assets/img/Group (1).svg'
import icon15 from './../../assets/img/Group 48095751.svg'
import icon16 from './../../assets/img/Group (1..).svg'
import icon17 from './../../assets/img/c.svg'
import icon18 from './../../assets/img/go.svg'
import icon20 from './../../assets/img/opera-original.png'
import icon21 from './../../assets/img/c++.svg'
import icon22 from './../../assets/img/and.svg'
import icon23 from './../../assets/img/Group (1).svg'
import Registryicon from './../../assets/img/Wasmer products.svg'
import Runtimeicon from './../../assets/img/Runtime.svg'
import Frameicon from './../../assets/img/Frame 48097760.svg'
import CodeBox from "../Codebox";
import Frame from "./style"

const iconsData = [
    { img: icon0, title: 'J!' },
    { img: icon1, title: 'python' },
    { img: icon2, title: 'Tantivy' },
    { img: icon3, title: 'Tantivy' },
    { img: icon5, title: 'Java' },
    { img: icon6, title: 'Python' },
    { img: icon11 },
    { img: icon12 },
    { img: icon5 },
    { img: icon13 },
    { img: icon14 },
    { img: icon3 },
    { img: icon22 },
    { img: icon12 },
    { img: icon2 },
    { img: icon18 }
]
const iconsData1 = [
    { img: icon4, title: 'Cowsay' },
    { img: icon5, title: 'Java' },
    { img: icon6, title: 'Python' },
    { img: icon7, title: 'Tantivy' },
    { img: icon10, title: 'Cowsay' },
    { img: icon9, title: 'Quick JS' },
    { img: icon18 },
    { img: icon15 },
    { img: icon10 },
    { img: icon1 },
    { img: icon16 },
    { img: icon17 },
    { img: icon18 },
    { img: icon18 },
    { img: icon0 },
    { img: icon12 }

]
const iconsData2 = [
    { img: icon8, title: 'PHP' },
    { img: icon9, title: 'Quick JS'},
    { img: icon10, title: 'Cowsay' },
    { img: icon0, title: 'J!' },
    { img: icon3, title: 'Tantivy' },
    { img: icon15 },
    { img: icon18 },
    { img: icon20 },
    { img: icon21 },
    { img: icon22 },
    { img: icon10 },
    { img: icon23 },
    { img: icon17 },
    { img: icon1 },
    { img: icon16 },
    { img: icon5 }

]

const   Publish_hero = () => {
    return (
        <Frame>
            <Box className="position-r" justifyContent={'center'}>
                <Typography className="title-tx Gilroy_400 text-align">Run, Publish & Deploy any code – anywhere</Typography>
                <Box overflow={'hidden'}>
                    <Box display={'flex'} marginBottom={'32px'} className="irow_1">
                        {iconsData.map((icon) =>
                            <Box className="icon d-none">
                                <Image className="icon-img" alt="img" src={icon.img} />
                                {icon.title && <Typography className="icon1-tx Gilroy_600">{icon.title}</Typography>}
                            </Box>
                        )}
                    </Box>
                    <Box display={'flex'} marginBottom={'32px'} className="irow_2">
                            {iconsData1.map((icon2) =>
                                <Box className="icon d-none">
                                    <Image className="icon-img" alt="img" src={icon2.img} />
                                    {icon2.title && <Typography className="icon1-tx Gilroy_600">{icon2.title}</Typography>}
                                </Box>
                            )}
                    </Box>
                    <Box display={'flex'} className="irow_3">
                        {iconsData2.map((icon3) =>
                            <Box className="icon d-none">
                                <Image className="icon-img" alt="img" src={icon3.img} />
                                {icon3.title && <Typography className="icon1-tx Gilroy_600">{icon3.title}</Typography>}
                            </Box>
                        )}
                    </Box>
                </Box>
                <Container>
                <CodeBox />
                </Container>
                <Typography className="detail-tx detail-gap Gilroy_500 text-align">Serve sandboxed WebAssembly apps anywhere through a single runtime and do in days what others do in months.</Typography>
                    <Typography className="end-tx text-align Gilroy_600">Reach for the stars, we do too.</Typography>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Box className="btn btn-border cursor main-flex">
                            <Typography className="btn-tx Gilroy_600">15,000</Typography>
                            <StarIcon className="star-icon" />
                            <Typography className="line btn-border"></Typography>
                            <GitHubIcon className="git-icon" />
                            <ArrowOutwardIcon />
                        </Box>
                    </Box>

                    <Box className="main-tx">
                        <Box className="main-flex btn-pdg unflex">
                            <Typography className="run-tx Gilroy_600">Create apps that</Typography>
                            <CommonBtn title="Run" icon={Runtimeicon} showAerrow={true} />
                            <Typography className="run-tx Gilroy_600">everywhere.</Typography>
                        </Box>
                        <Box className="main-flex btn-pdg unflex">
                            <CommonBtn title="Publish" icon={Registryicon} showAerrow={true} />
                            <Typography className="run-tx tx-hide Gilroy_600">and share with the community</Typography>
                            <Typography className="run-tx tx-show Gilroy_600">and share with everyone</Typography>
                        </Box>
                        <Box className="main-flex btn-pdg unflex">
                            <Typography className="run-tx tx-hide1 Gilroy_600">and</Typography>
                            <CommonBtn title="Deploy" icon={Frameicon} showAerrow={true} />
                            <Typography className="run-tx Gilroy_600">to the edge, globally.</Typography>
                        </Box>
                    </Box>
            </Box>
        </Frame>
    )
}

/* xs, extra-small: 0px
   sm, small: 600px
   md, medium: 900px
   lg, large: 1200px
   xl, extra-large: 1536px
   */

export default Publish_hero
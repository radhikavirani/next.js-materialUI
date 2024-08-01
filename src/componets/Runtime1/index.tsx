"use client"
import { Box, Container, Typography } from "@mui/material"
import Registryicon from './../../assets/img/Wasmer products.svg'
import CommonBtn from "../Commenbtn"
import Image from "next/image"
import CommenLogo from "../Commenlogo"
import CommenBox from "../Commenbox"
import icon from './../../assets/img/round.svg'
import icon1 from './../../assets/img/library.svg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import icon3 from './../../assets/img/download.svg'
import svg1 from './../../assets/img/Package icon.svg'
import svg2 from './../../assets/img/Package icon (1).svg'
import svg3 from './../../assets/img/Package icon (2).svg'
import img1 from './../../assets/img/runtime2_img1.svg'
import img2 from './../../assets/img/runtime2_img2.svg'
import box_shadow from './../../assets/img/box-shadow.png'
import Sectionrun from "./style"

const cardData = [
    {
        img: svg2,
        title1: 'mozilla',
        title2: 'spidermonkey',
        text: 'SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects.',
        style: 'display-none'
    },
    {
        img: svg1,
        title1: 'sqlite',
        title2: 'sqlite',
        text: 'SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine',
        style: 'w-card'
    },
    {
        img: svg3,
        title1: 'syrusakbary',
        title2: 'r2',
        text: 'Scowsay is a program that generates ASCII pictures of a cow with a message',
        style: 'display-none'
    }
]

const Runtime1 = () => {
    return (
        <Sectionrun>
            <Container>
                <Box className="main-flex">
                    <Box className="line" width={'2px'} height={'144px'} bgcolor={'black'} marginBottom={'8px'}></Box>
                </Box>
                <Box className="main-flex">
                    <CommonBtn title="Registry" icon={Registryicon} showAerrow={false} />
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'end'}>
                    <Image className="icon-hide" alt="icon" src={icon} />
                    <Typography className="run-tx Gilroy_600" paddingLeft={'22px'}>Unbound collaboration</Typography>
                </Box>
                <Box className="main-flex tx-width" width={'720px'} margin={'auto'}>
                    <Typography className="detail-gap detail-tx Gilroy_500 text-align">Packages are limited by their languages no more. Collaborate across stacks, leverage all and contribute your own.</Typography>
                </Box>
            </Container>
            <Box className="main-flex" position={'relative'}>
                <Image className="box-shadow" alt="img" src={box_shadow} />
                <Box className="box-gradient position-r" margin={'auto'} marginTop={'64px'}>
                    <Box className="overflow" display={'flex'} justifyContent={'center'} marginBottom={'32px'}>
                        {cardData.map((card) =>
                            <Box width={'415px'} className={card.style} display={'grid'} margin={'0 16px'} bgcolor={'white'} padding={'32px'} border={'1px solid #83838380'} borderRadius={'12px'} boxShadow={'0px 0px 20px #00000038'}>
                                <Box display={'flex'} marginBottom={'16px'} alignItems={'center'}>
                                    <Image alt="img" src={card.img} />
                                    <Typography paddingLeft={'16px'} paddingRight={'10px'} fontSize={'22px'} className="Gilroy_600">{card.title1}</Typography>
                                    <Box className="short-line"></Box>
                                    <Typography fontSize={'22px'} paddingLeft={'6px'} className="Gilroy_600">{card.title2}</Typography>
                                </Box>
                                <Box>
                                    <Typography className="Gilroy_600" color={'#00000080'}>{card.text}</Typography>
                                </Box>
                                <Box display={'flex'} alignItems={'end'}>
                                    <Image alt="img" src={icon1} />
                                    <Box height={'26px'} width={'1px'} bgcolor={'#68686880'} margin={'0 24px'}></Box>
                                    <FavoriteBorderIcon className="icon-color" />
                                    <Typography className="Gilroy_600" color={'#00000080'} padding={'0 16px 0 8px'}>574</Typography>
                                    <Image alt="img" src={icon3} />
                                    <Typography className="Gilroy_600" color={'#00000080'} paddingLeft={'8px'}>574</Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
            <Container>
                <CommenBox title="Truly universal, runs everywhere & fast as native." text="See more info about Runtime" />
                <CommenLogo />
            </Container>
        </Sectionrun>
    )
}
export default Runtime1
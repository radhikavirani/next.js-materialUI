"use client"
import { Box, Container, Typography } from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logo from './../../assets/img/Logo.png'
import box_shadow from './../../assets/img/box_gradient.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import slack from './../../assets/img/slack.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import CommenLogo from "../Commenlogo"
import Image from "next/image"
import Sectionbox from "./style"


const footerData = [
    { title: 'Packages' },
    { title: 'Blog' }
]
const footerData2 = [
    { title: 'Run' },
    { title: 'Publish' },
    { title: 'Deploy' }
]
const footerData3 = [
    { title: 'Packages' },
    { title: 'Blog' }
]
const footerData4 = [
    { title: 'Run' },
    { title: 'Publish' },
    { title: 'Deploy' }
]
const footerData5 = [
    { title: 'Documentation' },
    { title: 'Runtime' },
    { title: 'Registry' },
    { title: 'Deploy' }
]
const footerData6 = [
    { title: 'Run package' },
    { title: 'Publish package' },
    { title: 'Deploy package' }
]
const footerData7 = [
    { title: 'Imprint' },
    { title: 'Privacy' },
    { title: 'Terms' }
]

const Runtimebox = () => {
    return (
        <Sectionbox>
            <Box bgcolor={'#EFF1F6'}>
                <Container>
                    <Box marginBottom={'54px'} paddingTop={'88px'}>
                        <Typography className="Gilroy_600" fontSize={'22px'} lineHeight={'30.8px'} paddingBottom={'24px'} textAlign={'center'}>We are trusted by the best</Typography>
                        <CommenLogo />
                    </Box>
                    <Box className="main-flex" position={'relative'}>
                        <Image className="box_gradient" alt="img" src={box_shadow} />
                        <Box className="position-r" margin={'auto'} marginTop={'64px'}>
                            <Box position={'relative'} zIndex={100}>
                                <Box className="main-flex" margin={'auto'} bottom={'0'}>
                                    <Box className="pdg-top" width={'100%'} bgcolor={'black'} zIndex={'1'} borderRadius={'12px'} padding={'64px 32px 32px 64px'}>
                                        <Box>
                                            <Typography className="get-tx Gilroy_600" color={'white'} fontSize={'48px'} lineHeight={'67.2px'} paddingBottom={'24px'}>Get Started</Typography>
                                            <Typography className="discover-tx Gilroy_500 grey" maxWidth={'943px'} fontSize={'22px'} lineHeight={'30.8px'}>Discover a new paradigm of software development. Create your first package, send it running straight from the shell and deploy it to the edge, globally.</Typography>
                                        </Box>
                                        <Box display={'flex'} justifyContent={'end'}>
                                            <Box className="pdg-bottom" width={'54px'} height={'55px'} marginTop={'64px'} borderRadius={'50px'} bgcolor={'#FBFBFC'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                <ArrowOutwardIcon />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Sectionbox>
    )
}
export default Runtimebox
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
import Sectionfooter from "./style"


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

const Runtimefooter = () => {
    return (
        <Sectionfooter>
            <Box bgcolor={'#EFF1F6'}>
                <Container>
                    <Box className="footer-tx" padding={'64px 0'} display={'flex'} justifyContent={'space-evenly'}>
                        <Box className="logo-tx" width={'173px'}>
                            <Image className="cursor" alt="img" src={logo} />
                            <Typography className="Gilroy_400" lineHeight={'22.4px'} padding={'24px 0'}>Making software universally accessible</Typography>
                            <Box display={'flex'} paddingBottom={'17px'}>
                                <TwitterIcon className="icon-color" />
                                <Image className="slack" alt="slack" src={slack} />
                                <GitHubIcon className="icon-color" />
                            </Box>
                        </Box>
                        <Box className="blank-box" width={'192.75px'}></Box>

                        <Box className="text-hide" width={'192.75px'}>
                            <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} paddingBottom={'16px'}>Explore</Typography>
                            {footerData.map((tx) =>
                                <Box className="icon">
                                    <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} padding={'8px 0'} color={'#00000080'}>{tx.title}</Typography>
                                </Box>
                            )}
                        </Box>
                        <Box className="text-hide" width={'192.75px'}>
                            <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} paddingBottom={'16px'}>Products</Typography>
                            {footerData2.map((tx2) =>
                                <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} padding={'8px 0'} color={'#00000080'}>{tx2.title}</Typography>
                            )}
                        </Box>
                        <Box className="tx-none" width={'192.75px'}>
                            <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} paddingBottom={'16px'}>Explore</Typography>
                            {footerData3.map((tx3) =>
                                <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} padding={'8px 0'} color={'#00000080'}>{tx3.title}</Typography>
                            )}
                            <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} paddingBottom={'16px'} paddingTop={'40px'}>Products</Typography>
                            {footerData4.map((tx4) =>
                                <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} padding={'8px 0'} color={'#00000080'}>{tx4.title}</Typography>
                            )}
                        </Box>
                        <Box width={'192.75px'} className="developers">
                            <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} paddingBottom={'16px'}>Developers</Typography>
                            {footerData5.map((tx5) =>
                                <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} padding={'8px 0'} color={'#00000080'}>{tx5.title}</Typography>
                            )}
                            <Box className="hide">
                                {footerData6.map((tx6) =>
                                    <Typography className="Gilroy_400" textAlign={'left'} lineHeight={'19.09px'} padding={'8px 0'} color={'#00000080'}>{tx6.title}</Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Container>
                <Box display={'flex'} justifyContent={'center'}>
                    <Box className="copyright" width={'1152px'} padding={'24px 0 24px 40px'} borderTop={'1px solid #0f051821'} display={'flex'}>
                        {footerData7.map((tx7) =>
                            <Typography className="Gilroy_400" color={'#00000080'} lineHeight={'19.09px'} paddingRight={'32px'}>{tx7.title}</Typography>
                        )}
                    </Box>
                </Box>
            </Box>
        </Sectionfooter>
    )
}
export default Runtimefooter
"use client"
import { Box, Container, Typography } from "@mui/material"
import Frameicon from './../../assets/img/Frame 48097760.svg'
import CommonBtn from "../Commenbtn"
import CommenBox from "../Commenbox"
import CommenLogo from "../Commenlogo"
import Image from "next/image"
import img1 from './../../assets/img/img1.png'
import img2 from './../../assets/img/img2.png'
import img3 from './../../assets/img/img3.png'
import wp_logo from './../../assets/img/wordpresslogo.svg'
import n_logo from './../../assets/img/n_logo.svg'
import dj_logo from './../../assets/img/dj_logo.svg'
import icon1 from './../../assets/img/Tone.svg'
import icon2 from './../../assets/img/Tone (1).svg'
import Ellipse1 from './../../assets/img/Ellipse1.svg'
import boxshadow from './../../assets/img/boxshadow.png'
import Ellipse2 from './../../assets/img/Ellipse2.png'
import Ellipse3 from './../../assets/img/Ellipse3.svg'
import Ellipse4 from './../../assets/img/Ellipse4.svg'
import Sectionend from "./style"

const Runtime2 = () => {
    return (
        <Sectionend>
            <Container>
                <Box className="main-flex">
                    <Box className="line" width={'2px'} height={'144px'} bgcolor={'black'} marginBottom={'8px'}></Box>
                </Box>
                <Box className="main-flex">
                    <CommonBtn title="Edge" icon={Frameicon} showAerrow={false} />
                </Box>
                <Box className="main-flex">
                    <Typography className="run-tx Gilroy_600" paddingLeft={'22px'}>Above the clouds</Typography>
                </Box>
                <Box className="main-flex tx-pdg" width={'720px'} margin={'auto'}>
                    <Typography className="detail-gap detail-tx Gilroy_500 text-align">Get the scalability of serverless and the reusability of cloud. Deploy to the edge, save your users time and yourself money.</Typography>
                </Box>
                <Box className="main-flex" position={'relative'}>
                    <Image className="boxshadow" alt="img" src={boxshadow} />
                    <Box className="box-gradient position-r" margin={'auto'} marginTop={'64px'}>
                        <Box className="main-flex" height={'385px'} position={'relative'} zIndex={100}>
                            <Box className="img1" bgcolor={'white'} border={'1px solid #83838380'} borderRadius={'12px'} boxShadow={'0px 0px 20px #00000038'}>
                                <Box width={'100%'} height={'229px'}>
                                    <Image className="img-border" alt="img" src={img2} />
                                </Box>
                                <Box width={'100%'} height={'131px'} display={'flex'} alignItems={'center'}>
                                    <Image className="wp-logo" alt="n-logo" src={n_logo} />
                                    <Typography className="Gilroy_600" paddingLeft={'16px'} fontSize={'20px'} lineHeight={'28px'}>Next</Typography>
                                </Box>
                            </Box>
                            <Box className="img2" bgcolor={'white'} border={'1px solid #83838380'} borderRadius={'12px'} boxShadow={'0px 0px 20px #00000038'}>
                                <Box width={'100%'} height={'229px'}>
                                    <Image className="img-border" alt="img" src={img1} />
                                </Box>
                                <Box width={'100%'} height={'80px'} display={'flex'} alignItems={'center'}>
                                    <Image className="wp-logo" alt="wp-logo" src={wp_logo} />
                                    <Typography className="Gilroy_600" paddingLeft={'16px'} fontSize={'20px'} lineHeight={'28px'}>Wordpress</Typography>
                                </Box>
                            </Box>
                            <Box className="img3" height={'309px'} bgcolor={'white'} border={'1px solid #83838380'} borderRadius={'12px'} boxShadow={'0px 0px 20px #00000038'}>
                                <Box width={'100%'} height={'229px'}>
                                    <Image className="img-border" alt="img" src={img3} />
                                </Box>
                                <Box width={'100%'} height={'98px'} display={'flex'} alignItems={'center'}>
                                    <Image className="wp-logo" alt="dj-logo" src={dj_logo} />
                                    <Typography className="Gilroy_600" paddingLeft={'16px'} fontSize={'20px'} lineHeight={'28px'}>Django</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="main-flex margin-bottom  d-block" margin={'32px 0'} position={'relative'} zIndex={'1'}>
                            <Box className="icon-tx" display={'flex'} alignItems={'center'}>
                                <Image className="icon-size" alt="icon1" src={icon1} />
                                <Typography className="Gilroy_600 tx-pdgright" color={'white'} padding={'0 40px 0 8px'} fontSize={'22px'} lineHeight={'30.8px'}>Infinite scalability</Typography>
                            </Box>
                            <Box className="icon-tx" display={'flex'} alignItems={'center'}>
                                <Image className="icon-size" alt="icon2" src={icon2} />
                                <Typography className="Gilroy_600" color={'white'} paddingLeft={'8px'} fontSize={'22px'} lineHeight={'30.8px'}>Instant cold starts</Typography>
                            </Box>
                        </Box>
                        <Image className="Ellipse1" alt="Ellipse1" src={Ellipse1} />
                        <Image className="Ellipse2" alt="Ellipse2" src={Ellipse2} />
                        <Image className="Ellipse3" alt="Ellipse3" src={Ellipse3} />
                        <Image className="Ellipse4" alt="Ellipse4" src={Ellipse4} />
                    </Box>
                </Box>
                <CommenBox title="Truly universal, runs everywhere & fast as native." text="See more info about Runtime" />
                <CommenLogo />
            </Container>

        </Sectionend>
    )
}
export default Runtime2
"use client"
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import social from './../../assets/img/Socials.svg'
import next from './../../assets/img/next.svg'
import next1 from './../../assets/img/next1.svg'
import menu_icon from './../../assets/img/navbaricon.svg'
import Image from "next/image";
import Drop2 from "./style";
import { title } from "process";

type Props = {
    title: string;
}
const Dropdown2: FC<Props> = ({title}) => {
    return (
        <Drop2>
            <Box className="developers">
                <Typography className="Gilroy_600 cursor menu">{title}</Typography>
                <Box className="dropdown2">
                    <Box marginLeft={'20px'}>
                        <Box display={'flex'} margin={'32px auto 20px 20px'}>
                            <Image alt="img" src={social} />
                            <Box display={'flex'}>
                                <Typography className="Gilroy_600" lineHeight={'22.4px'} padding={'5px 8px 5px 12px'}>Documentation</Typography>
                                <Image alt="img" style={{ height: '8px', width: '8px', padding: '4px 0 10px 0' }} src={next} />
                            </Box>
                        </Box>
                        <Box display={'flex'}>
                            <Box width={'120px'} paddingLeft={'12px'} marginRight={'32px'}>
                                <Typography className="Gilroy_600" lineHeight={'19.41px'} paddingBottom={'16px'} color={'#00000080'}>Get started</Typography>
                                <Typography className="Gilroy_600" lineHeight={'19.41px'} paddingBottom={'16px'}>Runtime</Typography>
                                <Typography className="Gilroy_600" lineHeight={'19.41px'} paddingBottom={'16px'}>Registry</Typography>
                                <Typography className="Gilroy_600" lineHeight={'19.41px'} paddingBottom={'20px'}>Edge</Typography>
                            </Box>
                            <Box width={'188px'} paddingLeft={'12px'} marginRight={'25px'}>
                                <Typography className="Gilroy_600" lineHeight={'19.41px'} paddingBottom={'16px'} color={'#00000080'}>Guides</Typography>
                                <Typography className="Gilroy_600" lineHeight={'19.41px'} paddingBottom={'16px'}>Run a package</Typography>
                                <Typography className="Gilroy_600" lineHeight={'19.41px'} paddingBottom={'16px'}>Publish a package</Typography>
                                <Typography className="Gilroy_600" lineHeight={'19.41px'} paddingBottom={'20px'}>Deploy your website</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={'345px'} border={'1px solid #0F05180D'} margin={'auto'}></Box>
                    <Box margin={'21.5px 0 21.5px 32px'} display={'flex'} alignItems={'center'}>
                        <Image alt="img" src={menu_icon} />
                        <Box display={'flex'}>
                            <Typography className="Gilroy_600" padding={'0 8px 0 12px'} lineHeight={'19.9px'}>CLI</Typography>
                            <Image alt="img" style={{ height: '8px', width: '8px', padding: '4px 0 10px 0' }} src={next1} />
                        </Box>
                    </Box>
                    <Box width={'345px'} border={'1px solid #0F05180D'} margin={'auto'}></Box>
                    <Box marginLeft={'20px'}>
                        <Typography className="Gilroy_600" padding={'20px 0 16px 12px'} color={'#00000080'} lineHeight={'19.41px'}>Tools</Typography>
                        <Typography className="Gilroy_600" padding={'0 0 20px 12px'} lineHeight={'19.9px'}>Visual Studio Code Extension</Typography>
                    </Box>
                    <Box width={'377px'} padding={'24px'} bgcolor={'black'} borderRadius={'12px'} margin={'0 4px 4px 4px'}>
                        <Typography className="Gilroy_400" lineHeight={'19.41px'} marginBottom={'16px'} color={'#fff9f9b3'}>SDK’S</Typography>
                        <Box display={'flex'}>
                            <Typography className="Gilroy_600" lineHeight={'19.41px'} marginRight={'24px'} color={'#fff'}>Python</Typography>
                            <Typography className="Gilroy_600" lineHeight={'19.41px'} marginRight={'24px'} color={'#fff'}>Rust</Typography>
                            <Typography className="Gilroy_600" lineHeight={'19.41px'} marginRight={'24px'} color={'#fff'}>Go</Typography>
                            <Typography className="Gilroy_600" lineHeight={'19.41px'} marginRight={'24px'} color={'#fff'}>C</Typography>
                            <Typography className="Gilroy_600" lineHeight={'19.41px'} marginRight={'24px'} color={'#fff'}>Rust</Typography>
                            <Typography className="Gilroy_600" lineHeight={'19.41px'} marginRight={'24px'} color={'#fff'}>Docker</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Drop2>
    )
}
export default Dropdown2
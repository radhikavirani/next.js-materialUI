"use client"
import React, { FC } from "react"
import { Box, Button, Typography } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import circle1 from './../../assets/img/Rectangle 40562.svg'
import codebox from './../../assets/img/codBoxShadow.png'
import circle2 from './../../assets/img/Rectangle 40563.svg'
import Image from "next/image";
import Codebox from "./style";

const CodeBox: FC = () => {
    return (
        <Codebox>
            <Box className="main-flex">
                <Image className="box_shadow" alt="img" src={codebox} />
                <Box className="img-bg position-a main-flex" top={'297px'}>
                    <Box className="black-box" width={'504px'} height={'336px'} border={'4px solid black'} borderRadius={'12px'} bgcolor={'black'} position={'relative'} zIndex={1}>
                        <Box className="code-box" padding={'16px'} marginBottom={'4px'} borderRadius={'8px'}>
                            <Box position={'relative'}>
                            <Typography className="Gilroy_600 grey">Install</Typography>
                            <Typography className="zeitung_600" fontSize={'14px'} color={'#FBFBFC'} paddingTop={'8px'}>$ curl https://get.wasmer.io -sSfL | sh</Typography>
                            </Box>
                        </Box>
                        <Box className="code-box2" padding={'16px'} marginBottom={'4px'} borderRadius={'8px'} position={'relative'}>
                            <Typography className="Gilroy_600 grey">Run</Typography>
                            <Typography className="zeitung_600" fontSize={'14px'} color={'#FBFBFC'} lineHeight={'25px'} padding={'8px 0 39px 0'}>$ wasmer run python/python -- -c <span className="code-tx">{`"for x in range(5): print(f'{x} square: {x*x}')"`}</span></Typography>
                            <Button className="run-btn zeitung_600" variant="outlined">Run online</Button>
                        </Box>
                        <Box display={'flex'} padding={'16px'} marginBottom={'4px'} borderRadius={'8px'}>
                            <Typography className="Gilroy_600 grey" paddingRight={'8px'}>Running</Typography>
                            <Box className="open1">
                                <Typography className="Gilroy_600 grey next-icon" paddingRight={'8px'}>Python<KeyboardArrowDownIcon className="next-icon Gilroy_600" /></Typography>
                                <Box className="menu1" border={'1px solid #ababab'} borderRadius={'4px'} padding={'10px'} bgcolor={'white'}>
                                    <Typography>python 1</Typography>
                                    <Typography>python 2</Typography>
                                    <Typography>python 3</Typography>
                                </Box>
                            </Box>
                            <Typography className="Gilroy_600 grey" paddingRight={'6px'}>in</Typography>
                            <Box className="open2">
                            <Typography className="Gilroy_600 grey next-icon" paddingRight={'8px'}>CLI<KeyboardArrowDownIcon className="next-icon Gilroy_600" /></Typography>
                                <Box className="menu2" border={'1px solid #ababab'} borderRadius={'4px'} padding={'10px'} bgcolor={'white'}>
                                    <Typography>CLI 1</Typography>
                                    <Typography>CLI 2</Typography>
                                    <Typography>CLI 3</Typography>
                                </Box>
                            </Box>
                            
                        </Box>
                    </Box>
                    <Box className="circles">
                        <Image className="circle1" alt="img" src={circle1} />
                        <Image className="circle2" alt="img" src={circle2} />
                    </Box>
                </Box>
            </Box>
        </Codebox>
    )
}
export default CodeBox
"use client"
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import runtime_img from './../../assets/img/Runtime.svg'
import Registry_img from './../../assets/img/Wasmer products.svg'
import Stack_img from './../../assets/img/Frame 48097760.svg'
import Image from "next/image";
import Drop from "./style"

type Props = {
    title: string;
}
const Dropdown: FC<Props> = ({title}) => {
    return (
        <Drop>
            <Box className="products">
                <Typography className="Gilroy_600 cursor menu">{title}</Typography>
                <Box className="dropdown1">
                    <Box display={'flex'} marginBottom={'24px'}>
                        <Box height={'52px'} width={'52px'} borderRadius={'50px'} bgcolor={'black'} marginRight={'24px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Image alt="img" src={runtime_img} />
                        </Box>
                        <Box>
                            <Typography className="Gilroy_600" lineHeight={'22.4px'} marginBottom={'8px'}>Runtime</Typography>
                            <Typography className="Gilroy_400" lineHeight={'22.4px'} color={'#00000080'}>Run any code anywhere</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} marginBottom={'24px'}>
                        <Box height={'52px'} width={'52px'} borderRadius={'50px'} bgcolor={'black'} marginRight={'24px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Image alt="img" src={Registry_img} />
                        </Box>
                        <Box>
                            <Typography className="Gilroy_600" lineHeight={'22.4px'} marginBottom={'8px'}>Registry</Typography>
                            <Typography className="Gilroy_400" lineHeight={'22.4px'} color={'#00000080'}>Create, publish, collaborate</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'}>
                        <Box height={'52px'} width={'52px'} borderRadius={'50px'} bgcolor={'black'} marginRight={'24px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Image alt="img" src={Stack_img} />
                        </Box>
                        <Box>
                            <Typography className="Gilroy_600" lineHeight={'22.4px'} marginBottom={'8px'}>Stack</Typography>
                            <Typography className="Gilroy_400" lineHeight={'22.4px'} color={'#00000080'}>Deploy above the clouds</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Drop>
    )
}
export default Dropdown
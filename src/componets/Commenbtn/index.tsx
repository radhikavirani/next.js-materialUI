"use client"
import {Box, Button} from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image, { StaticImageData } from "next/image"
import { FC } from "react"
import Commen from "./style"

type Props = {
    title: string;
    icon: StaticImageData;
    showAerrow: boolean;
}

const CommonBtn: FC<Props> = ({ title, icon, showAerrow }) => {
    return (
        <Commen>
            <Button variant="contained" className="black-btn zeitung_700">
                <Image className="img" src={icon} alt="img" />
                <Box fontSize={'24px'} lineHeight={'33.6px'}>{title}</Box>
                {showAerrow && <ArrowOutwardIcon className="arrow-icon"/>}
            </Button>
        </Commen>
    )
}
export default CommonBtn;
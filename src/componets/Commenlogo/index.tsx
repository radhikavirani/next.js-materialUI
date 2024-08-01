"use client"
import { FC } from "react"
import logo from './../../assets/img/Grouplogo.svg'
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Commenlogo from "./style";

type Props = {

}

const CommenLogo: FC<Props> = ({ }) => {
    return (
        <Commenlogo>
            <Box className="logo-bg">
                <Typography className="detail-space detail-tx Gilroy_500 text-align">“This programming tool makes it easier for apps to work anywhere”</Typography>
                <Image className="logo" alt="logo" src={logo} />
            </Box>
        </Commenlogo>
    )
}
export default CommenLogo;
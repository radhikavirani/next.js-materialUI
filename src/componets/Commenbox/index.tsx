"use client"
import { Box, Typography } from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { FC } from "react"
import Commenbox from "./style";

type Props = {
    title: string;
    text: string;
}

const CommenBox: FC<Props> = ({ title, text }) => {
    return (
        <Commenbox>
            <Box className="main-flex" marginBottom={'64px'}>
                <Box className="box-pdg flex" width={'804px'} bgcolor={'black'} zIndex={'1'} borderRadius={'24px'} padding={'32px'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                        <Typography className="Gilroy_600 title-tx" color={'white'} fontSize={'28px'} paddingBottom={'8px'}>{title}</Typography>
                        <Typography className="Gilroy_500 grey">{text}</Typography>
                    </Box>

                    <Box className="arrow-btn main-flex" width={'54px'} height={'55px'} borderRadius={'50px'} bgcolor={'#FBFBFC'}>
                        <ArrowOutwardIcon />
                    </Box>
                </Box>
            </Box>
        </Commenbox>
    )
}
export default CommenBox;
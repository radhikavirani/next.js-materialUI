import styled from "styled-components";

const Frame = styled.div`
    .title-tx{
        font-size: 52px;
        line-height: 72.8px;
        max-width: 600px;
        text-align: center;
        margin: auto;
        padding-top: 88px;
        padding-bottom: 106px;
    }
    .icon{
        height: 64px;
        border-radius: 12px;
        border: 1px solid #0F051833;
        background: #FBFBFC;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: 0px 0px 10px #0F051833;
        margin-right: 32px;
    }
    .icon-img{
        padding: 10px 10px;
        width: 44px;
        height: 44px;
    }
    .icon1-tx{
        font-size: 15px;
        line-height: 19px;
        color: #00000080;
        padding: 22.5px 22.5px 22.5px 0;
        white-space: nowrap;
    }
    .irow_1{
        display: flex;
        position: relative;
        left: -35px;
        z-index: 1;
        margin-bottom: 32px;
    }
    .irow_2{
        display: flex;
        position: relative;
        left: -148px;
        z-index: 1;
        margin-bottom: 32px;
    }
    .irow_3{
        display: flex;
        position: relative;
        left: -42px;
        z-index: 1;
        margin-bottom: 32px;
    }
    .detail-gap{
        max-width: 666px;
        margin: auto;
        padding-top: 65px;
    }
    .end-tx{
        font-size: 22px;
        line-height: 31px;
        padding: 48px 0 16px;
    }
    .btn{
        padding: 10px 24px;
    }
    .btn-tx{
        font-size: 22px;
        line-height: 30.8px;
    }
    .star-icon {
        width: 22px;
        height: 22px;
        margin: 0 8px 0 16px;
        color: #EBC645;
    }
    .line{
        height: 32px;
    }
    .git-icon{
        height: 24px;
        width: 24px;
        margin: 0 8px 0 16px;
    }
    .tx-show{
        display: none;
    }
    .registry-btn {
        width: 238px !important;
        height: 54px;
    }
    .deploy-btn{
        width: 221px !important;
        height: 54px;
    }
    .main-tx{
        padding: 144px 0 48px 0;
    }
    .btn-pdg{
        padding: 5px 0;
    }
    .registry-btn{
        width: 204px;
    }
    @media (max-width: 1152px){
        .irow_1 {
            left: -209px;
        }
        .irow_2 {
            left: -222px;
        }
        .irow_3 {
            left: -125px;
        }
    }   
    @media (max-width: 985px){
        .run-tx {
            font-size: 36px;
        }
        .tx-hide,.tx-hide1{
            display: none;
        }
        .tx-show{
            display: block !important;
        }
    }
    @media (max-width: 768px){
        .title-tx {
            font-size: 48px;
            line-height: 67.2px;
            padding-top: 80px;
            padding-bottom: 98px;
        }
        .detail-gap {
            padding-top: 58px;
        }
        .end-tx {
            padding: 40px 0 16px;
        }
        .main-tx {
            padding: 112px 0 40px 0;
        }
        .detail-tx,.end-tx  {
            font-size: 20px;
        }
        .registry-btn {
            width: 218px !important;
            height: 48px;
        }
        .black-btn{
            font-size: 22px;
            padding: 7px 22px 7px 16px;
            margin: 0 16px;
        }
        .irow_1 {
            left: -424px;
        }
        .irow_2 {
            left: -425px;
        }
        .irow_3 {
            left: -342px;
        }
    }
    @media (max-width: 734px){
        .unflex{
            display: grid;
            text-align: center;
            justify-items: center;
        }
        .tx-hide{
            display: block !important;
        }
        .tx-show{
            display: none!important;
        }
        .run-tx {
            font-size: 36px;
            padding: 5px 0;
            line-height: 50px;
        }
    }
    @media (max-width: 602px){
        .position-a {
            position: unset;
        }
        .irow_1,
        .irow_2,
        .irow_3{
            display: none;
        }
        .title-tx {
            padding-bottom: 56px;
            max-width: 397px;
        }
        .detail-gap {
            max-width: 311px;
        }
    }
    @media (max-width: 425px){
        .title-tx{
            padding-left: 24px;
            font-size: 44px;
            padding-right: 24px;
        }
    }

`
export default Frame
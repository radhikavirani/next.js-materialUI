import styled from "styled-components";

const Wrapperrun = styled.section`
    .line{
        height: 144px;
        width: 2px;
        background: linear-gradient(180deg, #0F051800 ,#0F051833);
    }
    .detail-gap {
        max-width: 720px;
        padding-top: 18px;
    }
    .icon{
        padding: 0 9.29px;
        margin-bottom: 16px;
    }
    .tx-color{
        color: white;
        padding-bottom: 16px;
    }
    .box-gradient{
        Width: 868px;
        Height: 232px;
    }
    .box_shadow{
        position: absolute;
        bottom: -38px;
        width: 878px;
        opacity: 0.9;
        filter: blur(49px);
    }
    .circle1{
        opacity: 0.2;
        position: absolute;
        left: 0;
        top: -143px;
        width: 141px;
        height: 276px;
    }
    .circle2{
        opacity: 0.4;
        position: absolute;
        width: 141px;
        height: 276px;
        left: 757px;
        top: -135px;
    }
    .logo-bg {
        display: grid;
        justify-items: center;
        margin: 64px 0 34px 0;
    }
    .detail-space{
        padding-bottom: 24px;
        max-width: 526px;
    }
    .run-tx {
        padding-top: 24px;
    } 
    @media (max-width: 1073px){
        .circle2 {
            left: 691px;
            top: -135px;
        }
        .box-gradient {
            Width: 801px;
        }
        .box-gradient::before {
            width: 801px;
        }
    }
    @media (max-width: 875px){
        .box-gradient::before {
            width: 100%;
        }
        .circle2 {
            left: 615px;
            top: -135px;
        }
        .circle1 {
            left: -37px;
        }
        .run-tx {
            font-size: 40px;
            line-height: 56px;
            text-align: center;
        } 
        .box-gradient {
            Width: 712px;
        }
    }

    @media (max-width: 768px){
        .detail-tx {
            font-size: 20px;
            line-height: 28px;
        }
        .detail-gap {
            max-width: 650px;
            padding-top: 16px;
        }
        .circle1 {
            top: 0;
        }
        .circle2 {
            left: 615px;
            top: -12px;
        }
        .box-gradient {
            Width: auto;
        }
        .box-gradient::before {
            width: 100%;
        }
        .box-gradient{
            display: grid !important;
        }
        .detail-tx {
            font-size: 20px;
            line-height: 28px;
        }
        .box_shadow {
            width: 650px;
        }
    }
    @media (max-width: 576px){
        .box-gradient::before {
            height: 390px;
        }
        .run-btn {
            margin-bottom: 20px;
        }
        .run-tx {
            font-size: 36px;
            line-height: 50.4px;
        }
        .box-gradient {
            margin-top: 56px;
        }
        .detail-tx {
            width: 340px;
        }
        .box-gradient {
            Height: 446px;
        }
        .box-gradient::before {
            height: 449px;
        }
        .flex-wrap{
            flex-wrap: wrap;
            width: 250px;
            margin: auto;
        }
        .detail-tx {
            width: 340px;
        }
        .logo{
            width: 124px;
        }
        .circle1 {
            top: 42px;
            left: -92px;
            opacity: 0.6;
        }
        .circle2 {
            left: 290px;
            opacity: 0.6;
            top: 29px;
        }
        .box_shadow {
            width: 530px;
            bottom: 0;
            height: 500px;
        }
    }
    @media(max-width: 375px){
        .box_shadow {
            width: 463px;
            bottom: 20px;
        }
    }
    @media(max-width: 320px){
        .circle2,
        .circle1 {
            display: none;
        }
        .detail-tx {
            width: 290px;
        }
    }

`
export default Wrapperrun
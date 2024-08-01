import styled from "styled-components";

const Sectionend = styled.section`
    .line{
        height: 144px;
        width: 2px;
        background: linear-gradient(180deg, #0F051800 ,#0F051833);
        margin-bottom: 8px;
    }
    .detail-gap {
        max-width: 720px;
        padding-top: 19.12px;
    }
    .boxshadow{
        position: absolute;
        width: 113%;
        height: 620px;
        top: 71px;
        filter: blur(40px);
    }
    .img-border{
        border-radius: 12px 12px 0 0;
        border-bottom: 1px solid #83838380;
    }
    .wp-logo{
        padding-left: 20px;
    }
    .img1{
        left: 105px;
        bottom: -25px;
        height: 332px;
        position: relative;
        z-index: -1;
    }
    .img2 {
        position: absolute;
        top: 2px;
    }   
    .img3 {
        right: 98px;
        bottom: -37px;
        position: relative;
        z-index: -1;
    }
    .Ellipse1{
        opacity: 0.2;
        position: absolute;
        top: -12px;
        left: -188px;
        rotate: y 0.49turn;
    }
    .Ellipse2{
        position: absolute;
        top: 335px;
        right: -148px;
        opacity: 0.2;
    }
    .Ellipse3{
        opacity: 0.3;
        position: absolute;
        top: 412px;
        right: -142px;
    }
    .Ellipse4{
        opacity: 0.1;
        position: absolute;
        top: 309px;
        right: -19px;
    }
    .run-tx {
        padding-top: 24px;
    } 
    .icon-size{
        width: 32px;
        height: 32px;
    }
    @media (max-width: 900px){
        .run-tx {
            font-size: 40px;
            line-height: 56px;
        }
        .detail-tx {
            font-size: 20px;
            line-height: 28px;
        }
        .detail-gap {
            max-width: 579px;
        }
        .tx-pdg {
            width: auto;
        }
        .img1 {
            left: 174px;
        }
        .img3 {
            right: 171px;
        }
        .boxshadow {
            width: 132%;
            height: 734px;
            top: -36px;
        }
    } 
    @media (max-width: 750px){
        .img1 {
            left: 271px;
        }
        .img2 {
            right: 129px;
        }
        .img3 {
            right: 69px;
        }

    }
    @media (max-width: 528px){
        .d-block{
            display: block;
        }
        .icon-tx{
            justify-content: center;
            margin-bottom: 32px;
        }
        .tx-pdgright{
            padding-right: 0;
        }
        .margin-bottom {
            margin: 24px 0;
        }
        .img1 {
            left: 349px;
        }
        .img2 {
            right: 90px;
        }
        .img3 {
            right: 33px;
        }
    }
    @media (max-width: 375px){
        .logo-bg {
            margin-bottom: 40px;
        }
        .boxshadow {
            width: 155%;
            height: 878px;
            top: -24px;
        }
    }
`
export default Sectionend
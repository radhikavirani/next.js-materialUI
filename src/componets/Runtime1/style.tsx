import styled from "styled-components";

const Sectionrun = styled.section`
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
    .box-shadow{
        position: absolute;
        width: 70%;
        height: 500px;
        filter: blur(28px);
        bottom: -146px;
        opacity: 0.8;
    }
    .overflow{
        position: relative;
        z-index: 1;
    }
    .short-line{
        height: 28.11px;
        width: 1.47px;
        background-color: #00000080;
        rotate: 23deg;
    }
    .icon-color{
        color: #00000080;
    }
    .run-tx {
        padding-top: 24px;
    }
    @media (max-width: 1152px){
        .icon-hide{
            display: none;
        }
        .box-shadow {
            width: 100%;
        }
    }
    @media (max-width: 768px){
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
        .box-shadow {
            width: 122%;
        }
    }
    @media (max-width: 767px){
        .detail-gap,
        .tx-width {
            max-width: 100%;
        }
    }  
    @media (max-width: 576px){
        .display-none{
            display: none;
        }
        .w-card{
            width: auto;
        }
    }
    @media (max-width: 375px){
        .overflow {
            margin-bottom: 24px;
        }
        .logo-bg {
            margin-bottom: 40px;
        }
        .box-gradient{
            margin-top: 56px;
        }
        .m-bootom {
            margin-bottom: 56px;
        }
        .box-shadow {
            width: 145%;
            height: 678px;
            bottom: -281px;
        }
    }
`
export default Sectionrun
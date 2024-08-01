import styled from "styled-components";

const Sectionfooter = styled.section`
    .icon-color{
        color: #ababab;
    }
    .slack{
        margin: 0 16px;
    }
    .tx-none, .hide{
        display: none;
    }
    @media (max-width: 768px){
        .blank-box {
            width: 80.75px;
        }
        .tx-none{
            display: block;
        }
        .text-hide{
            display: none;
        }
    }
    @media (max-width: 576px){
        .blank-box{
            display: none;
        }
        .hide{
            display: block;
        }
        .footer-tx {
            display: grid !important;
            justify-content: start;
            padding-left: 32px;
        }
        .blank-box,
        .developers{
            margin: 40px 0 0 0;
        }
        .logo-tx {
            order: 4;
            margin-top: 56px;
            width: 100%;
        }
        .copyright {
            padding: 20px 0 20px 32px;
        }
    }
`
export default Sectionfooter
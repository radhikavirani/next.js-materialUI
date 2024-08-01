import styled from "styled-components";

const Commenbox = styled.section`
    @media (max-width: 875px){
        .title-tx {
            font-size: 24px;
        }  
    }
    @media (max-width: 768px){
        .box-pdg  {
            width: 616px;
        }
        .arrow-btn {
            width: 50px;
            height: 48px;
        }
    }
    @media (max-width: 734px){
        .box-pdg {
            width: 452px;
        }
        .arrow-btn {
            width: 64px;
        }
    }
    @media (max-width: 576px){
        .box-pdg {
            width: auto;
            // margin: 0 30px;
            display: grid;
        }
        .arrow-btn {
            width: 45px;
            height: 45px;
            margin-top: 24px;
            margin-left: auto;
        }
    }
    @media(max-width: 320px){
        .box-pdg{
            padding: 24px;
        }
    }
`
export default Commenbox
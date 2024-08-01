import styled from "styled-components";

const Sectionbox = styled.section`
    .box_gradient{
        position: absolute;
        top: -26px;
    }
    @media (max-width: 1140px){
        .box_gradient{
            width: 109%;
        }
    }
    @media (max-width: 768px){
        .pdg-top {
            padding: 56px 24px 24px 56px;
        }
        .pdg-bottom{
            margin-top: 56px;
        }
        .get-tx {
            font-size: 40px;
            line-height: 56px;
        }
        .discover-tx{
            max-width: 576px;
            font-size: 20px;
            line-height: 28px;
        }
    }
    @media (max-width: 576px){
        .box_gradient {
            width: 120%;
        }
    }
    @media (max-width: 425px){
        .box_gradient {
            height: 618px;
        }
    }
    @media (max-width: 320px){
        .box_gradient {
            height: 739px;
        }
    }
`
export default Sectionbox
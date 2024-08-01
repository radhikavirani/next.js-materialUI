import styled from "styled-components";

const Commenlogo = styled.section`
    .logo-bg{
        display: grid;
        justify-items: center;
        margin-bottom: 34px;
    }
    .logo{
        height: 30.56px;
    }
    .detail-space{
        padding-bottom: 24px;
        max-width: 526px;
    }
    @media (max-width: 768px){
        .detail-tx {
            font-size: 20px;
            line-height: 28px;
        }
    }
    @media (max-width: 375px){
        .detail-tx {
            width: 340px;
        }
        .logo{
            width: 124px;
        }
    }
    @media(max-width: 320px){
        .detail-tx {
            width: 290px;
        }
    }
`
export default Commenlogo
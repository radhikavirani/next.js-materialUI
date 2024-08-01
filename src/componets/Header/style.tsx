import styled from "styled-components";

const Wrapper = styled.div`
    .header-bg{
        height: 76px;
        width: 1152px;
        padding: 20px 40px;
    }
    .form-bg{
        background-color: #0F05180D;
        box-shadow: none;
        margin-left: 32px;
        margin-right: 64px;
    }
    .searchicon{
        padding: 7px 6px 7px 16px;
    }
    .input-tx{
        padding: 6.5px 8.93px 6.5px 0;
        margin-left: 0;
        letter-spacing: 0;
    }
    .icon-size{
        height: 16px; 
        width: 16px;
    }
    .menu-icon-hide{
        margin-left: 24px;
        display: none;
    }
    .menu{
        letter-spacing: 0.00938em;
        padding: 24px 0 24px 24px;
        line-height: 19.9px;
        color: #00000080;
        text-transform: none;
    }

    @media (max-width: 1151px) {
        .display-n{
            display: none;
        }
        .menu-icon-hide{
            display: block;
        }
        .menu-icon{
            color: black;
            width: 22px;
            height: 22px;
        }
        .header-bg {
            height: 76px;
            width: 100%;
        }
        .form-bg {
            background-color: #0F05180D !important;
            box-shadow: none;
        }
    }
    @media (max-width: 904px){
        .form-bg {
            margin-left: 32px;
            margin-right: 33.93px;
        }
        .git-btn{
            margin-left: 0;
        }

        .btn-bg{
            min-width: auto;
            padding: 0;
        }
        .header-bg {
            padding: 20px 24px;
        }
    }
    @media (max-width: 767px){
        .form-bg,
        .black-mark,
        .git-btn  {
           display: none;
        }
        .header-bg {
            padding: 16px;
            height: 64px;
        }
    }
`
export default Wrapper

import styled from "styled-components"

const Ddrop = styled.div`
    .dropdown1{
        padding: 24px 20px;
        position: absolute;
        z-index: 1;
        background-color: white;
        top: 65px;
        border: 1px solid #0000002b;
        border-radius: 12px;
        display: none;
    }
    .products:hover .dropdown1 {
        display: block;
        transition: 0.8s;
    }
    
`
export default Ddrop
import styled from "styled-components"

const Drop2 = styled.div`
    .dropdown2{
        background-color: white;
        position: absolute;
        top: 65px;
        z-index: 2;
        border: 1px solid #0000002b;
        border-radius: 12px;
        display: none;
    }
    .developers:hover .dropdown2 {
        display: block;
        transition: 0.8s;
    }
`
export default Drop2
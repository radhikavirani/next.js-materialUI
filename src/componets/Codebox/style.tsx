import styled from "styled-components";
const Codebox = styled.section`

.code-box{
    background-image:  linear-gradient(15deg, #5c5a5a, #0f0510 50%);
    animation: gradient 3s ease infinite;
}
@keyframes gradient {
    0% {
        background-image: linear-gradient(160deg, #5c5a5a, #0f0510 50%)
    }
    50% {
        background-image: linear-gradient(190deg, #5c5a5a, #0f0510 50%)
    }
    75% {
        background-image: linear-gradient(350deg, #5c5a5a, #0f0510 50%)
    }
    100% {
        background-image:  linear-gradient(15deg, #5c5a5a, #0f0510 50%);
    }
}

.code-box2{
    background: linear-gradient(4deg, rgb(40 40 40) 0%, rgba(15, 5, 16, 1) 79%);
}
.code-tx{
    color: rgba(2, 195, 114, 1);
}
.box_shadow{
    position: absolute;
    top: 209px;
}
.run-btn{
    text-transform: math-auto;
    border: 1px solid #ababab;
    border-radius: 50px;
    color: white;
}
.next-icon{
    padding-right: 6px;
    color: #FBFBFC;
    font-size: 18px;
}
.menu1,.menu2{
    display: none;
}
.open1:hover .menu1{
    display: block;
}
.open2:hover .menu2{
    display: block;
}
.circles{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.circle1{
    width: 380px;
    height: 380px;
    position: absolute;
    top: -223px;
    left: -312px;
}
.circle2{
    opacity: 0.6;
    width: 324px;
    height: 380px;
    position: absolute;
    right: -439px;
    top: -260px;
}
@media (max-width: 1152px){
    .circle2 {
        right: -433px;
        top: -274px;
    }
}
@media (max-width: 768px){
    .img-bg {
        top: 268px;
    }
    .box_shadow {   
        top: 173px;
    }
    .circle2 {
        right: -49px;
        top: -293px;
    }
}
@media (max-width: 602px){
    .black-box {
        width: auto;
        height: auto;
    }
    .box_shadow {
        top: 247px;
    }
    .circles {
        display: none;
    }
}
@media (max-width: 375px){
    .box_shadow {
        top: 283px;
        width: 127%;
    }
}
`
export default Codebox
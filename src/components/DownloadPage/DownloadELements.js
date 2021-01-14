import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Container =styled.div`
min-height:692px;
position:fixed;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
background: #654ea3; 
background: -webkit-linear-gradient(to right, #654ea3, #eaafc8);
background: linear-gradient(to right, #654ea3, #eaafc8);

`
;

export const FormWrap =styled.div`
height:100%;
display:flex;
flex-directions:column;
justify-content:center;



@media screen and (max-width:400px){
height:80%;

}

`;

export const Icon =styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration:none;
font-weight:700;
font-size:32px;

@media screen and(max-width:480px){
margin-left:16px;
margin-top:8px;



}


`;

export const FormContent =styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width: 480px){
padding:10px;


}

`
;
export const Form = styled.form`
background-color:rgba(255,255,255,.15);
back-drop-filter:blur(5px);
max-width:540px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding:0px 10px;
border-radius: 4px;
box-shadow:0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px){

    padding:32px 32px;


}
`;

export const FormH1 =styled.h1`
margin-button:40px;
color:#fff;
font-size:30px;
font-weight:400;
text-align:center;


`;

export const FormLabel= styled.label`
margin-botton:8px;
font-size:14px;
color:#fff;


`;

export const FormInput=styled.input`
padding:16px 16px;
margin-bottom:32px;
border:none;
boeder-radius:4px;



`;

export const FormButton =styled(Link)`
width:14rem;
margin-left:130px;
background: #01bf71;
padding:9px 3rem 1rem 4rem;
border:none;
border-radius:4px;
color: #fff;
font-size:20px;
cursor:pointer;


`;

export const DownloadIcon =styled.img`
height : 454px;
width : 496px;
margin-bottom: 10px;
`
;

export const Text=styled.span`
text-align:center;
margin-top:24px;
color:#fff;
font-size:14px;


`
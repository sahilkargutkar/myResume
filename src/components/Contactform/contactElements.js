import styled from 'styled-components';
import {Link }from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const ContactContainer=styled.div`
padding:0px;
margin:0px;
background-color:#101522;
display: flex;

`



export const ContactSection=styled.div`

text-align:center;
flex:1;
padding: 1px;
  
`
;

export const ContactTitle = styled.h3`
font-size:50px;
margin-bottom:60px;
color:#fff;
`
;

export const Form =styled.form`
weight:70%;
margin:-21px;
border-radius:1px;
box-sizing: border-box;
`
;


export const Input =styled.input`
box-sizing:border-box;
outline:0;
padding:5px;
margin-bottom:10px;

`
;
export const FormInput=styled.div`
overflow:hidden;

`
;
export const InputText=styled(Input)`
float:left;
width:40%;
margin-left:100px;
`
;
export const InputEmail =styled(Input)`
float:right;
width:49%;
`
;
export const Span=styled.span`
font-weight:normal;
margin-left:350px;
`;

export const InputExp=styled(Input)`
width:100%;
margin-right:40px;

`;

export const TextArea=styled.textarea`
width:50%;
margin-right:800px;
margin-left:100px;
outline:0;
background:#fff;
min-height:100px;

`;

export const InputSubmit = styled(Input)`
width:14%;
background:dodgerblue;
border:1px solid #ccc;
color:#fff ;
cursor:pointer;
margin-left:34px;
margin-bottom:35px;

&:hover{
  background:#000;
  color:#fff;

}

`;

export const AddressClass = styled.div`  
    width: 38%;
    padding-right:10px;
    padding-left: 0px;
    margin-left: 0px;
    float: right;
    font-style: italic;
    background-color:#101522  ;
  `
  ;

  export const AddressSection =styled.div`
  // weight:
  
  
  
  
  `
  export const Addressh4=styled.h4`
  margin-top:100px;
   font-size:25px;
   color:#fff;
  margin-bottom:1px;

  
  
  
  `
  ;

  export const Addressp=styled.p`
  font-size:20px;
  margin-bottom:1px;
  margin-left:15px;
  color:#fff;
  
  
  `

  export const Addressemail=styled(Link)`
  font-size:15px;
  color:#14e6cd;



  &:hover{
    color:#00ff00;
  }
  
  
  `

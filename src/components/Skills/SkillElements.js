import styled from 'styled-components';


export const SkillsContainer = styled.div`
height:800px;
display:flex;
flex-direction :column;
justify-content:center;
align-items:center;
background: #222629;

@media screen and (max-width: 768px){
    height:1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}
`;

export const SkillsWrapper =styled.div`
max-width:1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding:0 20px;
}

`
;


;
export const SkillsCard=styled.div`
// background: #fff;
margin-bottom:40px;
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items:center;
// border-radius: 10px;
max-height:1000px;
padding: 80px;
// box-shadow: 0 1px 3px rgba(0,0,0,0.2);
// transition :all 0.2 ease-in-out;



`


export const ProgressDone =styled.div`
 background: linear-gradient(to left, #86c232, cyan);
	box-shadow: 0 3px 3px -5px #b5f07a, 0 2px 5px #b5f07a;
	border-radius: 20px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
 
 `;

 export const ProgressClass=styled.div`
 background-color: #d8d8d8;
	border-radius: 20px;
	position: relative;
	margin: 15px 0;
	height: 30px;
	width: 300px;

`;

export const Skillsh1 =styled.h1`
	height: 80%; 
	text-align:middle; 
	margin-top:30px;
	color:#fff;
	margin-left:20px;
    // display:inline-block;
    // width:100%;
`
;

export const Skillsh2 =styled.h2`
font-size: 1rem;
color:#fff;
margin-bottom : 0px;


@media screen and (max-width: 480px){
font-size: 0.5rem;
}
`

import React from 'react'
import {Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,DownloadIcon,FormButton} from './DownloadELements';
import cv from '../../Icons/cv.jpg'


const DownloadPage = () => {
    return (
        
        <Container>
            <FormWrap>
                <Icon to="/"></Icon>
            <FormContent>
            <Form action="#">
                <FormH1>Download My Resume </FormH1>

                <DownloadIcon src={cv}></DownloadIcon>
               <FormButton to="files/Resume(latest).pdf" style={{textDecoration:'none'}} download>Download</FormButton>


            </Form>

            </FormContent>
            </FormWrap>
        </Container>

    )
}

export default DownloadPage

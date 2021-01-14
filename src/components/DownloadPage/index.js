import React from 'react'
import {Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,DownloadIcon,FormButton} from './DownloadELements';
import cv from '../../Icons/cv.svg'


const DownloadPage = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/"></Icon>
            <FormContent>
            <Form action="#">
                <FormH1>Download My Resume </FormH1>

                <DownloadIcon src={cv}></DownloadIcon>
               <FormButton to="https://www.mediafire.com/file/dejmsonrpzxyazq/Resume%2528latest%2529.pdf/file"  style={{textDecoration:'none'}}>Download</FormButton>


            </Form>

            </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default DownloadPage

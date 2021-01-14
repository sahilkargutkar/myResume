import React from 'react'
import {WorkContainer,WorkCard,Workh1,Workh2,WorkPics,WorkWrapper} from './WorkElements';
import pic1 from '../../Icons/backend.svg';
import Apimarket from "../../Icons/Apimarket.png";
import download from "../../Icons/download.jpg"
import stockmarket from "../../Icons/stockmarket.jpg"
import storiesapp from "../../Icons/storiesapp.png"
import js from "../../Icons/js.jpg"
import MedicalShop from "../../Icons/MedicalShop.jpg"
import Workbg from '../../Icons/workbg.jpg'

const Works = () => {
    return (
        <WorkContainer id ='works' style={{backgroundImage: `url(${Workbg})`}}>
            <Workh1>CHECK OUT SOME OF MY WORKS</Workh1>
            <WorkWrapper>
                <WorkCard>
               <a href="https://github.com/sahilkargutkar/ApiMarketplace">< WorkPics src={Apimarket}></WorkPics></a>
                <Workh2>Api Marketplace</Workh2>
        
                </WorkCard>

                <WorkCard>
                <a href="https://github.com/sahilkargutkar/E-CommerceMernStack"><WorkPics src={download}></WorkPics></a>
                <Workh2>E-Comm Website</Workh2>
        
                </WorkCard>

                <WorkCard>
                <a href="https://github.com/sahilkargutkar/StoriesReactApp"><WorkPics src={storiesapp}></WorkPics></a>
                <Workh2>Stories App</Workh2>
        
                </WorkCard>


                <WorkCard>
                <a href="https://github.com/sahilkargutkar/MedRep"><WorkPics src={MedicalShop}></WorkPics></a>
                <Workh2>Medical Representative</Workh2>
        
                </WorkCard>

                <WorkCard>
                <a href="https://github.com/sahilkargutkar/StockMarketusingapi"><WorkPics src={stockmarket}></WorkPics></a>
                <Workh2>Stock Market portfolio</Workh2>
        
                </WorkCard>

                <WorkCard>
                <a href="https://github.com/sahilkargutkar/JavaScriptGames"><WorkPics src={js}></WorkPics></a>
                <Workh2>Java Script Games</Workh2>
        
                </WorkCard>

            </WorkWrapper>
        </WorkContainer>
    )
}

export default Works

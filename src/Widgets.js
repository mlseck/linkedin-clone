import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p> {subtitle} </p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Mëlotek News</h2>
                <InfoIcon />
            </div>

            {newsArticle("SenDémat launch", "Top news 5999 readers")}
            {newsArticle("Digital Upskilling", "Find out what people are saying")}
            {newsArticle("Health My Way", "Digitalising healthcare")}
            {newsArticle("MëloEdu", "Find out about first LMS for SN entrepreneurs")}
            {newsArticle("ChatGPT in the news", "Will AI replace your job")}

        </div>  
    )
}

export default Widgets

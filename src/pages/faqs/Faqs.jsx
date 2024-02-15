import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import { faqs_questions } from "../../constants"
import BreadCrumb from "../../components/breadcrumb/BreadCrumb"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './style.scss'
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'
import { useEffect, useState } from "react"
import Animation from "../../components/animation/Animation"
import { TimaAnimation } from "../../constants"

const Faqs = () => {

  const [animationOff, setAnimationOff] = useState(true);


  useEffect(() => {
    animationOFF()
  }, [])

  const animationOFF = () => {
    setTimeout(() => {
      setAnimationOff(false)
    }, TimaAnimation)
  }


  return (
    <>
      {
        animationOff ? (
          <Animation />
        ) : (
          <>
            <Header />
            <div className="faqs">
              <ContentWrapper>
                <BreadCrumb page={"FAQs"} />
                <div className="boxes">
                  {
                    faqs_questions.map((item, index) => (
                      <Accordion key={index}>
                        <AccordionSummary
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                          className="box"
                        >
                          <Typography >{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="text">
                          <Typography>
                            {item.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))
                  }
                </div>
              </ContentWrapper>
            </div>
            <Icons />
            <ButtonScroll />
            <Footer />
          </>
        )
      }
    </>
  )
}

export default Faqs


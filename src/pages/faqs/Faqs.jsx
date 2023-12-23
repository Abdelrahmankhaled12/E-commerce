import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { Disclosure } from '@headlessui/react'
import './style.scss'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faqs_questions } from "../../constants"
import { useNavigate } from "react-router-dom"
import Icons from "../../components/icons/Icons"
import ButtonScroll from "../../components/buttonScroll/ButtonScroll"

const Faqs = () => {

  const [active, setActive] = useState(null);
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div className="faqs">
        <ContentWrapper>
          <ul>
            <li onClick={() => navigate('/')}>Home /</li>
            <li className="active">FAQs</li>
          </ul>
          <div className="boxes">
            {
              faqs_questions.map((item, index) => (
                <div className="box" key={index}>
                  <Disclosure>
                    <Disclosure.Button onClick={() => active === index ? setActive(null) : setActive(index)} className={`button flex ${active === index ? "box_active" : ""}`}>
                      <div className="icon">
                        {
                          active === index ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />
                        }
                      </div>
                      {item.question}
                    </Disclosure.Button>
                    <Disclosure.Panel className="text">
                      {item.answer}
                    </Disclosure.Panel>
                  </Disclosure>
                </div>
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

export default Faqs
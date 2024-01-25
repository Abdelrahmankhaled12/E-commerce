import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import { Disclosure } from '@headlessui/react'
import './style.scss'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faqs_questions } from "../../constants"
import BreadCrumb from "../../components/breadcrumb/BreadCrumb"

const Faqs = () => {

  const [active, setActive] = useState(null);

  return (
    <>
      <div className="faqs">
        <ContentWrapper>
          <BreadCrumb page={"FAQs"} />
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
    </>

  )
}

export default Faqs
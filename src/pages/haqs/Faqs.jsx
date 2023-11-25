import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import Header from "../../components/header/Header"
import { Disclosure } from '@headlessui/react'
import './style.scss'
import { useState } from "react"

const Faqs = () => {

  const [active , setActive ] = useState();

  return (
    <div className="faqs">
      <Header />
      <ContentWrapper>
        <ul>
          <li>Home /</li>
          <li className="active">FAQs</li>
        </ul>
        <div className="boxes">
          <div className="box">
            <Disclosure>
              <Disclosure.Button onClick={()=>setActive(0)} className={`button ${active === 0 ? "active" : ""}`}>
                Is team pricing available?
              </Disclosure.Button>
              <Disclosure.Panel className="text">
                Yes! You can purchase a license that you can share with your entire
                team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Faqs
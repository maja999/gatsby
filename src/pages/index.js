import React from "react"
import Header from "../layout/header/header"
import Navigation from "../components/navigation/navigation"
import Footer from "../layout/footer/footer"
import "./../pages/index.scss"
import { Link } from "gatsby"
import { slugify } from "../utils"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

export default ({ pageContext }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__body">
        <div className="layout__main">
          <div className="layout__main-aside">
            <Navigation />
          </div>
          <div className="layout__main-content">
            {Object.keys(pageContext).length ? (
              <div className="section">
                <h2 className="section__heading">{pageContext.section}</h2>
                <Accordion allowZeroExpanded allowMultipleExpanded>
                  {Object.keys(pageContext.subsection).map(category => {
                    let subsections =
                      pageContext.subsection[category].answers[0]
                    return (
                      <AccordionItem key={category}>
                        <AccordionItemHeading aria-level="3">
                          <AccordionItemButton>
                            <span className="arrow-icon"></span>
                            {category}
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ul className="section__list">
                            {Object.keys(subsections).map(cat => {
                              let subsection = subsections[cat]
                              return (
                                <li
                                  key={subsection.Summary}
                                  className="section__item"
                                >
                                  <Link
                                    to={`/${slugify(pageContext.section)}/${slugify(category)}/${slugify(subsection["Answer ID"])}`}
                                  >
                                    <span className="section__item-title">
                                      {subsection.Summary}
                                    </span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

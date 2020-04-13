import React from "react"
import { slugify } from "../utils"
import Header from "../layout/header/header"
import Navigation from "../components/navigation/navigation"
import Footer from "../layout/footer/footer"
import "./../pages/index.scss"
import { Link } from "gatsby"

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
            <div className="section">
              <div className="qa">
                <Link
                  to={`/${slugify(pageContext.section)}`}
                  className="qa__back"
                >
                  <span className="qa__back-icon"></span>
                  Back
                </Link>
                <h2 className="qa__heading">{pageContext.category.name}</h2>
                <div
                  className="qa__content"
                  dangerouslySetInnerHTML={{
                    __html: pageContext.category.answer,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

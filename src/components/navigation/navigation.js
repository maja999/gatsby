import React from "react";
import { Link } from "gatsby";
import data from "../../_data/answers.mapped.json";
import { slugify } from "../../utils";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Navigation.scss";

const Navigation = () => {
  const sections = Object.keys(data).map(section => ({
    name: section,
    slug: slugify(section),
  }));

  return (
    <nav className="navigation">
      <Accordion preExpanded={["navigation"]}>
        <AccordionItem uuid="navigation">
          <AccordionItemPanel>
            <ul className="navigation__list">
              {sections.map(({ name, slug }) => (
                <li key={slug}>
                  <Link
                    to={`/${slug}`}
                    activeClassName="active"
                    className="navigation__list-item"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <hr className="navigation__divider" />
              <li>
                <Link
                  to={`/contact`}
                  activeClassName="active"
                  className="navigation__list-item"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </nav>
  )
}

export default Navigation;

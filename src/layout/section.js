import React from "react";
import { Link } from "gatsby";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./../components/navigation/Navigation.scss";
import data from "../_data/answers.mapped";

const sections = Object.keys(data).map(section => section = data[section].sub_products);

export default ({ pageContext }) => (
  <nav className="navigation">
    <Accordion preExpanded={["navigation"]}>
      <AccordionItem uuid="navigation">
        <AccordionItemPanel>
          <ul className="navigation__list">
            {sections.map(category => (
              <li key={category}>{category}</li>
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

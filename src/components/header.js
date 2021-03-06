import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import { colors, fonts, underline } from "../components/global-styles"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background-color: #333;
      font-family: ${fonts.quicksand};
    `}
  >
    <div
      css={css`
        color: white;
        margin: 0 auto;
        max-width: 1200px;
        padding: 1.45rem 1.0875rem;
        display: flex;
        justify-content: center;
        @media (min-width: 650px) {
          justify-content: space-between;
        }
      `}
    >
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          css={css`
            font-size: 1.5rem;
            text-shadow: none;
            color: white;
            text-transform: lowercase;
            text-decoration: none;
            ${underline(
              colors.grey800,
              colors.teal,
              colors.teal,
              "100%",
              "2px"
            )}
          `}
        >
          {siteTitle}
        </Link>
      </div>
      <nav
        css={css`
          display: none;
          @media (min-width: 650px) {
            display: block;
          }
        `}
      >
        <ul
          css={css`
            list-style: none;
            display: flex;
            margin: 0;
            & li {
              margin-left: 1rem;
              margin-bottom: 0;
            }
            & a {
              color: ${colors.white};
              text-decoration: none;
              &:hover {
                ${underline(
                  colors.grey800,
                  colors.teal,
                  colors.teal,
                  "100%",
                  "2px"
                )}
              }
            }
          `}
        >
          <li>
            <Link to="/about-me/">About</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <a href="mailto:hello@raquelmsmith.com">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

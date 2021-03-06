import React from "react";
import Link from "gatsby-link";

const ListLink = ({children, to}) => (
  <li style={{display: "inline-block", marginRight: "1rem"}}>
  <Link to={to}>
     {children}
  </Link>
  </li>
)


export default ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 650
  ,padding: "0 1rem"}}>
    <header style={{marginBottom: "1.5em"}}>
      <Link to="/" style={{ textShadow: 'none', backgroundImage: "none"}}>
        <h3 style={{ display: "inline"}}>My Sweet Site</h3>
      </Link>
      <ul style={{listStyle: "none", float: "right"}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children()}
  </div>

)
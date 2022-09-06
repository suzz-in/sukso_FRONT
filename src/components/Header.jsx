import React from "react";
import styled from "styled-components";
import noname from "../noname.png"


function Header() {
  return (
  //<Headerdiv>
    <Stimg alt='img' src={noname}/>
  //</Headerdiv>
  )
}

export default Header;

// const Headerdiv = styled.div`
//   text-align: center;
//   margin: 50px;
//   font-size: 5rem;
//   color: #87ceeb;
// `;
const Stimg = styled.img`
width: 500px;
margin: auto;
padding-left: 450px;
`
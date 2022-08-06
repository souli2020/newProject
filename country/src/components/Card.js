import React from 'react'
 import { StyledCard } from './styles/Card.styled'

function Card({item, onClick}) {
  return (
    <>
        <StyledCard>
            <div onClick={onClick}>
        <img src={item.flags.svg} alt="" />
       <div>
        {/* <h4>{item.name.official}</h4> */}
        <h4>{item.name.common}</h4>
        <p>population :{item.population}</p>
        <p>continents :{item.continents}</p>
        </div>
            </div>
        </StyledCard>
    </>

  )
}

export default Card
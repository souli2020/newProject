import React, {useContext} from 'react'
import { Context } from './Context'
import Card from './Card'
import StyledGrid from './styles/Grid.styled' 
import Button from './Button'
function Grid() {
     const {countries, showDetails,details, back} = useContext(Context)
   return (
    <>
    {details && <Button onClick={back}>back</Button>}
  <StyledGrid>
      {countries.map(el =>
       <Card
       key={el.name.official} 
       item={el}
       onClick={ () => showDetails(el)} 
       /> )}
  </StyledGrid>
    </>
  )
}

export default Grid
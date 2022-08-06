import React,{useContext} from 'react'
import { Flex } from './styles/Flex.styled'
import { Context } from './Context'

function Search() {
  const {country, change,region, changeRegion} = useContext(Context)

  return (
      <Flex>
        

     
    <input
     type="text"
      placeholder="filter by name" 
     name="country"
     value={country}
     onChange={change}
     /> 
     

    
    <select 
     name="region"
     value={ region}
     onChange={changeRegion}
     >
    <option value="">Filter by  region</option>
    <option value="north america">North America</option>
    <option value="south america">South America</option>

    <option value="africa">Africa</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
     
</select>  
  
    
    </Flex>
  )
}

export default Search
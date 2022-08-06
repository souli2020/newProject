import React, {useState, useEffect} from 'react'
const Context = React.createContext()

 
function ContextProvider({children}) {

  

  const url = 'https://restcountries.com/v3.1/all'
    const [ countries, setCountries] = useState([])
    const [ initial, setInitial] = useState([])
    const [ country, setCountry] = useState("")
    const [ region, setRegion] = useState("")
    const [details, setDetails] = useState(false)

function back(){
  setDetails(false)
  setCountries(prev => initial)
}
   function showDetails(item){
    setCountries(initial.filter(el => el.name.official === item.name.official))
    setDetails(true)
   }
     
  
    
   function change(e){
     setCountry(prev => e.target.value)
     setCountries( initial.filter(el =>  el.name.common.toLowerCase().includes(e.target.value.toLowerCase())))

  }
  function changeRegion(e){
    if(e.target.value){

      setRegion( e.target.value)
       
      setCountries( initial.filter(el =>  el.continents[0].toLowerCase() === e.target.value.toLowerCase()))
    }

  }
  

  useEffect(() => {
     const fetchData = async () => {
       const response = await fetch(url);
       const json = await response.json();
  
      setCountries(json);
      setInitial(json)
    }
  
  
    fetchData()
      
      .catch(console.error);;
  }, [])
    
  
  return (
    <Context.Provider value={{countries, change, changeRegion, country, region, showDetails, back, details}}>
        {children}
        </Context.Provider>
  )
}
export {ContextProvider, Context}

 
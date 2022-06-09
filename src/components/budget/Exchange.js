import React, {useEffect, useState} from 'react'

const Exchange = (props) => {
    const {balance, setBalance} = props

    const [exchange, setExchange] = useState([])
    const [rates, setRates] = useState({})
    const [option, setOption] = useState("")

    const handleConversion = () => {
        console.log(rates[option] );
        setBalance(balance * rates[option] )
    }

    const handleOptionChange = (e) => {
        setOption(e.target.value)
    }

    let values;
    useEffect(()=>{
        fetch('https://v6.exchangerate-api.com/v6/5dbafc93873e93bb39ad730e/latest/NGN')
        .then(response => response.json())
        .then(data => {
            values = Object.keys(data.conversion_rates)
            setBalance(balance * data.conversion_rates[values[0]])
            setExchange(values);
            console.log(data.conversion_rates);
            setRates(data.conversion_rates)
        })
       
    }, [])

    useEffect(() => {
        if(option === ""){
            return 
        }
        handleConversion()
    }, [option])

  return (
    <div>
            <select onChange={handleOptionChange}> 
            {exchange.map((value, index)=>           
                <option key={index}>{value}</option>
            )}
            </select>
    </div>
  )
}

export default Exchange
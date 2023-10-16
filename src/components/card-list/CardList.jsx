import React, { useContext } from 'react'
import Card from './Card'
import "./CardList.css"
import DataContext from '../../Context/DataContext'


const CardList = () => {
  const{state} = useContext(DataContext)
  return (
    <div className='card-list'>
      <h1>Card List</h1>
      {state.kitaplar.map((kitap)=>
      kitap.kitapAdi.toLowerCase().startsWith(state.search)&&
        <Card kitap={kitap} />
      )}
      
    </div>
  )
}

export default CardList


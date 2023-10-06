import React from 'react'
import Card from './Card'
import "./CardList.css"

const CardList = ({kitaplar,kitapSil}) => {
  return (
    <div className='card-list'>
      <h1>Card List</h1>
      <Card  kitapSil={kitapSil} kitaplar={kitaplar} />
    </div>
  )
}

export default CardList


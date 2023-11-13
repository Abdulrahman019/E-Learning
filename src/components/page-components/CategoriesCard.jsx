import React from 'react'
import Button from '../Button.jsx'
export default function CategoriesCard({
  title,
  text,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  cardText, 
  children,
  startLearningEvent,
  cardFooter = true,
  cardHeader = true,

  }) {
  return (
    <div className="card" style={{maxWidth:"400px"}}>
      {cardHeader && (<div className='card-header'>{icon_1}{icon_2}{icon_3}</div>)}
      <div className='card-body'>
        <h3 className='card-title'>{title? title:"Card title"}</h3>
        <p>{cardText}</p>
        {children}
      </div>
       {cardFooter && (<div className="card-footer">
        <Button classes={"btn-secondary"} text={"Start Learning"} icon={btnIcon} onClick={startLearningEvent} />
      </div>)}
    </div>
  )
}

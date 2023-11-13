import React from 'react'
import Button from '../Button.jsx';

export default function OffersCard({
  title,
  text,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startEvent,
  cardHeader=false, 
  cardText, 
  children,
  cardBody= true,
  cardFooter= false
  }) {
  return (
    <div className="card offer text-center" style={{maxWidth:"400px"}}>
    {cardHeader && <div className='card-header bg-transparent'>{icon_1}{icon_2}{icon_3}</div>}
    <div className='card-body'>
      {icon_1}
      <h3 className='card-title'>{title? title:"Card title"}</h3>
      <p>{text}</p>
      {children}
    </div>
    {cardFooter && (<div className="card-footer">
      <Button classes={"btn-secondary"} text={"Start Learning"} icon={btnIcon} onClick={startEvent} />
    </div>)}
  </div>
  )
}

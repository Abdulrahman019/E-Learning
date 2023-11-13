import React from 'react'

export default function MyListEx() {
  const items=["Item 1","Item 2","Item 3"]
  return (
    <div style={{height:"100vh"}}>
      <h1 className="title">MyListEx</h1>
      <ul>
        {/* <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li> */}
        {items.map((item,index)=>(<li key={`item-${index}`}>{item}</li>))}
      </ul>
    </div>
  )
}

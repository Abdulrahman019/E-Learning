import React from 'react'

export default function FormGroup({ label , inputType , placeholder , disabled=false , name , value , onChange , reference}) {
  return (
    <div className="form-group">
          <label className={"text-primary"} >{label}</label>
            <input ref={reference} type={inputType} name={name} className='form-control' placeholder={placeholder} disabled={disabled} value={value} onChange={onChange} />
        </div>
  )
}

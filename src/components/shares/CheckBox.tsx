import React from 'react'

export default function CheckBox({title}:{title:string}) {
    return (
        <label className=''>
            <input type="checkbox" />
            <span className="custom-checkbox"></span>
            <span className="custom-label text-primary font-jost text-[14px]">{title}</span>
        </label>
    )
}

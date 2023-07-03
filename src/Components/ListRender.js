import React from 'react'

export default function ListRender(props) {
  return (
    <div>
         {props.list.map((item)=>{
        return (
          <div class="card">
          <div class="card-body card-todo">
          <div>{item.title}
              </div>
              <div> 
                  {item.date.toLocaleDateString()}
                  </div>
          </div>
      </div>
        )
      })}
    </div>
  )
}

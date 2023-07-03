import React from 'react'

export default function SideNav(props) {
  return (
    <div className='sidenav'>
       <div className="side-nav">
            <button type="button" class="btn btn-primary" onClick={()=>{props.change("INBOX")}}>
                <h3>INBOX</h3>
            </button>

            <button type="button" class="btn btn-primary" onClick={()=>{props.change("TODAY")}}>
                <h3>Today</h3>
            </button>

            <button type="button" class="btn btn-primary" onClick={()=>{props.change("NEXT")}}>
                <h3>Next 7 Days</h3>
            </button>
       </div>
    </div>
  )
}

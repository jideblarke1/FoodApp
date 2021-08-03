import React from 'react'


export default function Menu(props) {
  const { users } = props;
//   console.log('users', users, props);

  return (
    <div className="App">
      {users && users.length > 0
        ? <div className="container">
          {users.map(item => (
            <div key= {item.id} className ="output">
              <p id="card">{item.id}<br/>
              {item.name}<br/>
              {item.username}<br/>
              {item.email}<br/>
              {item.street}</p>
            </div>
          ))}
        </div>
        : null}
    </div>
  )
}

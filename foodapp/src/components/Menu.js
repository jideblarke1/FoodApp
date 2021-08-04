import React from "react";
import "../index.css";

export default function Menu(props) {
  const { users } = props;
  //   console.log('users', users, props);

  return (
    <div className="App">
      {users && users.length > 0 ? (
        <div className="container">
          {users.map((item) => (
            <div key={item.id} className="output">
              <div id="card">
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <p>{item.street}</p>
                {/* the api isn't displaying because of the way you called it, i.e, 'item.id, item.name' fix that and your api will work better... this style is only json placeholder */}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

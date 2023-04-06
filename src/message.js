function Message() {

    // const name = "pratap";
//     if(name)
// return (
//  <h1>hello {name}</h1> 
// /* <h1>hello world</h1> */
// /* <h1>hello {name}</h1> */
// ) 
// return  <h1>hello world</h1>}

const items = [
    "new york",
    "san francisco",
    "san francisco",
    "san francisco",
    "san francisco"  ];
return(
    <div>
        <h1>List </h1>
    <ul className="list-group">
        {items.map((item) => (<li key={item}>{item}</li>))}
    {/* <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li> */}
  </ul>
  </div>
);}
export default Message;
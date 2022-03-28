import React from 'react'
import ReactDom from 'react-dom'

// stateless functional component
// always return JSX

// function Greeting() {
//   return (
//     <div className=''>
//       <h3>hello people</h3>
//       <ul>
//         <li>
//           <a href="#">hello world</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// const Greeting = () => {
//   //1.what we want to return, 2.props object, 3.children
//   return React.createElement('div',
//   {},
//   React.createElement('h1',{},'hello world')
//   ); 
// };

//Nested Components, React Tools

//CSS
import './index.css';

import { data } from './books'
import Book from './Book';


// const names = ['john', 'peter', 'susan']
// const newNames = names.map((name)=>{
//   return <h1>{name}</h1>
// })
function BookList() {
  return (
    <section className='booklist'>
      {/* {names} */}
      {/* {newNames} */}
      {data.map((book, index) => {
        return (
          // <Book key={index} book={book}></Book>
          // <Book key={book.id} book={book}></Book>
          <Book key={book.id} {...book}></Book> //spread operator
        )
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root')) //what we wont to render and where to render it
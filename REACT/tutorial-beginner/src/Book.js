import React from 'react'

const Book = (props) => {
  // const {img, title, author} = props.book
  const { img, title, author } = props //with spreading
  // attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('hello world')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className='book' onMouseOver={() => {
      console.log(title)
    }}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {/* {props.children} */}
      <button type='button' onClick={clickHandler}>Reference example</button>
      <button type='button' onClick={() => complexExample(author)}>more complex example</button>
    </article>
  )
};

export default Book

import React from 'react'
import Person from './Person'

function NameList() {
    //const names = ['Bruce', 'Clark', 'Diana']
    /*
    return (
        <div>
           {
               names.map(name => <h2>{name}</h2>)
           }
        </div>
    )
    */
  // const nameList = names.map(name => <h2>{name}</h2>)
   //return <di>{nameList}</di>

   /*
   const persons = [
       {
           id : 1,
           name: 'Bruce',
           age: 30,
           skill: 'React'
       },
       {
        id : 3,
        name: 'Clark',
        age: 37,
        skill: 'nothing'
        },
        {
            id : 2,
            name: 'houssam',
            age: 25,
            skill: 'Unity'
        }
   ]
   const personList = persons.map(person => (
    <Person key={person.id} person={person} />))
    return <div>{personList}</div>

    */
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList = names.map( (name, index )=> <h2 key= {index} > {index} {name} </h2>)
    return <div> {nameList} </div>
}

export default NameList

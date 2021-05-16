import React from 'react'

export default function Table({array}) {
 console.log(array);
 return (
   <div className="container my-3">
     <h3 className="my-4 text-center">Most frequently occurring words </h3>
     {array.length === 0 ? (
       <h1 className="text-center">Please enter a number</h1>
     ) : (
       array[0].map((x) => {
         return (
           <>
             <p>{x}</p> <hr />
           </>
         );
       })
     )}
   </div>
 );
}

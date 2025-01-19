import React from 'react'
import {  useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const XTABLE  = () => {
    
    const tableData = 
    [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ]
    const [arraySorted,setarraySorted] = useState(tableData);
    

    const handler = (e)=>{
      
      // const sortedarray = arraySorted.sort((a,b) => {
      // return order === 'asc'?  (a.id - b.id): (b.id - a.id);
      // })
      const data= tableData.sort((a,b) => Date.parse(b) - Date.parse(a))
     setarraySorted([...data])}
     const handler1 = (e)=>{
      const data1= tableData.sort((a, b) => a.views - b.views)
     setarraySorted([...data1])}
 
 
 
 

    // const data1 = [...data].sort((a, b) => (a.name < b.name ? -1 : 1));
    // const data2 = [...data].sort((a, b) =>
    //     a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    //   );
    //   const data3 = [...data].sort((a, b) => a.name.localeCompare(b.name));
    //   const data= columns.sort(function(a, b) {
    //     var c = new Date(a.date);
    //     var d = new Date(b.date);
    //     return c-d;
    // });
    

      
        
      
    
    
    

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handler}>Sort by Date</button><button onClick={handler1}>Sort by Views</button>
           <table className="table">
    {/* <caption>
     Developers currently enrolled in this course, column headers are sortable.
    </caption> */}
    <TableHead/>
    <TableBody tableData={arraySorted}  />
   </table>
      
    </div>
  )
}

export default XTABLE 

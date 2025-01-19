
const TableBody = ({tableData}) => {
 return (
  <tbody>
   {tableData.map((item) => (
    
     <tr >
                {Object.values(item).map((val) => (
       
       <td>{val}</td>
   ))}
     </tr>
    
))}
  </tbody>
 );
};

export default TableBody;

           
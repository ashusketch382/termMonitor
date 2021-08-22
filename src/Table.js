import React,{useState, useEffect} from 'react';
import './Table.css';

function Table(props){
    const [data, setData]=useState([]);


    const fetchData=()=>{
        fetch('https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard')
        .then(result=>result.json())
        .then(res=>setData(res.data))
        .catch(error=>console.log(error));

    };
    useEffect(()=>{
        fetchData();
    });
    return (
        <table>
            <thead>
                <tr>
                    <th className="keyword">Keywords</th>
                    <th className="goal">Goal</th>
                    <th className="matches">Matches</th>
                    <th className="search-status">Search Status</th>
                    <th className="delete-keywword">Delete keyword</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user=>{
             return (
                 <tr>
                     <td className="keyword">{user.keyword}</td>
                     <td className="gaol">{user.goal}</td>
                     <td className="matches">{user.matches}</td>
                     <td className="search-status">{user.search_status}</td>
                     <td className="delete-keyword">{props.svg}</td>
                 </tr>
             )
         })}
            </tbody>
        </table>
    )
};


export default Table;
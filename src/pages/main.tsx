import React, { useEffect, useState } from 'react';
import { CardDeck, Button, Jumbotron } from 'react-bootstrap';
import Commit from '../components/commit';
import getData from '../utils/apiConnection';
import Props from "../utils/typeMutation";
import Avatar from "../img/avatar.jpeg";

 function CommitsContainer(){
    let[data, setData] = useState([]);
    console.log(data);

     useEffect(():any => {
         let mounted = true;
         getData()
             .then(data => {
                 if (mounted) {
                     setData(data.reverse())
                 }
             })
        console.log(data)
         return () => mounted = false;
     },[])

     return (
             <>
                 <Jumbotron>
                     <img style={{ borderRadius: '50%', width: '12rem' }} src={Avatar} alt="avatar"/>
                     <h1>git-hub-me</h1>
                     <p>
                         This is simple list of commits using react, typescript and bootstrap
                     </p>
                     <a href="https://github.com/mevairmc/git-hub-me">
                         <Button variant="primary">Repository</Button>
                     </a>
                 </Jumbotron>

                 <CardDeck style={{
                     padding: '40px 10%',
                     justifyContent: 'center'
                 }}>
                     {data.map((row:Props, idx:number):JSX.Element =>
                        <Commit
                             idx={idx}
                             description={row.description}
                             linkConnect={row.linkConnect}
                         />
                     )}
                </CardDeck>
             </>
         )

}

export default CommitsContainer;
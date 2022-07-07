import React, { useEffect, useState } from 'react';
import * as s from './styled';

export default function Repositories() {
    const [ repositories, setRepositories ] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
    }, []);

    return (
        <>  
        <s.titlestyle>Repositórios</s.titlestyle>
        <s.container>
        <s.List>
            { repositories.map(repository => {
                return <s.ListItem>{ repository }</s.ListItem>
            }) }
        </s.List>
           
        </s.container>
        </>
    )
};

/*      
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem>
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
           <s.ListItem>Repositorio: Nome Repositorio</s.ListItem> 
         */
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import api from '../services/api';

import '../assets/css/listagempage.css';

const Listagem = () => {
    useEffect(() => {
        listPersonStudents();
    },[])
    const [personStudentList, setPersonStudentList] = useState([]);
    async function listPersonStudents () {
        console.log("listagem iniciando");
        const response = await api.get('personStudent');
        console.log("listagem feita");
        console.log(response.data);
        setPersonStudentList(response.data);
        console.log(personStudentList);
    }

    return(
        <div id="listagem-page">
            <main>
                {
                    personStudentList.map((personStudent, index) => {
                        return(
                            <Card key="index" personStudent={personStudent}/>
                        );
                    })
                }
            </main>
        </div>
    );
}
export default Listagem;
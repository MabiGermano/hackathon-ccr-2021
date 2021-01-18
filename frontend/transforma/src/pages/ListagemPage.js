import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import api from '../services/api';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import '../assets/css/listagempage.css';
import presentationImg from '../assets/img/presentation-list.png';

const Listagem = () => {
    useEffect(() => {
        listPersonStudents();
    }, []);

    const [personStudentList, setPersonStudentList] = useState([]);
    async function listPersonStudents() {
        console.log("listagem iniciando");
        const response = await api.get('personStudent');
        console.log("listagem feita");
        console.log(response.data);
        setPersonStudentList(response.data);
        console.log(personStudentList);
    }

    return (
        <div id="listagem-page">
            <Navbar />
            <main>
                <header>
                    <div className="row">
                        <div id="presentation" className="col m6">
                            <div>
                                <p className="tiny-text bold grey-text">
                                    — ESCOLHA A SUA MENTORADA
                        </p>
                                <h1>
                                    Conecte-se com   mulheres aspirantes à tecnologia.
                        </h1>
                            </div>
                        </div>
                        <div id="presentation-img" className="col m6">
                            <img src={presentationImg} alt="Jovem mulher ultilizando notebook e sorrindo" />
                        </div>
                    </div>
                    <div>

                    </div>
                </header>
                <div id="main-content">

                    {
                        personStudentList.map((personStudent, index) => {
                            return (
                                <Card key="index" personStudent={personStudent} />
                            );
                        })
                    }
                </div>
            </main>
        </div>
    );
}
export default Listagem;
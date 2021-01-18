import React, { useState } from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Select from "../components/Select"

import api from '../services/api';

import '../assets/css/cadastropage.css';
import RadioButton from "../components/RadioButton";
import { Link, useHistory } from "react-router-dom";

const Cadastro = () => {


    const history = useHistory();
    
    const [name, setName] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [linkedinUrl, setLinkedinUrl] = useState('');
    const [mentorExpectations, setMentorExpectations] = useState('');
    const [occupationArea, setOccupationArea] = useState('');
    const [hasExperience, setHasExperience] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();
        console.log('submetendo');
        const body = {
            name: name,
            bornDate: bornDate,
            email: email,
            cell: cell,
            linkedinUrl: linkedinUrl,
            mentorExpectations: mentorExpectations,
            occupationArea: occupationArea,
            hasExperience: hasExperience
        };
        await api.post('personStudent', body)
        .then(() => {
            alert("Cadastro realizado com sucesso!");
            history.push('/');
        }).catch(() => {
            alert("Erro no cadastro!");
        });

        console.log(body);
    }


    const occupationAreaList = [
        {
            value: "developent",
            label: "Desenvolvimento de software"
        },
        {
            value: "design",
            label: "Design"
        },
        {
            value: "userExperience",
            label: "UX/UI"
        },
        {
            value: "testDevelopment",
            label: "Desenvolvimento de testes"
        }
    ];

    return (
        <div id="cadastro-page">
            <Navbar />
            <main>
                <div>
                    <h2>
                        Inscriçãos
                </h2>
                    <span>
                        INSCREVA-SE GRATUITAMENTE
                </span>

                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Posuere libero varius.
                </p>
                </div>
                <form>
                    <div>
                        <Input
                            name="name"
                            label="Nome Completo*"
                            placeholder="Digite seu nome"
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                    <div >
                        <Input
                            name="bornDate"
                            label="Data de Nascimento*"
                            placeholder="DD/MM/AAAA"
                            onChange={(e) => {setBornDate(e.target.value)}}
                        />
                    </div>
                    <div >
                        <Input
                            name="email"
                            label="Endereço de e-mail*"
                            placeholder="Digite seu e-mail"
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div >
                        <Input
                            name="cell"
                            label="Celular*"
                            placeholder="(XX) XXXXX-XXXX"
                            onChange={(e) => {setCell(e.target.value)}}
                        />
                    </div>

                    <div >
                        <Input
                            name="linkedinUrl"
                            label="Endereço do Linkedin (opcional)"
                            placeholder="linkedin.com/in/url"
                            onChange={(e) => {setLinkedinUrl(e.target.value)}}
                        />
                    </div>


                    <div >
                        <Input
                            name="mentorExpectations"
                            label="O que você procura na nossa mentoria?*"
                            placeholder="Exemplo: Entender o que preciso para ser um desenvolvedor"
                            onChange={(e) => {setMentorExpectations(e.target.value)}}
                        />
                    </div>
                    <div>
                        <Select 
                        name="occupationArea" 
                        options={occupationAreaList} 
                        label="Área de interesse*" 
                        onChange={(e) => {setOccupationArea(e.target.value)}}
                        />
                    </div>

                    <div >
                        <label> Possui experiência na área de TI?* </label>
                        <RadioButton
                            name="hasExperience"
                            label="Sim"
                            value="true"
                            onChange={(e) => {setHasExperience(e.target.value)}}
                        />
                        <RadioButton
                            name="hasExperience"
                            label="Não"
                            value="false"
                            checked={true}
                            onChange={(e) => {setHasExperience(e.target.value)}}
                        />
                    </div>


                    <div >
                        <p>
                            <label>
                                <input type="checkbox" class="filled-in" />
                                <span className="tiny-text gray-text">Declaro que li e concordo com os Termos e Condições das Minas Talks
                                e estou ciente de que posso receber no meu e-mail conteúdos, promoções
e novidades de parceiros da Minas Talks.</span>
                            </label>
                        </p>
                    </div>
                    <footer>
                        <div>
                            <Link onClick={handleSubmit} className="pink darken-1 waves-effect waves-light btn-large">Realizar a inscrição</Link>
                        </div>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default Cadastro;
import React from 'react';
import Navbar from '../components/Navbar';

import '../assets/css/landingpage.css';
import presentationImg from '../assets/img/presentation-img1.png';
import { Link } from 'react-router-dom';

import MentorImg from '../assets/img/mentor-img.png';
import Mentor1 from "../assets/img/mentor1.png";
import Mentor2 from "../assets/img/mentor2.png";
import Mentor3 from "../assets/img/mentor3.png";
import Mentor4 from "../assets/img/mentor4.png";
import Mentor5 from "../assets/img/mentor5.png";
import Mentor6 from "../assets/img/mentor6.png";
import Mentor7 from "../assets/img/mentor7.png";
import Mentor8 from "../assets/img/mentor8.png";

const Landing = () => {
    return (
        <div id="landing-page">
            <Navbar />
            <main>
                <div className="row">
                    <div id="presentation" className="col m6">
                        <div>
                            <p className="tiny-text bold grey-text">
                                — MENTORIA GRATUITA NA ÁREA DE TECNOLOGIA
                        </p>
                            <h1>
                                Trazendo mulheres
                                para a tecnologia.
                        </h1>
                            <p className="tiny-text grey-text">
                                Se você é mulher, jovem e quer entrar na área de tecnologia mas não sabe por onde começar: vem com a gente!
                        </p>
                            <div className="action-buttons">
                                <Link class="pink darken-1 waves-effect waves-light btn-large">Quero receber mentoria</Link>
                                <Link class="white black-text waves-effect waves-light btn-large">Quero apoiar</Link>

                            </div>
                        </div>
                    </div>
                    <div id="presentation-img" className="col m6">
                        <img src={presentationImg} alt="Jovem utilizando notebook" />
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    <h5>
                        Objetivo
                        </h5>
                    <h4>
                        Construir pontes entre jovens mulheres e profissionais de TI.
                    </h4>
                </div>
                <div>
                    <p>
                        Você anda procurando aquela vaga marota no mercado de trabalho e não sabe nem por onde começar?<br />
                            Que tal conversar sobre isso com um profissional da área?<br />

                            Na nossa plataforma é possível trocar essa ideia!
                        </p>
                </div>
                <div>
                    <Link className="white pink-text text-darken-1 right s-mt-2 nav-button waves-effect waves-light btn">Inscreva-se grátis</Link>
                </div>
            </footer>
            <main>
                <div className="row">
                    <div id="Mentor-img" className="col m6">
                        <img src={MentorImg} alt="Duas mulheres" />
                    </div>

                    <div id="Mentor" className="col m6">
                        <div>
                            <p className="tiny-text bold grey-text">
                                — PROGRAMA DE MENTORIA
                            </p>
                            <h3>
                                Quero ser um mentor
                            </h3>
                            <p className="tiny-text grey-text">
                                Uma vez que você se inscrever, poderá agendar diretamente
                                com a mentorada de acordo com a disponibilidade entre vocês.
                            </p>
                            <div className="action-buttons">
                                <Link class="pink darken-1 waves-effect waves-light btn-large">Quero me inscrever</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main> 
        </div>
    );
}

export default Landing;
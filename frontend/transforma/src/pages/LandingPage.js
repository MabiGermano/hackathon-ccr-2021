import React from 'react';
import Navbar from '../components/Navbar';

import '../assets/css/landingpage.css';
import presentationImg from '../assets/img/presentation-img1.png';
import { Link } from 'react-router-dom';

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
                                <Link to="/cadastro" class="pink darken-1 waves-effect waves-light btn-large">Quero receber mentoria</Link>
                                <Link to="/listagem" class="white black-text waves-effect waves-light btn-large">Quero apoiar</Link>

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
                    <Link to="/cadastro" className="white pink-text text-darken-1 right s-mt-2 nav-button waves-effect waves-light btn">Inscreva-se grátis</Link>
                </div>
            </footer>
        </div>
    );
}

export default Landing;
import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/card.css';

const Card = ({personStudent}) => {
    return (
        <div class="card">
            <div class="card-content">
                <span class="card-title">
                    {personStudent.name}
                    <Link class="pink-text text-darken1 material-icons right">
                        favorite_border
                    </Link>
                </span>

                <div>
                    <span className="tiny-text grey-text">{personStudent.bornDate} anos</span>
                </div>
                <div>
                    <span class="left badge grey white-text">{personStudent.occupationArea}</span>
                </div>
                <br />
                <div id="quote">
                    <p className="grey-text">{`"${personStudent.mentorExpectations}"`}</p>
                </div>
            </div>
            <div class="card-action">

                <Link className="pink-text text-darken1 see" to="">Ver</Link>
                <Link className="pink-text text-darken1 grey lighten-2 btn" to="">Conectar</Link>
            </div>
        </div>
    );
}

export default Card;
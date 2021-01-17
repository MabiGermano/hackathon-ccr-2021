import React from "react";
import Input from "../components/Input";
import Select from "../components/Select"

const Cadastro = () => {

    return (
        <form>
            <div className="row">
                <div className="col s6">
                    <Input 
                        name="name"
                        label="Nome Completo"
                    />    
                </div>
                <div className="col s6">
                    <Input
                        name="bornDate"
                        label="Data de Nascimento"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <Input //Select?
                        name="genderIdentify"
                        label="Gênero"
                    />
                </div>
                <div className="col s6">
                    <Input
                        name="email"
                        label="Email"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <Input //Select?
                        name="hasExperience"
                        label="Possui experiência?"
                    />
                </div>
                <div className="col s6">
                    <Input //Select?
                        name="occupationArea"
                        label="Área de interesse"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <Input
                        name="experienceDescription"
                        label="Breve descrição sobre a experiência"
                    />
                </div>
                <div className="col s6">
                    <Input
                        name="mentorExpectations"
                        label="O que você espera de um mentor?"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <button class="btn waves-effect black-text indigo lighten-4" type="submit" name="action">Cancelar
                        <i class="material-icons right"></i>
                    </button>
                </div>
                <div className="col s6">
                    <button class="btn waves-effect black-text indigo lighten-4" type="submit" name="action">Enviar
                        <i class="material-icons right"></i>
                    </button>
                </div>
            </div>
        </form>
        
    )
}

export default Cadastro;
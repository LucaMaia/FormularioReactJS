
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

import { useState} from 'react';

function FormularioCadastro({aoEnviar,validarCPF}) {
    const [etapaAtual, setEtapaAtual] = useState(0);


const formularios = [
    <DadosUsuario aoEnviar={proximo}/>,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>,
    <DadosEntrega aoEnviar={aoEnviar}/>,
]



function proximo(){
    setEtapaAtual(etapaAtual+1)
}


    return (
        <>{formularios[etapaAtual]}</>
    );
}




///<DadosEntrega/>
/// <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
/// <DadosUsuario/>


export default FormularioCadastro;
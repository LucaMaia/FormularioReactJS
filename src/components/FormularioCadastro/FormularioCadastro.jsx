
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { useEffect, useState} from 'react';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

function FormularioCadastro({aoEnviar,validacoes}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(()=>{
        if(etapaAtual === formularios.length-1){
            aoEnviar(dadosColetados);
        }
        
    })


const formularios = [
    <DadosUsuario aoEnviar={coletarDados} validaçoes={validacoes} />,
    <DadosPessoais aoEnviar={coletarDados} validaçoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validaçoes={validacoes} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
]


function coletarDados(dados){
    setDados({...dadosColetados,...dados})
    proximo();
} 


function proximo(){
    setEtapaAtual(etapaAtual + 1)
}


return (
        <>
        <Stepper activeStep={etapaAtual}> 
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Endereço</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </>
    );
}




///<DadosEntrega/>
/// <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
/// <DadosUsuario/>


export default FormularioCadastro;
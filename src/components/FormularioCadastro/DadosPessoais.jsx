import React, {useState}from 'react';
import {TextField,Button,Switch,FormControlLabel} from "@material-ui/core";


function DadosPessoais({aoEnviar, validaçoes}) {
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] = useState("");
    const [cpf,setCpf] = useState("");
    const [promoçoes,setPromoçoes] = useState(true);
    const [novidades,setNovidades] = useState(false);
    const [erros,setErros] = useState({cpf:{valido:true, text:""}});

    function validarCampos(event){
        console.log (event.target);
            const{name , value} = event.target
            const novoEstado = {...erros}
            novoEstado[name] = validaçoes[name](value);
            setErros(novoEstado);
            console.log (novoEstado);
    }




return(
<form  
    onSubmit={(event)=>{
        event.preventDefault();
        aoEnviar({nome,sobrenome,cpf,novidades,promoçoes})
        } }
 >

        <TextField 
        value={nome}
        onChange={(event)=> {
            setNome(event.target.value);        
        }}
            id="nome"
            label="Nome" 
            variant="outlined"
            margin ="normal" 
            fullWidth
            />

        <TextField 
        value={sobrenome}
        onChange={(event)=> {
            setSobrenome(event.target.value);
           }}
            id="Sobrenome"
            label="Sobrenome"
            variant="outlined"
            margin ="normal" 
            fullWidth
            />
            
        <TextField
         value={cpf}
         onChange={(event)=> {
             setCpf(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="CPF" 
            name="cpf"
            label="CPF" 
            variant="outlined" 
            margin ="normal" 
            fullWidth
        />

    <FormControlLabel 
    
        label="Promoções"
        control={
        <Switch 
        checked={promoçoes}
        onChange={(event)=>{
            setPromoçoes(event.target.checked)
        }}
        name="Promoções" 
        color="primary"
        />
    }
/>


    <FormControlLabel 
        label="Novidades"
        control={
        <Switch
        checked={novidades}
        onChange={(event)=>{
            setNovidades(event.target.checked)
        }}
        name="novidades"  
        
        color="primary"
        />
    }
/>
        

        <Button type="submit" variant="contained" color="primary">
                Cadastrar
        </Button>
</form>
    );

}



export default DadosPessoais;
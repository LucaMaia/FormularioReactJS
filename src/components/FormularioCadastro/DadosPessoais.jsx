import React, {useState}from 'react';
import {Button,TextField,Switch,FormControlLabel} from "@material-ui/core";


function DadosPessoais(aoEnviar,validarCPF) {
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] = useState("");
    const [CPF,setCPF] = useState("");
    const [promoçoes,setPromoçoes] = useState(true);
    const [novidades,setNovidades] = useState(true);
    const [erros,setErros] = useState({cpf:{valido:true, text:""}});

return(
<form  
    onSubmit={(event)=>{
        event.preventDefault();
        aoEnviar({nome,sobrenome,CPF,promoçoes,novidades})
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
         value={CPF}
         onChange={(event)=> {
             setCPF(event.target.value);
            }}

            onBlur={(event)=>{
                const ehValido = validarCPF(CPF);
                setErros({cpf:ehValido});
            }}

            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="CPF" 
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



    function validarCPF(cpf){
        if(cpf.lenght !==11){
          return {valido:false,texto:"CPF deve ter 11 digitos."}
        }else{
          return{valido:true,texto:""}
           }
        }
}



export default DadosPessoais;
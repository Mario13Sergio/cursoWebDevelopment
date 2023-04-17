import React,{useState} from 'react';
import { Container } from './style.js';
export default function formulario() {

    const [nome,setNome]=useState('')
    const [idade,setIdade]=useState('')
    const [sexo,setSexo]=useState('SELECIONE')
    const [parto,setParto]=useState('SELECIONE')
    const [date,setDate]=useState('')
    const [peso,setPeso]=useState('')
    const [bairro,setBairro]=useState('')
    const [rua,setRua]=useState('')
    const [muni,setMuni]=useState('')
    const [localparto,setLocalParto]=useState('')
    const [dn,setDn]=useState('')
    const [consultas,setConsultas]=useState('')
    const [acs,setAcs]=useState('')


return (
  <Container>
    <div>
      <section>
        <main>  
        <h1>DADOS DO RN</h1>  <br />  
        <section>
            <h1>NOME</h1>   
          <label>Nome:</label>
          <input type="text"name="fname"value={nome}onChange={(e)=>setNome(e.target.value)}placeholder='Nome da Mãe'/>
          <p>Nome Digitado: {nome}</p>
        </section>  

        <section>
          
          <h1>IDADE</h1>
        <label>Idade:</label>
        <input type="number"name="fname"value={idade}onChange={(e)=>setIdade(e.target.value)}placeholder='Idade da Mãe'/>
        <p>Idade: {idade}</p>
        </section>  

        <section>
<          h1>SEXO</h1>
          <label>Sexo:</label>
          <select value={sexo}onChange={(e)=>setSexo(e.target.value)}>
            <option value="SELECIONE"></option>
            <option value="MASCULINO">MASCULINO</option>
            <option value="FEMININO">FEMININO</option>
          </select>
          <p>Sexo: {sexo}</p>

        </section>
  
        <section>
          
<          h1>DATA DO PARTO</h1>
          <label>Data do parto:</label>
          <input type="date"name="fname"value={date}onChange={(e)=>setDate(e.target.value)}/>
          <p>Data do parto: {date}</p>
        </section>

        <section>

<          h1>PESO AO NASCER</h1>
          <label>Peso ao Nascer:</label>
          <input type="number"name="fname"value={peso}onChange={(e)=>setPeso(e.target.value)}/>
          <p>Peso ao Nacer: {peso}</p>
        </section>

        <section>

<          h1>ENDEREÇO DA MÃE</h1>
          <h5>BAIRRO</h5>
          <label>Bairro:</label>
          <input type="text"name="fname"value={bairro}onChange={(e)=>setBairro(e.target.value)}/>
          <p>Bairro: {bairro}</p>
          <h5>RUA</h5>
          <label>Rua:</label>
          <input type="text"name="fname"value={rua}onChange={(e)=>setRua(e.target.value)}/>
          <p>Rua: {rua}</p>
        </section>

        <section>
          <h1>MUNICIPIO DE NASCIMENTO</h1>
          <label>Municipio de Nascimento:</label>
          <input type="text"name="fname"value={muni}onChange={(e)=>setMuni(e.target.value)}/>
          <p>Municipio de Nascimento: {muni}</p>

        </section>

        <section>
          <h1>LOCAL DO PARTO</h1>
          <label>Local do Parto:</label>
          <input type="text"name="fname"value={localparto}onChange={(e)=>setLocalParto(e.target.value)}/>
          <p>Local do Parto: {localparto}</p>

        </section>

        <section>
          <h1>TIPO DE PARTO</h1>
          <label>Parto:</label>
          <select value={parto}onChange={(e)=>setParto(e.target.value)}>
            <option value="SELECIONE"></option>
            <option value="VARGINAL">VARGINAL</option>
            <option value="CESÁREO">CESÁREO</option>
          </select>
          <p>Parto: {parto}</p>

        </section>

        <section>
          <h1>NUMERO DA DN</h1>
          <label>Numero da DN:</label>
          <input type="number"name="fname"value={dn}onChange={(e)=>setDn(e.target.value)}/>
          <p>Numero da DN: {dn}</p>

        </section>

        <section>
          <h1>NUMERO DE CONSULTAS</h1>
          <label>Numero de Consultas:</label>
          <input type="number"name="fname"value={consultas}onChange={(e)=>setConsultas(e.target.value)}/>
          <p>Numero de Consultas: {consultas}</p>

        </section>

        <section>
          <h1>ACS</h1>   
          <label>ACS:</label>
          <input type="text"name="fname"value={acs}onChange={(e)=>setAcs(e.target.value)}placeholder='Nome ACS'/>
          <p>Nome ACS: {acs}</p>

        </section>

          





        <fieldset>
                  <section>
                      <label for="observation" hidden>Observação</label>
                      <textarea name="" id="observation" cols="38" rows="10"
                          placeholder="Faça suas observações" fname="observation"></textarea>
                  </section>
        </fieldset>

               
          <button type="submit">Salvar</button>
          <button type="reset">Limpar</button>
             
        </main>
      </section>  
    </div>
  </Container>
 

    )
}

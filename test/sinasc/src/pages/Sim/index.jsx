import React,{useState} from 'react';
import { Container } from './style.js';
export default function formulario() {

    const [nome,setNome]=useState('')
    const [idade,setIdade]=useState('')
    const [sexo,setSexo]=useState('SELECIONE')
    const [date,setDate]=useState('')    
    const [bairro,setBairro]=useState('')
    const [rua,setRua]=useState('')
    const [citybairro,setCityBairro]=useState('')
    const [cityrua,setCityRua]=useState('')
    const [muni,setMuni]=useState('')
    const [localobito,setLocalObito]=useState('')
    const [Do,setDo]=useState('')    
    const [acs,setAcs]=useState('')


return (
  <Container>
    <div>
      <section>
        <main>  
          <h1>DADOS DOS OBITOS</h1>
           
          <section>
          <h1>NOME</h1>   
          <label>Nome:</label>
          <input type="text"name="fname"value={nome}onChange={(e)=>setNome(e.target.value)}placeholder='Nome do Obituário'/>
          <p>Nome Digitado: {nome}</p>
         
          </section>

          <section>
          <h1>IDADE</h1>
          <label>Idade:</label>
          <input type="number"name="fname"value={idade}onChange={(e)=>setIdade(e.target.value)}placeholder='Idade do obituário'/>
          <p>Idade: {idade}</p>
          </section>

          <section>
          <h1>SEXO</h1>
          <label>Sexo:</label>
          <select value={sexo}onChange={(e)=>setSexo(e.target.value)}>
            <option value="SELECIONE"></option>
            <option value="MASCULINO">MASCULINO</option>
            <option value="FEMININO">FEMININO</option>
          </select>
          <p>Sexo: {sexo}</p>

          </section>

          <section>
<          h1>DATA DO OBITO</h1>
          <label>Data do Obito:</label>
          <input type="date"name="fname"value={date}onChange={(e)=>setDate(e.target.value)}/>
          <p>Data do Obito: {date}</p>
          

          </section>

          <section>
          <h1>ENDEREÇO DO OBITUÁRIO</h1>
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
          <h1>ENDEREÇO DO LOCAL DO OBITO</h1>
          
          <h5>BAIRRO</h5>
          <label>Bairro:</label>
          <input type="text"name="fname"value={citybairro}onChange={(e)=>setCityBairro(e.target.value)}/>
          <p>Bairro: {citybairro}</p>
          <h5>RUA</h5>
          <label>Rua:</label>
          <input type="text"name="fname"value={cityrua}onChange={(e)=>setCityRua(e.target.value)}/>
          <p>Rua: {cityrua}</p>

          </section>

          <section>
          <h1>MUNICIPIO DE OCORRENCIA</h1>
          <label>Municipio de Ocorrencia:</label>
          <input type="text"name="fname"value={muni}onChange={(e)=>setMuni(e.target.value)}/>
          <p>Municipio de Ocorrencia: {muni}</p>

          </section>

          <section>
          <h1>LOCAL DO OBITO</h1>
          <label>Local do Obito:</label>
          <input type="text"name="fname"value={localobito}onChange={(e)=>setLocalObito(e.target.value)}/>
          <p>Local do Obito: {localobito}</p>
          </section>

          <section>
          <h1>NUMERO DA DO</h1>
          <label>Numero da Do:</label>
          <input type="number"name="fname"value={Do}onChange={(e)=>setDo(e.target.value)}/>
          <p>Numero da Do:{Do}</p>
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

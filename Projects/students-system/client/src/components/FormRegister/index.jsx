import { Container } from "./style";
import { useForm } from "react-hook-form";


export function FormRegister() {
     const { register, handleSubmit, formState: { errors } } = useForm();
     function onSubmit(data) {       
        console.log(data);
    }
    return(
        <Container>
            <form onSubmit={handleSubmit (onSubmit)}>
                <section>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" {...register("name", { required: true })}/>
                    {errors.name && <span className="error"> Campo Obrigatório </span>}
                </section>
                <section>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" {...register("email", { required: true })}/>
                    {errors.email && <span className="error"> Campo Obrigatório </span>}
                </section>
                <button>Cadastrar</button>
            </form>
        </Container>
    )
}
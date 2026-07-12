import Header from "../../components/Header";
import styles from "./Contato.module.css"

function Contato() {
   return (

      <>
         <Header />
         <section className={styles.contato}>
            <h2>Contato</h2>

            <div>
               <h3>📧 Email:</h3>
               <a href="mailto:carlosalbertosnb20@gmail.com"
               >
                  carlosalbertosnb20@gmail.com
               </a>
               
            </div>

            <div>

               <h3>📱 WhatsApp:</h3>
               <a
                  href="https://wa.me/555594992634977"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Falar no WhatsApp
               </a>

            </div>


            <div>
               <h3>💼 LinkedIn:</h3>
               <a
                  href="https://www.linkedin.com/in/carlosalbertosn/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  linkedin.com/in/carlosalberto
               </a>
            </div>


            <div>

               <h3>🐙 GitHub:</h3>
               <a
                  href="https://github.com/carlosb20/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  https://github.com/carlosb20/
               </a>

            </div>
            <div>
               <p>📍 Parauapebas - PA, Brasil</p>
            </div>

            <div>
               <p>
                  Estou disponível para colaborar em projetos de desenvolvimento web,
                  contribuindo com soluções criativas, organização e comprometimento
                  em cada etapa do processo. Busco oportunidades para aplicar e expandir meus conhecimentos,
                  trabalhando em equipe e agregando valor por meio da tecnologia.
                  Caso tenha interesse em uma parceria ou projeto, entre em contato.
               </p>
            </div>
         </section>
      </>
   )
}

export default Contato;
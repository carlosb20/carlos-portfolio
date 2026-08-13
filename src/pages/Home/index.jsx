import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Home.module.css"
import fotoCarlos from "../../img/carlos.jpg"
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.cont}>
                    <div>
                        <div>
                            <h2>Formação</h2>
                            <div className={styles.text_Formacao}>
                                <p>
                                    Cursando Tecnólogo em Desenvolvimento Web, com formação voltada
                                    para desenvolvimento de aplicações web utilizando HTML, CSS,
                                    JavaScript, React e Node.js, Python.
                                </p>
                            </div>
                        </div>
                        
                        <div className={styles.div_ps}>
                            <div>
                                <p>
                                    Atualmente estou cursando a graduação tecnológica em
                                    Desenvolvimento Web, adquirindo conhecimentos em programação.
                                </p>
                                 <p>
                                    desenvolvimento de interfaces, bancos de dados e tecnologias modernas para criação de aplicações web.
                                </p>
                                <p>
                                    Durante o curso, venho desenvolvendo projetos práticos para aprimorar
                                    minhas habilidades técnicas e minha experiência na área.
                                </p>
                              
                            </div> 
                            
                        </div>
                    </div>
                    <div className={styles.eventoImg}>
                        <img src={fotoCarlos} alt="Foto de perfil"
                        ></img>
                    </div>


                    <div className={styles.div4}>
                        <div>
                            <h2>Estudante: <span>Carlos Alberto</span> </h2>
                            <nav>
                                <Link to={"/"}>Inicio</Link>
                                <Link to={"/Sobre"}>sobre</Link>
                                <Link to={"/Contato"}>contato</Link>
                            </nav>
                        </div>
                    </div>


                </div>

            </section>
            <Footer />

        </>
    )
}

export default Home;
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Sobre.module.css"
import { useState } from "react";
import foto_cusor from "../../img/Python-Básico.png"
import python_completo from "../../img/Completo-python-estruturas-dados.png"
import python_avancado from "../../img/Python-Básico-ao-avancado.png"
import sqlite3_ from "../../img/Curso-SQLite3.png"
import patterns from "../../img/Design-Patterns.png"
import python_IA from "../../img/python-A.png"
import ciencia_dados from "../../img/Ciencia-dados.png"

function Sobre() {
    const [cursoAberto, setCursoAberto] = useState("");

    const abrirCurso = (curso) => {
        setCursoAberto(cursoAberto === curso ? "" : curso);
    };
    return (

        <>
            <Header />
            {/* <h1> Sobre</h1> */}
            <h1 className={styles.texto}>Minha Jornada</h1>
            <div className={styles.sobre}>
                <p className={styles.p}>
                    Sou <strong>Carlos Alberto</strong> e atualmente curso Desenvolvimento Web.
                    Tenho grande interesse por tecnologia e programação.
                    Estou sempre buscando aprender novas ferramentas e técnicas.
                    Possuo conhecimentos em HTML para criação de páginas web.
                </p>

                <p className={styles.p}>
                    Utilizo CSS para desenvolver layouts modernos e responsivos.
                    Trabalho com JavaScript para adicionar interatividade aos projetos.
                    Também estudo React para criação de interfaces dinâmicas.
                    Tenho interesse em desenvolvimento front-end e back-end.
                </p>

                <p className={styles.p}>
                    Tenho experiência com Python.
                    Utilizo SQLite3 em projetos que necessitam de banco de dados leve.
                    Também trabalho com MySQL para gerenciamento de dados.
                    Gosto de desenvolver sistemas que resolvam problemas reais.
                </p>

                <p className={styles.p}>
                    Busco escrever códigos organizados e de fácil manutenção.
                    Valorizo boas práticas de programação e desenvolvimento.
                    Estou constantemente praticando através de projetos pessoais.
                    Acredito que a tecnologia pode transformar ideias em soluções.
                    Gosto de enfrentar desafios e aprender com cada projeto.
                    Meu objetivo é crescer profissionalmente na área de tecnologia.
                    Busco oportunidades para aplicar meus conhecimentos na prática.
                    Continuo evoluindo diariamente como desenvolvedor e estudante.
                </p>
                <div className={styles.div_caixa}>
                    <h1> Cursos </h1>
                    <div className={styles.div_cursos}>
                        <nav className={styles.cont_nav}>
                            <ul>
                                <li onClick={() => abrirCurso("cusor-python")}>
                                    Curso Python 
                                </li>
                                <li onClick={() => abrirCurso("banco-dados")}>Banco de Dados </li>
                              
                            </ul>
                        </nav>

                        {cursoAberto === "cusor-python" && (
                            <div className={styles.div_Img_curso}>
                                <h1>Curso de python </h1>
                                  <div className={styles.galeria}>
                                    <img src={foto_cusor} alt="foto_cusor" />
                                    <img src={python_completo} alt="python_completo" />
                                    <img src={python_avancado} alt="python_avancado" />
                                    <img src={patterns} alt="Pattern" />
                                    <img src={python_IA} alt="python_IA" />
                                </div>
                            </div>
                        )}
                       
                        {cursoAberto === "banco-dados" && (
                            <div className={styles.div_Img_curso}>
                                <h1> SQLite3  </h1>
                                  <div className={styles.galeria}>
                                    <img src={sqlite3_} alt="SQLite3" />
                                    <img src={ciencia_dados} alt="ciencia_dados" />
                                   
                                </div>
                            </div>
                        )}

                    </div> {/* div_cursos */}
                </div> {/* div_caixa */}
                <section className={styles.contProjetos}>
                    <nav>
                        <ul>
                            <li><a href="dfd"> projeto pizzaria </a></li>
                            <li><a href="dfd"> link </a></li>
                            <li><a href="dfd"> link </a></li>
                            <li><a href="dfd"> link </a></li>
                        </ul>
                    </nav>
                </section>
                <div className={styles.divDetales}>
                    <details>
                        <summary>Imagem do codigo fonte do projeto</summary>

                        <p>
                            Sou Carlos Alberto e atualmente curso Desenvolvimento Web.
                            Tenho conhecimentos em HTML, CSS, JavaScript, React, Python,
                            SQLite3 e MySQL.
                        </p>

                    </details>
                </div> {/* div_Detales */}
            </div>
            <Footer />
        </>
    )
}

export default Sobre;
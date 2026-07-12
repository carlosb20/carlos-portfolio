import styles from './Footer.module.css'
import git from '../../img/github.png'
import likd from '../../img/social.png'

function Footer(){
    return(
        <>
            <div className={styles.footer}>
                <footer>
                    <div>
                        <a href="https://github.com/carlosb20/" target="_blank" rel="noopener noreferrer">
                            <img src={git} alt='foto' />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/carlosalbertosn/" target="_blank" rel="noopener noreferrer">
                            <img src={likd} alt='foto' />
                        </a>
                    </div>
                </footer>
            </div>
            
        </>
    )

}

export default Footer;
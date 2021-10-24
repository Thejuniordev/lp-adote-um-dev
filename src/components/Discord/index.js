import styles from './Discord.module.scss'

export function Discord() {
    return(
        <div className={styles.discord}>
            <strong className={styles.discord__title}>Entre no nosso canal do Discord</strong>
            <a href="https://discord.gg/Fzxtmxe9" target="_blank" className="btn__secundary btn__discord" rel="noreferrer"> Entrar no canal</a>
        </div>
    )
}
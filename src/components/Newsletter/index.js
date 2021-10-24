import styles from './Newsletter.module.scss'

export function Newsletter() {
    return(
        <section className={styles.form}>
            <h3 className={styles.form__title}>Inscreva-se</h3>
            <form>
                <div className={styles.content}>
                    <div className={styles.form__control}>
                        <label>Nome</label>
                        <input id="name" type="text" autoComplete="name" placeholder='Seu nome' required />
                    </div>
                    <div className={styles.form__control}>
                        <label>E-mail</label>
                        <input id="email" type="mail" autoComplete="email" placeholder='Seu e-mail' required />
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}
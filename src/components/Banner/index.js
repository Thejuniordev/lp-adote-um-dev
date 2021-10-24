import { Discord } from '../Discord'
import { Newsletter } from '../Newsletter'
import styles from './Banner.module.scss'

export function Banner() {
    return(
        <section className={styles.banner}>
            <div className='container'>
                <div className={styles.content}>
                    <h2 className={styles.content__title}>Faça parte da comunidade</h2>
                    <p className={styles.content__text}>Nosso projeto já está sendo desenvolvido mas, para que você possa contribuir e ficar por dentro do que está rolando se inscreva.</p>
                <Newsletter />
                <Discord />
                </div>
            </div>
        </section>
    )
}
import Image from 'next/image'

import Logo from '../../../public/images/logo.png';
import styles from './Header.module.scss'

export function Header() {
    return(
        <header>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.content__logo}>
                        <a href="#">
                            <Image src={Logo} alt="Logo" layout="fill" />
                        </a>
                    </div>
                    <div className={styles.content__title}>
                        <h1 className={styles.title}>Adote um dev</h1>
                        <small>Feito pela comunidade, para a comunidade</small>
                    </div>
                </div>
            </div>
        </header>
    )
}
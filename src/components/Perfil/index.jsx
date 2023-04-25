import styles from './Perfil.module.css'

// export default () => {
// export default function() {
    const Perfil = ({ nomeUusuario}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUusuario}.png`} />
            <h1 className={styles.name}>
                {nomeUusuario}
            </h1>
        </header>
    )
}

export default Perfil
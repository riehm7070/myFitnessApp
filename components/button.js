import styles from './Button.module.css'

export default function Button() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.addButton}
    >
    <img className={styles.addImage} src='/addImage.svg' />
    </button>
  )
}
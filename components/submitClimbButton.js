import styles from './Button.module.css'

export default function SubmitClimbButton() {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.submitButton}
    >
        Add Climb
    </button>
  )
}
import styles from './Button.module.css'
import React, {useState} from 'react'

export default function Button({setNewFlag, newFlag}) {
  return (
    <button onClick={() => setNewFlag(!newFlag)}
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.addButton}
    >
    <img className={styles.addImage} src='/addImage.svg' />
    </button>
  )
}
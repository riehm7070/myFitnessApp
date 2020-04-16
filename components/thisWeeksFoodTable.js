import React from 'react'
import styles from './Form.module.css'

const ThisWeeksFoodTable = (props) => {

    return(
<table className={styles.tg}>
  <tr>
    <th className={styles.tg0pky}>Name</th>
    <th className={styles.tg0lax}>Time</th>
    <th className={styles.tg0lax}>Calories</th>
    <th className={styles.tg0lax}>Fats</th>
    <th className={styles.tg0lax}>Carbohydrates</th>
    <th className={styles.tg0lax}>Protein</th>
  </tr>
  <tr>
    <td className={styles.tg0lax}>Apple</td>
    <td className={styles.tg0lax}>12:15pm</td>
    <td className={styles.tg0lax}>95</td>
    <td className={styles.tg0lax}>0.3 g</td>
    <td className={styles.tg0lax}>25 g</td>
    <td className={styles.tg0lax}>0.5 g</td>
  </tr>
  <tr>
    <td className={styles.tg0lax}></td>
    <td className={styles.tg0lax}></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
</table>
    )
}

export default ThisWeeksFoodTable
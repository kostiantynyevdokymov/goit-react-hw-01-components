import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ props, title}) => {
    return (
        <section className={style.statistics}>
  {title && <h2 className={style.title}>{title}</h2>}

            <ul className={style.statList}>
                {props.map(({ id, label, percentage }) =>
<li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}</span>
    </li> )}
  </ul>
</section>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    props: PropTypes.arrayOf(
        PropTypes.exact ({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )

}
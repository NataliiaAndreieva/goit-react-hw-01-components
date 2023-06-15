import PropTypes from 'prop-types';
import css from './Statistics.module.css';

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

function Statistics(props) {
    const { title, stats } = props;
    const statCount = stats.length;
    return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat_list}>
                {stats.map(statOdj => { 
                    const { label, percentage } = statOdj;

                    return (
                      <li
                        className={css.item}
                        key={label + percentage}
                        style={{
                          backgroundColor: getRandomHexColor(),
                          width: `calc(100% / ${statCount})`,
                        }}
                      >
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}</span>
                      </li>
                    );
                })}
            
        </ul>
    </section>
    );
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export { Statistics };
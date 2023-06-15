import PropTypes from 'prop-types';
import css from './Statistics.module.css';

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

function Statistics(props) {
    const { title, stats } = props;

    <section className={css.statistics}>
      <h2 class="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
    </section>;
}
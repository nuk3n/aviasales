import classes from './empty-list-warning.module.scss';

export default function EmptyListWarning() {
  return <div className={classes.emptyListWarning}>Рейсов, подходящих под заданные фильтры, не найдено</div>;
}

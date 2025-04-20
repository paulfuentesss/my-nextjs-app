import classes from './loading.module.css';

export default function MealsLoadingPage() {
    return <p className={classes.loading}>Fetching meals...</p>
}

// Not used anymore because we want to have a loader on a specific component only
// See page.js
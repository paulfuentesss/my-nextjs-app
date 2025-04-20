import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({params}) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound(); // will not display component and find nearest not-found.js page
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({params}) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound(); // will not display component and find nearest not-found.js page
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill/>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* dangerouslySetInnerHTML so we can escape html elements */}
        <p className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}/>
      </main>
    </>
  );
}

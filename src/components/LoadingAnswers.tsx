import Skeleton from 'react-loading-skeleton';

export const LoadingAnswers = () => {
  return (
    <section>
      <article>
        <Skeleton height={70} width={220} count={1} className="skeleton" />
        <div className="item-img">
          <Skeleton height={160} width={220} />
        </div>
        <Skeleton height={70} width={220} count={1} className="skeleton" />
      </article>
    </section>
  );
};

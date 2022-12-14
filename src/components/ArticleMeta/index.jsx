import Link from 'next/link';
import P from 'prop-types';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}) => {
  return (
    <Styled.Container>
      <p>
        {typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.attributes.slug}`}>
              <a>{author.attributes.displayName}</a>
            </Link>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {console.log('there is new categories!')}
        {console.log(categories)}
        {categories.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.map((categories) => {
                return (
                  <span key={`article-meta-cat-${categories.id}`}>
                    <Link href={`/category/${categories.attributes.slug}`}>
                      <a>{categories.attributes.displayName}</a>
                    </Link>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Styled.Container>
  );
};

ArticleMeta.propTypes = {
  author: P.array.isRequired,
  createdAt: P.string.isRequired,
  categories: P.array,
};

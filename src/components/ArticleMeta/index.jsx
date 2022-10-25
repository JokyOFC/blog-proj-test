import P from 'prop-types';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export const ArticleMeta = ({ createdAt, author, categories }) => {
  return (
    <Styled.Container>
      <p>
        <span>Por </span>
        <a href={`/author/${author.slug}`}>{author.displayName}</a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator"> | </span>

        <span className="categories">
          {categories.map((categories) => {
            return (
              <span key={`article-meta-cat-${categories.id}`}>
                <a href={`/category/${categories.slug}`}>
                  {categories.displayName}
                </a>
              </span>
            );
          })}
        </span>
      </p>
    </Styled.Container>
  );
};

ArticleMeta.propTypes = {
  author: P.array.isRequired,
  createdAt: P.string.isRequired,
  categories: P.array,
};

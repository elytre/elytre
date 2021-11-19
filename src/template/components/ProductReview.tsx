import React from 'react';

import { Review as ReviewType } from '../../shared/types';

export default function ProductReview({
  text,
  author,
  source,
  sourceUrl,
}: ReviewType): React.ReactElement {
  const figCaption = _buildFigCaption(author, source, sourceUrl);

  return (
    <figure className="ProductReview">
      <blockquote cite={sourceUrl} className="ProductReview-content">
        <p>{text}</p>
      </blockquote>
      {figCaption}
    </figure>
  );
}

function _buildFigCaption(
  author: ReviewType['author'],
  source: ReviewType['source'],
  sourceUrl: ReviewType['sourceUrl'],
) {
  const sourceWithUrl = _buildSourceWithUrl(source, sourceUrl);

  if (author && sourceWithUrl) {
    return (
      <figcaption className="ProductReview-author-and-source">
        <span className="ProductReview-author">{author}</span>,{' '}
        <span className="ProductReview-source">{sourceWithUrl}</span>
      </figcaption>
    );
  }

  if (author) {
    return (
      <figcaption className="ProductReview-author-and-source">
        <span className="ProductReview-author">{author}</span>
      </figcaption>
    );
  }

  if (sourceWithUrl) {
    return (
      <figcaption className="ProductReview-author-and-source">
        <span className="ProductReview-source">{sourceWithUrl}</span>
      </figcaption>
    );
  }

  return null;
}

function _buildSourceWithUrl(
  source: ReviewType['source'],
  sourceUrl: ReviewType['sourceUrl'],
) {
  if (source && sourceUrl) {
    return <a href={sourceUrl}>{source}</a>;
  }

  return source;
}

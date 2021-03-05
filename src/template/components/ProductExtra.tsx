import React from 'react';

import { Extra as ExtraType } from '../../shared/types';

export default function ProductExtra({
  title,
  href,
}: ExtraType): React.ReactElement {
  const youtubeVideoId = _extractYoutubeVideoIdFromUrl(href);

  return (
    <div className="ProductExtra ProductExtra-youtube" aria-label={title}>
      <iframe
        className="ProductExtra-youtube-iframe"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function _extractYoutubeVideoIdFromUrl(url: string): string {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : '';
}

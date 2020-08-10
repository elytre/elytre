import React from 'react';

type Error404PageProps = {
  readonly reason?: string;
};

export default function Error404Page({
  reason,
}: Error404PageProps): React.ReactElement {
  return (
    <div className="Error404Page">
      <h1 className="Error404Page-title">Page not found</h1>
      {reason ? <p className="Error404Page-reason">{reason}</p> : null}
    </div>
  );
}

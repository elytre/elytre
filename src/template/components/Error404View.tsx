import React from 'react';

type Error404ViewProps = {
  readonly reason?: string;
};

export default function Error404View({
  reason,
}: Error404ViewProps): React.ReactElement {
  return (
    <div className="Error404View">
      <h1 className="Error404View-title">Page not found</h1>
      {reason ? <p className="Error404View-reason">{reason}</p> : null}
    </div>
  );
}

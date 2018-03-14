import React from 'react';

const NotFound = () => {
  return (
    <div>
      No match for <code>{window.location.pathname}</code>
    </div>
  );
}

export default NotFound;
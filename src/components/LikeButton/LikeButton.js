import React from 'react';

import './LikeButton.css';

function LikeButton({
    type
}) {
  const ClassName = type === 'remove' ? 'like like_type_remove' : 'like';
  return(
    <button className={ClassName}/>
  );
}

export default LikeButton;
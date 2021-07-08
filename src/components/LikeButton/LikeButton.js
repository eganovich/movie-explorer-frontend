import React from 'react';

import './LikeButton.css';

function LikeButton({
  type,
  isLiked,
  onLike,
  onDislike,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const baseClassName = type === 'remove' ? 'like like_type_remove' : 'like';

  let className;

  if (isLoading) {
    className = `${baseClassName} like_loading`
  } else if ((type === 'like') && isLiked) {
    className = 'like like_active';
  } else {
    className = baseClassName;
  }

  function handleLikeClick() {
    setIsLoading(true);

    if (type === 'remove') {
      onDislike()
        .finally(() => setIsLoading(false));
    } else if (isLiked) {
      onDislike()
        .finally(() => setIsLoading(false));
    } else {
      onLike()
        .finally(() => setIsLoading(false));
    }
  }
  return(
    <button className={className} onClick={handleLikeClick}/>
  );
}

export default LikeButton;
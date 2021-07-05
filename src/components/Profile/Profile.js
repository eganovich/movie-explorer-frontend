import './Profile.css';

import Header from '../Header/Header.js';
import ProfileData from '../ProfileData/ProfileData.js';

function Profile({
  loggedIn,
  menuProps,
  onEditProfile,
  onSignOut
}) {
  return(
    <>
      <Header
        place="profile"
        loggedIn={loggedIn}
        {...menuProps}
      />
      <section className="profile">
        <ProfileData
          onEditProfile={onEditProfile}
          onSignOut={onSignOut}
        />
      </section>
    </>
  );
}

export default Profile;

import { getServerMe } from '@/lib/api/serverApi';
import css from './EditProfilePage.module.css';
import Image from "next/image";

const Profile = async () => {
  const user = await getServerMe();

  return (
  <main className={css.mainContent}>
  <div className={css.profileCard}>
    <h1 className={css.formTitle}>Edit Profile</h1>

      <Image
        src="Avatar"
        alt="User Avatar"
        width={120}
        height={120}
        className={css.avatar}
      />

    <form className={css.profileInfo}>
      <div className={css.usernameWrapper}>
        <label htmlFor="username">Username:  {user.userName}</label>
        <input id="username"
          type="text"
          className={css.input}
        />
      </div>

      <p>Email: {user.email}</p>

      <div className={css.actions}>
        <button type="submit" className={css.saveButton}>
          Save
        </button>
        <button type="button" className={css.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  </div>
</main>

  );
};

export default Profile;
const Profile = ({ nama, alamat, umur }) => {
  return (
    <div>
      <h3>About me</h3>
      <ul>
        <li>Nama: {nama}</li>
        <li>Alamat {alamat}</li>
        <li>Umur: {umur}</li>
      </ul>
    </div>
  );
};

export default Profile;

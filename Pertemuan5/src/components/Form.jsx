import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    terms: false,
    bio: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      JSON.stringify(formData, ["name", "email", "age", "gender", "class"], 2)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Umur:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />

      <fieldset>
        <legend>Jenis Kelamin:</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Laki-laki
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Perempuan
        </label>
      </fieldset>
      <br />

      <label>
        Kelas:
        <select name="class" value={formData.class} onChange={handleChange}>
          <option value="" disabled>
            Pilih Kelas
          </option>
          <option value="PPW">PPW</option>
          <option value="PPM">PPM</option>
          <option value="PSJ">PSJ</option>
        </select>
      </label>
      <br />

      <label>
        Biodata:
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
      </label>
      <br />

      <label>
        Syarat & Ketentuan:
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <>
      <p>
        <label>
          First name:
          <input
            value={form.firstName}
            onChange={(e) => {
              setForm({
                ...form, //Start from after "Form"
                firstName: e.target.value,
              });
            }}
          />
        </label>
      </p>
      <p>
        <label>
          Last name:
          <input
            value={form.lastName}
            onChange={(e) => {
              setForm({
                ...form,
                lastName: e.target.value,
              });
            }}
          />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
        </label>
      </p>
      <p>
        <input
          style={{ width: 200, height: 40, fontSize: 20, fontWeight: "bold" }}
          value={form.firstName + " " + form.lastName}
        />
        <h1></h1>
        <input
          style={{ width: 300, height: 40, fontSize: 20, fontWeight: "bold" }}
          value={"Email: " + form.email + "@react.com"}
        />
      </p>
    </>
  );
}

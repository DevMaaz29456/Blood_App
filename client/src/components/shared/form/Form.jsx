import { useState } from "react";
import { Link } from "react-router-dom";
import InputType from "./InputType";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login") {
            handleLogin(e, email, password, role);
          } else if (formType === "register") {
            handleRegister(
              e,
              name,
              role,
              email,
              password,
              organisationName,
              hospitalName,
              website,
              address,
              phone
            );
          }
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />

        {/* Role Selection */}
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value="donar"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "donar"}
            />
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value="admin"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "admin"}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value="hospital"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "hospital"}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value="organisation"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "organisation"}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>

        {/* Conditional Form Fields Based on Role */}
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText="Password"
                    labelFor="forPassword"
                    inputType="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {/* Name (First Field for Donar & Admin) */}
                  {(role === "donar" || role === "admin") && (
                    <InputType
                      labelText="Name"
                      labelFor="forName"
                      inputType="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}

                  {/* Hospital Name (First Field for Hospital) */}
                  {role === "hospital" && (
                    <InputType
                      labelText="Hospital Name"
                      labelFor="forHospitalName"
                      inputType="text"
                      name="hospitalName"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  {/* Organisation Name (First Field for Organisation) */}
                  {role === "organisation" && (
                    <InputType
                      labelText="Organisation Name"
                      labelFor="forOrganisationName"
                      inputType="text"
                      name="organisationName"
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}

                  {/* Email & Password (Common for All) */}
                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText="Password"
                    labelFor="forPassword"
                    inputType="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {/* Website (Common for All) */}
                  <InputType
                    labelText="Website"
                    labelFor="forWebsite"
                    inputType="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />

                  {/* Address (Common for All) */}
                  <InputType
                    labelText="Address"
                    labelFor="forAddress"
                    inputType="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  {/* Phone (Common for All) */}
                  <InputType
                    labelText="Phone"
                    labelFor="forPhone"
                    inputType="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        {/* Submit Button */}
        <div className="d-flex justify-content-between flex-row">
          {formType === "login" ? (
            <p>
              Not registered yet ? Registered
              <Link to="/register"> Here !</Link>
            </p>
          ) : (
            <p>
              Already user please
              <Link to="/login"> Login !</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

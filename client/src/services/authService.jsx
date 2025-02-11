import { userLogin } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please provide all fields");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.error("Login Error:", error);
  }
};

export const handleRegister = (
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
) => {
  e.preventDefault();
  try {
    if (!role || !email || !password || !name) {
      return alert("Please provide all required fields");
    }
    console.log("Registering new user...");
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Organisation:", organisationName || "N/A");
    console.log("Hospital:", hospitalName || "N/A");
    console.log("Website:", website || "N/A");
    console.log("Address:", address || "N/A");
    console.log("Phone:", phone || "N/A");
  } catch (error) {
    console.error("Registration Error:", error);
  }
};

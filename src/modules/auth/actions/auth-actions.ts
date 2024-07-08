async function createAccount(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await fetch("http://127.0.0.1:5000/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: name,
      userEmail: email,
      userPasswd: password,
    }),
  });

  if (response.ok) {
    return true;
  } else {
    const errorData = await response.json();
    console.error("Erro ao criar conta:", errorData);
    return false;
  }
}
async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await fetch(`http://127.0.0.1:5000/users/${email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail: email,
      userPasswd: password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Login successful:", data);
    return true;
  } else {
    const errorData = await response.json();
    console.error("Error logging in:", errorData);
    return false;
  }
}

const AuthActions = {
  createAccount,
};

export default AuthActions;

async function createAccount(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const response = await fetch("http://localhost:5000/users/create", {
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

  const response = await fetch(`http://127.0.0.1:5000/users/login`, {
    method: "POST",
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
    const token = data.access_token;
    document.cookie = `token=${token}; path=/`;
    return true;
  } else {
    const errorData = await response.json();
    console.error("Error logging in:", errorData);
    return false;
  }
}

function logout() {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  return true;
}


const AuthActions = {
  createAccount,
  login,
  logout,
};

export default AuthActions;

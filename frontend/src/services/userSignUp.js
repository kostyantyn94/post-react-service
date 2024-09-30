import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function userSignUp({ username, email, password }) {
  try {
    const { data } = await axios({
      data: { user: { username, email, password } },
      method: "POST",
      url: "api/users",
    });

    const { user } = data;
    console.log(user);

    const headers = { Authorization: `Token ${user.token}` };

    const loggedIn = { headers, isAuth: true, loggedUser: user };

    return loggedIn;
  } catch (error) {
    errorHandler(error);
  }
}

export default userSignUp;

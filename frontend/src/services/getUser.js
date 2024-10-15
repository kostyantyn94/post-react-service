import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function getUser({ headers }) {
  try {
    const { data } = await axios({ headers, url: "api/user" });

    return data.user;
  } catch (err) {
    errorHandler(err);
  }
}

export default getUser;

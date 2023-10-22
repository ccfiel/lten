import { Access } from "payload/config";
import { User } from "../payload-types";

export const isLoggedIn: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user);
}
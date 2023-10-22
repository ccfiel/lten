import { Access, FieldAccess } from "payload/types";
import { User } from "../payload-types";

export const isLeader: Access<any, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('leader'));
}

export const isLeaderFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('leader'));
}
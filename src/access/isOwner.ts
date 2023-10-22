import { Access } from "payload/config";

export const isOwner: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If any other type of user, only provide access to themselves
    return {
      owner: {
        equals: user.id,
      }
    }
  }

  // Reject everyone else
  return false;
}
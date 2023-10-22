import { Access } from "payload/config";

export const isCreatedBy: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If any other type of user, only provide access to themselves
    return {
      createdBy: {
        equals: user.id,
      }
    }
  }

  // Reject everyone else
  return false;
}
import { Access } from "payload/config";

export const isOwner: Access = ({ req: { user } }) => {
  if (user) {
    // If any other type of user, only provide access to themselves
    return {
      'owner.value': {
        equals: user.id,
      }
    }
  }

  return false;
}
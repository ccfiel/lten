import { Access } from "payload/config";

export const isOwner: Access = ({ req: { user } }) => {
  if (user) {
    return {
      'owner.value': {
        equals: user.id,
      }
    }
  }

  return false;
}
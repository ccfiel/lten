import payload from "payload";
import { Access } from "payload/config";
export const isAttendees: Access = ({ req: { user }, id }) => {
  if (user) {
    return {
      'attendees.value': {
        equals: user.id,
      }
    }
  }
  return false;
}
import { createContext } from "react";

const UserIdContext = createContext({
  userInfo: { id: 1 },
  setUserInfo: (v: any) => {},
});

export default UserIdContext;

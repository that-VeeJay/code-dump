export type AuthUser = {
  expires: string;
  user: {
    name: string;
    email: string;
    image: string;
  };
};

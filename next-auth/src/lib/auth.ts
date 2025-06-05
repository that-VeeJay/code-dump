import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        name: {},
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const name = "veejay";
        const email = "vee@gmail.com";
        const password = "123";

        if (
          credentials.name === name &&
          credentials.email === email &&
          credentials.password === password
        ) {
          return { email, password };
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
});

// async authorize(credentials) {
//         throw new InvalidLoginError()
//       },

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import {connectToDB} from "@/lib/connectToDB"
import {User} from "@/lib/models"
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    await connectToDB()

    const user = await User.findOne({username: credentials.username})

    if (!user) {
      throw new Error("Wrong credentials")
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Wrong credentials")
    }

    return user

  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
}

export const { handlers: { GET, POST}, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (error) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile)
      if (account.provider === "github") {
        await connectToDB()
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            })
            await newUser.save()
          }
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return true
    }
  }
})
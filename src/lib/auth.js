import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import {connectToDB} from "@/lib/connectToDB";
import {User} from "@/lib/models";

export const { handlers: { GET, POST}, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  })],
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
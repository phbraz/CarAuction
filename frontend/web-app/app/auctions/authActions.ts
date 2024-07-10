import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const getSession = async () => {
  return await getServerSession(authOptions);
};

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session) {
      return null;
    }

    return session.user;
  } catch (error) {
    return null;
  }
};

export { getCurrentUser, getSession };

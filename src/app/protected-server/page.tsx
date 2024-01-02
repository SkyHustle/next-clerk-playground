import { auth, currentUser } from "@clerk/nextjs";

export default async function ServerSideRenderExample() {
    // Get the userId from auth() -- if null, the user is not logged in
    const { userId } = auth();

    if (userId) {
        // Query DB for user specific information or display assets only to logged in users
    }

    // Get the User object when you need access to the user's information
    const user = await currentUser();

    // Use `user` to render user details or create UI elements
    return (
        <div>
            <h1>Welcome, {user?.firstName}!</h1>
            <p>This is your protected page Rendered on the Server.</p>
            {/* Other user-specific JSX components/data can be added here */}
        </div>
    );
}

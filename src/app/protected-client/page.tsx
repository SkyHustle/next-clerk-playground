"use client";

import { useUser } from "@clerk/nextjs";

export default function ClientSideRenderExample() {
    // can only use Clerk Hooks on the client
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        // redirect to sign in page
        return null;
    }

    return (
        <div>
            <h1>Welcome, {user.firstName}!</h1>
            <p>This is your protected page Rendered on the client.</p>
            {/* Other user-specific JSX components/data can be added here */}
        </div>
    );
}

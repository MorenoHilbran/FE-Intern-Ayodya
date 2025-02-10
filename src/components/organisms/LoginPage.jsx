import Panel from "../molecules/Panel";
import LoginForm from "../molecules/LoginForm";

export default function LoginPage({ role }) {
    return (
        <div className="flex w-full h-screen">
            {role === "admin" ? (
                <>
                    <Panel />
                    <LoginForm role={role} />
                </>
            ) : (
                <>
                    <LoginForm role={role} />
                    <Panel className="w-1/2"/>
                </>
            )}
        </div>
    );
}

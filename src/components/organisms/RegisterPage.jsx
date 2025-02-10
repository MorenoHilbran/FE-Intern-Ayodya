import Panel from "../molecules/Panel";
import RegisterForm from "../molecules/RegisterForm";

export default function RegisterPage({ role }) {
    return (
        <div className="flex w-full h-screen">
            {role === "admin" ? (
                <>
                    <Panel />
                    <RegisterForm role={role} />
                </>
            ) : (
                <>
                    <RegisterForm role={role} />
                    <Panel className="w-1/2" />
                </>
            )}
        </div>
    );
}

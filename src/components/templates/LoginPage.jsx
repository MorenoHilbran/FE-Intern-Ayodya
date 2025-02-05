import Login from "../molecules/login";
import Panel from "../molecules/panel";

export default function LoginPage() {
    return (
        <div className="flex w-full h-screen">
            <Panel />     
            <Login />
        </div>
    );
}
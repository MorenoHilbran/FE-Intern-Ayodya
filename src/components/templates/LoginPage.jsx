import Login from "../molecules/Login";
import Panel from "../molecules/Panel";

export default function LoginPage() {
  return (
    <div className="flex w-full h-screen">
      <Panel />
      <Login />
    </div>
  );
}

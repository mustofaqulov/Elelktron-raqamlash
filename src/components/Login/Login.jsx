export default function Login() {
  const name = true;
  const age = true;
  return (
    <>
      <p>Hello {name ? "xasan" : "yusuf"}</p>
      <p>Age {name ? age : 5}</p>
    </>
  );
}

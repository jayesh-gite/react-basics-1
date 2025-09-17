export default function Tabs({ children, buttons, ButtonContainer = "menu" }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}

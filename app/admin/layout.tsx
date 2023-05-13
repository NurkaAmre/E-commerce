import Nav from "../components/AdminNav";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
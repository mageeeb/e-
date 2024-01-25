import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className= "">
      <h2>Bienvenue sur NextJS</h2>
        <Link href={"/connexion"}>Connectez-vous</Link>

    </main>
  )
}

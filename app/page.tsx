
"use client"

import Image from 'next/image'
import Link from "next/link";
import Button from "@/app/ui/Button";

export default function Home() {
  return (
    <main className= "">
      <h2>Bienvenue sur NextJS</h2>
        <Link href={"/connexion"}>Connectez-vous</Link>
        <Button />
    </main>
  )
}

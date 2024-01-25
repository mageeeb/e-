
"use client"

import Image from 'next/image'
import Link from "next/link";
import Button from "@/app/ui/Button";
import {fetch} from "undici-types";


const getData = async () =>{
  const res = await fetch("http://localhost:4000/articles\n");
  const data = await res.json();
  return data;
}
export default async function Home() {
  const articles = await getData();
  return (
    <main className= "">
      <h2>Bienvenue sur NextJS</h2>
        <Link href={"/connexion"}>Connectez-vous</Link>
        <Button />

      <div className="container">{
        articles.map((articles)=>(
            <div key={articles.id} className="carte">
              <h3>{articles.id}</h3>
              <p>{articles.titre}</p></div>
        ))
      }

      </div>
    </main>
  )
}

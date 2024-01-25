import React from "react";
import Link from "next/link";

type Props = {};

export default function page({}:Props) {
    return  <div><h1>Liste des articles</h1>
        <li><Link href="/articles/1" >
            Articles 1
            </Link>
        </li>

        <li><Link href="/articles/2" >
            Articles 2
            </Link>
        </li>

        <li><Link href="/articles/3" >
            Articles 3
            </Link>
        </li>
    </div>;

    ;
}
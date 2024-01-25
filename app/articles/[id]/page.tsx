import React from "react";
import Link from "next/link";

type Props = {
    params: {
        id: number;
    }
};

export default function page({params}:Props) {
    return  <div>Vous êtes sur l'article {params.id}

    </div>;

    ;
}
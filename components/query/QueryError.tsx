import React from "react";

export default function QueryError({children}:Readonly<{ children: React.ReactNode }>){
    return(
        <h1 className={'text-amber-100 text-center'}>
            {children}
        </h1>
    )
}
import { FC } from "react";

export const Accordion: FC<{
  title: string;
}> = ( { title, children } ) => {

  return (
    <>
      <h3>{title}</h3>
      <div>
        { children }
      </div>
    </>
  )
}

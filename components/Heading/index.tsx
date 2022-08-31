import React, { ReactNode } from 'react'

interface IHeadingProps {
    className?: string;
    children?: ReactNode
}

function Heading({children, ...props}: IHeadingProps): JSX.Element {

  return (
    <h1 className={props.className}>{children}</h1>
  )
}

export default Heading
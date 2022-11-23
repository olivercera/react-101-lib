import * as React from 'react'
// import styles from './styles.module.css'

interface Props {
  name: string
}

export const Oliver = ({ name }: Props) => {
  return <div>Hello World! thanks for passing by {name}. </div>
}

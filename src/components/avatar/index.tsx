import { css } from '@emotion/css'
import React from 'react'
import { DefaultAvatar } from '../iconComponent'

type AvatarProps = {
  uri?: string
  name?: string
  size: number
}

const styles = {
  image: css({
    clipPath: 'circle()',
  })
}

export const Avatar = (props: AvatarProps) => {
  const { uri, name, size } = props

  if (uri) {
    return <img className={styles.image} src={uri} alt={name} height={size} width={size} />
  }
  return <DefaultAvatar className={styles.image} width={size} height={size} />
}
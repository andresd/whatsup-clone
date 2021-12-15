import React, { useEffect } from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'
import { humanizeTimestamp } from '../../lib/utils'

type TimeStampLabelProps = {
  timestamp: number | undefined;
  daily?: boolean;
}

export const TimeStampLabel = (props: TimeStampLabelProps) => {
  const { timestamp, daily } = props

  const [timestampToShow, setTimestampToShow] = useState<string>(humanizeTimestamp(timestamp, daily))

  useEffect(() => {
    setTimestampToShow(humanizeTimestamp(timestamp, daily))
  }, [timestamp])

  useInterval(() => {
    setTimestampToShow(humanizeTimestamp(timestamp, daily))
  }, 60000)

  return <>{timestampToShow}</>
}
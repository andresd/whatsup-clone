import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'
import { humanizeTimestamp } from '../../lib/utils'

type TimeStampLabelProps = {
  timestamp: number | undefined;
  daily?: boolean;
}

export const TimeStampLabel = (props: TimeStampLabelProps) => {
  const [timestamp, setTimestamp] = useState<string>(humanizeTimestamp(props.timestamp, props.daily))

  useInterval(() => {
    setTimestamp(humanizeTimestamp(props.timestamp, props.daily))
  }, 60000)

  return <>{timestamp}</>
}
import { css } from '@emotion/css'

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#090E12',
    overflow: 'hidden',
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  chatList: css({
    width: '480px',
    height: '100vh'
  }),
  chatView: css({
    width: '100%',
    flex: 1
  })
}

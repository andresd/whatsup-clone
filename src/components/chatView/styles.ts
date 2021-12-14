import { css } from '@emotion/css'

export const messageBubbleStyles = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'end',
    padding: '20px',
    marginBottom: '30px'
  }),
  rightBubble: css({
    color: '#E5E5E6',
    width: '14rem',
    backgroundColor: '#323739',
    borderWidth: 1,
    borderColor: '#eee',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: -30,
    flexDirection: 'column',
    marginLeft: 12,
    padding: '15px 20px 15px 20px',
    fontFamily: 'Roboto',
    fontSize: '14px'
  }),
  leftBubble: css({
    color: '#E5E5E6',
    width: '14rem',
    backgroundColor: '#026162',
    borderWidth: 1,
    borderColor: '#eee',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: -30,
    borderBottomLeftRadius: 10,
    flexDirection: 'column',
    // marginLeft: -7,
    padding: '15px 20px 15px 20px',
    fontFamily: 'Roboto',
    fontSize: '14px'
  }),
  userName: css({
    fontWeight: 'bold',
    marginBottom: '5px'
  }),
  text: css({
    fontWeight: '400',
    marginBottom: '5px'
  }),
  timestamp: css({
    fontWeight: '400',
    fontSize: '12px',
    marginBottom: '5px',
    textAlign: 'right'
  })
}

export const chatViewStyles = {
  container: css({
    borderTopWidth: '0px',
    borderLeftWidth: '1px',
    borderBottomWidth: '0px',
    borderRightWidth: '0px',
    borderStyle: 'solid',
    borderColor: '#323739',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  }),
  empty: css({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323739',
    color: '#E5E5E6',
    fontFamily: '\'Covered By Your Grace\', cursive',
    fontSize: '48px'
  }),
  messagesContainer: css({
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    flex: 1,
    justifyContent: 'start',
    overflow: 'auto'
  }),
  timestampRow: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  timestamp: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323739',
    color: '#E5E5E6',
    padding: '10px',
    margin: '15px',
    borderRadius: '10px',
    fontFamily: 'Roboto',
    fontSize: '14px'
  }),
  rightBubble: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
    width: '100%'
  }),
  leftBubble: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'start',
    width: '100%'
  }),
  inputContainer: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    margin: '15px 10px 5px 10px',
    borderWidth: '1px',
    backgroundColor: '#323739',
    borderRadius: '2rem'
  }),
  inputBox: css({
    color: '#E5E5E6',
    backgroundColor: '#323739',
    border: 'none',
    outline: 'none',
    marginLeft: '10px',
    fontSize: '14px',
    width: '100%'
  }),
  titleContainer: css({
    color: '#E5E5E6',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '20px',
    backgroundColor: '#2D3234',
  }),
  title: css({
    paddingLeft: '30px',
    fontFamily: 'Roboto',
    fontSize: '22px',
  })
}


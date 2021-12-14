import { css } from '@emotion/css'

export const chatListStyles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#131D22',
    overflow: 'none',
    overscrollBehavior: 'none'
  }),
  searchBar: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    margin: '15px 10px 5px 10px',
    borderWidth: '1px',
    backgroundColor: '#323739',
    borderRadius: '2rem'
  }),
  searchIcon: css({
    color: '#E5E5E6',
  }),
  searchInput: css({
    color: '#E5E5E6',
    backgroundColor: '#323739',
    border: 'none',
    outline: 'none',
    marginLeft: '10px',
    fontSize: '14px',
    width: '100%'
  }),
  chats: css({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto',
    overscrollBehavior: 'auto',
    borderTopWidth: '1px',
    borderLeftWidth: '0px',
    borderBottomWidth: '0px',
    borderRightWidth: '0px',
    borderStyle: 'solid',
    borderColor: '#323739',
    // backgroundColor: 'red',
    marginTop: '10px',
    // paddingTop: '10px'
  }),
  header: css({
    color: '#E5E5E6',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '20px',
    backgroundColor: '#2D3234',
  }),

}

export const chatItemStyles = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    height: 'auto',
    backgroundColor: '#131D22',
    color: '#E5E5E6',
    padding: '10px',
    borderTopWidth: '1px',
    borderLeftWidth: '0px',
    borderBottomWidth: '0px',
    borderRightWidth: '0px',
    borderStyle: 'solid',
    borderColor: '#323739',
    fontFamily: 'Roboto',
    '&:hover': {
      backgroundColor: '#2D3234'
    }
  }),
  selectedContainer: css({
    backgroundColor: '#323739',
  }),
  leftContainer: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  }),
  middleContainer: css({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
  }),
  rightContainer: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  }),
  nameTitle: css({
    fontSize: '18px',
    fontWeight: '600',
    textAlign: 'left',
  }),
  lastMessage: css({
    fontSize: '14px',
    fontWeight: '400',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }),
  timestamp: css({
    fontSize: '14px',
    fontWeight: '400',
    textAlign: 'right'
  })
}

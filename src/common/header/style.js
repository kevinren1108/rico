import { styled } from "@mui/system";
import logoImg from '../../statics/logo.png'

export const HeaderWrapper = styled('div')({
  alignItems: 'center',
  boxSizing: 'border-box',
  flexDirection: 'row',
  flexWrap: 'wrap',
  fontSize: '14px',
  justifyContent: 'space-between',
  lineHeight: '21px',
  margin: '0px 92.5px 0px 92.5px',
  padding: '25px 0 25px 0',
  wordBreak: 'break-word',
  borderBottom: '1px solid #333',
  overflow: 'hidden',
  position: 'relative',
  height: '100px'
})

export const LogoWrapper = styled('div')({
  position: 'absolute',
  top: '0px',
  backgroundImage: `url(${logoImg})`,
  backgroundSize: 'contain',
  width: '100px',
  height: '100px'
})

export const NavWrapper = styled('div')({
  boxSizing: 'border-box',
  display: 'block',
  position: 'absolute',
  right: '0px',
  top: '0px'
})

export const NavItem = styled('div')({
  fontWeight: 'bold',
  fontSize: '0.875rem',
  margin: '30px 10px 30px 10px',
  padding: '10px 15px 10px 15px',
  boxSizing: 'border-box',
  display: 'block',
  float: 'left',
  position: 'relative',
  lineHeight: '21px',
  textSizeAdjust: '100%',
  textAlign: 'center',

})
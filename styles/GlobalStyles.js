import styled from "styled-components/native"
import Entypos from "@expo/vector-icons/Entypo"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import AntDesigns from "@expo/vector-icons/AntDesign"
import Octaincons from "@expo/vector-icons/Octicons"
import FontAwesomes from "@expo/vector-icons/FontAwesome"
import FontAwesomes5 from "@expo/vector-icons/FontAwesome5"
import Ionicons from "@expo/vector-icons/Ionicons"

export const getMarginStyles = (props) => `
  ${props.m ? `margin: ${props.m};` : ''}
  ${props.mv ? `margin-vertical: ${props.mv};` : ''}
  ${props.mh ? `margin-horizontal: ${props.mh};` : ''}
  ${props.mt ? `margin-top: ${props.mt};` : ''}
  ${props.ml ? `margin-left: ${props.ml};` : ''}
  ${props.mr ? `margin-right: ${props.mr};` : ''}
  ${props.mb ? `margin-bottom: ${props.mb};` : ''}
`

export const getPaddingStyles = (props) => `
  ${props.p ? `padding: ${props.p};` : ''}
  ${props.pv ? `padding-vertical: ${props.pv};` : ''}
  ${props.ph ? `padding-horizontal: ${props.ph};` : ''}
  ${props.pt ? `padding-top: ${props.pt};` : ''}
  ${props.pl ? `padding-left: ${props.pl};` : ''}
  ${props.pr ? `padding-right: ${props.pr};` : ''}
  ${props.pb ? `padding-bottom: ${props.pb};` : ''}
`

export const getBorderStyles = (props) => `
  ${props.bs ? `border-style: ${props.bs};` : ''}
  ${props.bw ? `border-width: ${props.bw};` : ''}
  ${props.btw ? `border-top-width: ${props.btw};` : ''}
  ${props.blw ? `border-left-width: ${props.blw};` : ''}
  ${props.brw ? `border-right-width: ${props.brw};` : ''}
  ${props.bbw ? `border-bottom-width: ${props.bbw};` : ''}
  ${props.bc ? `border-color: ${props.bc};` : ''}
  ${props.btc ? `border-top-color: ${props.btc};` : ''}
  ${props.blc ? `border-left-color: ${props.blc};` : ''}
  ${props.brc ? `border-right-color: ${props.brc};` : ''}
  ${props.bbc ? `border-bottom-color: ${props.bbc};` : ''}
`

export const getRadiusStyles = (props) => `
  ${props.br ? `border-radius: ${props.br};` : ''}
  ${props.btlr ? `border-top-left-radius: ${props.btlr}` : ''}
  ${props.btrr ? `border-top-right-radius: ${props.btrr}` : ''}
  ${props.bbrr ? `border-bottom-right-radius: ${props.bbrr}` : ''}
  ${props.bblr ? `border-bottom-left-radius: ${props.bblr}` : ''}
`

export const getPositionStyles = (props) => `
  position: ${props.a ? "absolute" : "relative"};
  ${props.t ? `top: ${props.t};` : ''}
  ${props.l ? `left: ${props.l};` : ''}
  ${props.r ? `right: ${props.r};` : ''}
  ${props.b ? `bottom: ${props.b};` : ''}
`

export const getFlexStyles = (props) => `
  ${props.f ? `flex: ${props.f};` : ''}
  ${props.fd ? `flex-direction: ${props.fd};` : ''}
  ${props.fw ? `flex-wrap: ${props.fw};` : ''}
  ${props.fb ? `flex-basis: ${props.fb};` : ''}
  ${props.fg ? `flex-grow: ${props.fg};` : ''}
  ${props.fs ? `flex-shrink: ${props.fs};` : ''}
  ${props.jc ? `justify-content: ${props.jc};` : ''}
  ${props.ai ? `align-items: ${props.ai};` : ''}
`

export const getWHStyles = (props) => `
  ${props.v ? `width: ${props.v}; height: ${props.v};` : ''}
  ${props.w ? `width: ${props.w};` : ''}
  ${props.minw ? `min-width: ${props.minw};` : ''}
  ${props.maxw ? `max-width: ${props.maxw};` : ''}
  ${props.h ? `height: ${props.h};` : ''}
  ${props.minh ? `min-height: ${props.minh};` : ''}
  ${props.maxh ? `max-height: ${props.maxh};` : ''}
`

const getShadowStyles = (props) => `
  ${props.shc ? `shadow-color: ${props.shc};` : ''}
  ${props.she ? `elevation: ${props.she};` : ''}
  ${props.shof ? `shadow-offset: ${props.shof};` : ''}
  ${props.sho ? `shadow-opacity: ${props.sho};` : ''}
  ${props.shr ? `shadow-radius: ${props.shr};` : ''}
`

const getContainerStyles = (props) => `
  ${props.tf ? `transform: ${props.tf};` : ''}
  ${props.bg ? `background-color: ${props.bg};` : ''}
  ${props.o ? `opacity: ${props.o};` : ''}
  ${props.of ? `overflow: ${props.of};` : ''}
  ${getWHStyles(props)}
  ${getFlexStyles(props)}
  ${getPaddingStyles(props)}
  ${getMarginStyles(props)}
  ${getPositionStyles(props)}
  ${getRadiusStyles(props)}
  ${getBorderStyles(props)}
  ${getShadowStyles(props)}
`

const getTextStyles = (props) => `
  ${props.tfz ? `font-size: ${props.tfz};` : ''}
  ${props.tfs ? `font-style: ${props.tfs};` : ''}
  ${props.tfw ? `font-weight: ${props.tfw};` : ''}
  ${props.tc ? `color: ${props.tc};` : ''}
  ${props.tta ? `text-align: ${props.tta};` : ''}
  ${props.ttav ? `text-align-vertical: ${props.ttav};` : ''}
  ${props.ttdl ? `text-decoration-line: ${props.ttdl};` : ''}
  ${props.ttdc ? `text-decoration-color: ${props.ttdc};` : ''}
  ${props.ttds ? `text-decoration-style: ${props.ttds};` : ''}
  ${props.ttt ? `text-transform: ${props.ttt};` : ''}
  ${props.ttsc ? `text-shadow-color: ${props.ttsc};` : ''}
  ${props.ttso ? `text-shadow-offset: ${props.ttso};` : ''}
  ${props.ttsr ? `text-shadow-radius: ${props.ttsr};` : ''}
  ${props.ts ? `start:  ${props.ts};` : ''}
  ${props.te ? `end:  ${props.te};` : ''}
`

export const GView = styled.View`${getContainerStyles}`

export const GText = styled.Text`
  ${props => props.o ? `opacity: ${props.o};` : ''}
  ${getTextStyles}
  ${getMarginStyles}
  ${getWHStyles}
`

export const GImg = styled.Image.attrs(props => ({
  resizeMode: props.obf || 'cover'
}))`
  ${getWHStyles}
  ${getMarginStyles}
  ${getPositionStyles}
  ${getRadiusStyles}
`;

export const GTouchOpacity = styled.TouchableOpacity`${getContainerStyles}`;
export const GTouchWithoutFeedback = styled.TouchableWithoutFeedback`${getContainerStyles}`;
export const GSafeAreaView = styled.SafeAreaView`${getContainerStyles}`;
export const GKeyAvoidView = styled.KeyboardAvoidingView`${getContainerStyles}`;
export const GPress = styled.Pressable`${getContainerStyles}`;

export const GImgBg = styled.ImageBackground.attrs(props => ({
  resizeMode: props.obf || 'cover'
}))`${getContainerStyles}`

export const GInput = styled.TextInput`
  ${getTextStyles}
  ${getContainerStyles}
  ${getPaddingStyles}
`

export const Entypo = styled(Entypos).attrs(props => ({
  size: props.s,
  color: props.c,
  name: props.n
}))`
  ${props => props.s ? `font-size: ${props.s}px` : ''}
  ${getMarginStyles}
  ${getPositionStyles}
`

export const MaterialIcon = styled(MaterialIcons).attrs(props => ({
  size: props.s,
  color: props.c,
  name: props.n
}))`
  ${props => props.s ? `font-size: ${props.s}px` : ''}
  ${getMarginStyles}
  ${getPositionStyles}
`

export const AntDesign = styled(AntDesigns).attrs(props => ({
  size: props.s,
  color: props.c,
  name: props.n
}))`
  ${props => props.s ? `font-size: ${props.s}px` : ''}
  ${getMarginStyles}
  ${getPositionStyles}
`

export const Octaicon = styled(Octaincons).attrs(props => ({
  size: props.s,
  color: props.c,
  name: props.n
}))`
  ${props => props.s ? `font-size: ${props.s}px` : ''}
  ${getMarginStyles}
  ${getPositionStyles}
`

export const FontAwesome = styled(FontAwesomes).attrs(props => ({
  size: props.s,
  color: props.c,
  name: props.n
}))`
  ${props => props.s ? `font-size: ${props.s}px` : ''}
  ${getMarginStyles}
  ${getPositionStyles}
`

export const FontAwesome5 = styled(FontAwesomes5).attrs(props => ({
  size: props.s,
  color: props.c,
  name: props.n
}))`
  ${props => props.s ? `font-size: ${props.s}px` : ''}
  ${getMarginStyles}
  ${getPositionStyles}
`

export const Ionicon = styled(Ionicons).attrs(props => ({
  size: props.s,
  color: props.c,
  name: props.n
}))`
  ${props => props.s ? `font-size: ${props.s}px` : ''}
  ${getMarginStyles}
  ${getPositionStyles}
`
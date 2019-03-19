import React from 'react';
import { Button as ReButton, ButtonProps } from 'rebass'

export const Button = (props: ButtonProps) => <ReButton variant="primary" {...props} />

// export interface Props {
//   /** Button content */
//   children: React.ReactNode,

//   /** Switch to outline visual style */
//   outline?: boolean,

//   /** Use parent container's full width */
//   block?: boolean
// }

// /**
//  * A Button.
//  */
// const Button: React.FunctionComponent<Props> = (props) => {
//   return <StyledButton {...props} />
// }
// Button.defaultProps = { outline: false, block: false }

// export default Button

// const StyledButton = styled.button<Props>`
//   border: solid 1px ${colors.red};
//   border-radius: 3px;
//   padding: 16px;
//   ${({outline}) => outline
//     ? `background: ${colors.white};
//     color: ${colors.red};`
//     : `background: ${colors.red};
//     color: ${colors.white};`
//   }
//   ${({block}) => block && `
//     display: block;
//     width: 100%;
//   `}
//   `
//   // ${respondTo.s`
//   //   color: papayawhip;
//   // `}
//   // ${respondOnlyTo.xs`
//   //   color: tomato;
//   // `}
  
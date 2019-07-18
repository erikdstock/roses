/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { css as styledCss } from "@styled-system/css"
import React from "react"
import { withStyleProps } from "../../util/styleComposition"
import { Card } from "../Card"
import { Box } from "../Layout"
import { Text } from "../Typography"

interface TextInputProps
  extends React.HTMLProps<HTMLInputElement>,
    RosesStyleProps {
  /* The border color, assuming no error */
  borderColor?: string
  /* An error message string - presence indicates error */
  error?: string
  /* The id for the input (will also be used as input name) */
  // id?: string
  /* Render the borderless version of the input */
  noBorder?: boolean
}

// TODO: Should we have standard 'disabled' and 'error' colors that don't depend on a specific theme color name?
const errorColor = "red"
const disabledColor = "gray.3"

/**
 * A standard text input (or override with type="password, email, etc")
 * Custom props include:
 * noBorder: Render on a line instead of inside a border
 * borderColor: Border color (excluding disabled & error states)
 * label: text for `<label>` tag above input
 */
const _Input: React.FunctionComponent<TextInputProps> = ({
  borderColor = "black",
  disabled = false,
  error = null,
  label,
  noBorder,
  ...restProps
}) => {
  let labelColor
  if (error) {
    borderColor = errorColor
    labelColor = errorColor
  } else if (disabled) {
    borderColor = disabledColor
    labelColor = disabledColor
  }
  return (
    <Wrapper css={styledCss({ m: 2 })}>
      <Card
        css={styledCss({
          boxShadow: "none",
          py: 2,
          px: 2,
          borderColor,
          border: noBorder ? "none" : "2px solid",
          borderRadius: 3,
        })}
      >
        {label && (
          <InputLabel color={labelColor} htmlFor={restProps.id}>
            {label}
          </InputLabel>
        )}
        <RawInput
          type="text"
          underline={noBorder}
          disabled={disabled}
          error={Boolean(error)}
          {...(restProps as any)}
        />
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled(Box)({ position: "relative" })

const labelStyles = styledCss({
  bg: "white",
  fontFamily: "sans",
  fontSize: ".75rem",
  px: 1,
  position: "absolute",
  top: "-.05rem",
  left: "-.05rem",
})

const InputLabel: React.FC<any> = ({ children, ...restProps }) => (
  <Text as="label" css={labelStyles} {...restProps}>
    {children}
  </Text>
)

interface InputElementProps extends React.HTMLProps<HTMLInputElement> {
  underline: boolean
  error: boolean
  disabled: boolean
}

const RawInput = styled("input")<InputElementProps>(
  styledCss({
    border: "none",
    width: "100%",
    bg: "background",
    fontSize: "0.85rem",
    lineHeight: "1.8",
    fontFamily: "sans",
    pb: 1,
    ":focus": {
      outline: "none",
    },
    "::placeholder": {
      color: disabledColor,
    },
  }),
  ({ theme, underline = false, error, disabled }) => {
    if (underline) {
      const underlineColor = error
        ? theme.colors.red
        : disabled
        ? theme.colors[disabledColor]
        : theme.colors["gray.3"]
      return styledCss({
        borderBottom: "solid 1px",
        borderColor: underlineColor,
      })
    }
  }
)

export const Input = withStyleProps({ name: "Input", component: _Input })

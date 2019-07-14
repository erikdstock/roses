// import { Box, Card, Text, TextProps } from "rebass"
import styled from "@emotion/styled"
import themeGet from "@styled-system/theme-get"
import React from "react"
import { space } from "styled-system"
import { Card } from "../Card"
import { Box } from "../Layout"

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  /* The border color, assuming no error */
  borderColor?: string
  /* An error message string - presence indicates error */
  error?: string
  /* The id for the input (will also be used as input name) */
  id: string
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
export const Input: React.FunctionComponent<TextInputProps> = ({
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
    <Wrapper m={1}>
      <Card
        py={2}
        px={2}
        borderColor={borderColor}
        border={noBorder ? "" : "2px solid"}
        borderRadius={3}
      >
        {label && (
          <InputLabel color={labelColor} htmlFor={restProps.id}>
            {label}
          </InputLabel>
        )}
        <BlankTextInput
          underline={noBorder}
          disabled={disabled}
          error={Boolean(error)}
          {...(restProps as any)}
        />
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  position: relative;
  /* border: 1px solid green; */
`

const Label: React.FunctionComponent<TextProps> = ({
  children,
  ...restProps
}) => (
  <Text
    as="label"
    bg="white"
    fontFamily="sans"
    fontSize=".75rem"
    px={1}
    {...restProps}
  >
    {children}
  </Text>
)

const InputLabel = styled(Label)`
  position: absolute;
  top: -0.4rem;
  left: ${themeGet("space.1")}px;
`

interface InputElementProps extends React.HTMLProps<HTMLInputElement> {
  underline?: boolean
  error: boolean
  disabled: boolean
}

const BlankTextInput = styled.input.attrs({
  type: "text",
})<InputElementProps>`
  border: none;
  ${({ theme, underline, error, disabled }) =>
    underline &&
    `border-bottom: solid 1px ${
      error
        ? theme.colors.red
        : disabled
        ? theme.colors[disabledColor] || "lightGray"
        : theme.colors["gray.3"] || "gray"
    }`};
  width: 100%;
  font-size: 0.85rem;
  line-height: 1.8;
  font-family: ${themeGet("fonts.sans")};
  padding-bottom: ${themeGet("space.1")};
  ${space}
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${themeGet("colors.gray.6")};
  }
`

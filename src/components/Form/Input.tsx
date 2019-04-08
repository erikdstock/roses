import React from "react"
import { Card, CardProps, Text, TextProps } from "rebass"
import styled from "styled-components"
import { space, themeGet } from "styled-system"

interface TextInputProps extends React.HTMLProps<HTMLButtonElement> {
  error?: boolean | string
  noBorder: boolean
  borderColor: string
  bg: string
}

const errorColor = "red"
const disabledColor = "gray.4"

export const TextInput: React.FunctionComponent<TextInputProps & any> = ({
  borderColor = "black",
  label,
  noBorder,
  error,
  disabled,
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
    <Wrapper
      py={2}
      px={2}
      borderColor={borderColor}
      border={(!noBorder && "2px solid") || ""}
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
        error={error}
        {...restProps}
      />
    </Wrapper>
  )
}

const Wrapper = styled(Card)`
  position: relative;
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
  top: -0.5rem;
  left: ${themeGet("space.1")}px;
`

const BlankTextInput = styled.input.attrs({ type: "text" })<{
  underline?: boolean
  error?: string
  disabled: boolean
}>`
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
  font-family: ${p => p.theme.fonts.sans};
  padding-bottom: ${p => p.theme.space[1]};
  ${space}
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${p => p.theme.colors["gray.6"]};
  }
`

import React from "react"
import { Card, CardProps, Text, TextProps } from "rebass"
import styled from "styled-components"
import { space, themeGet } from "styled-system"

interface TextInputProps extends React.HTMLProps<HTMLButtonElement> {
  error?: boolean | string
  withBorder: boolean
  borderColor: string
  bg: string
}

export const TextInput: React.FunctionComponent<TextInputProps & any> = ({
  borderColor = "black",
  label,
  withBorder,
  error,
  disabled,
  ...restProps
}) => {
  if (error) {
    borderColor = "red"
  } else if (disabled) {
    borderColor = "gray.5"
  }
  return (
    <Wrapper
      py={3}
      px={2}
      borderColor={withBorder && borderColor}
      border={withBorder && "2px solid"}
      borderRadius={3}
    >
      {label && <InputLabel for={restProps.id}>{label}</InputLabel>}
      <BlankTextInput
        underline={!withBorder}
        disabled={disabled}
        {...restProps}
      />
    </Wrapper>
  )
}

const Wrapper = styled(Card)`
  position: relative;
`

const Label: React.FunctionComponent<{ for: string } & TextProps> = ({
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
}>`
  border: none;
  ${({ theme, underline }) =>
    underline &&
    `border-bottom: solid 1px ${theme.colors["gray.3"] || "gray"}`};
  width: 100%;
  font-size: 0.85rem;
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

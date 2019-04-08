import React from "react"
import { Card, CardProps } from "rebass"
import styled from "styled-components"
import { space } from "styled-system"

export const TextInput = styled.input.attrs({ type: "text" })`
  border: none;
  border-bottom: solid 1px ${p => p.theme.colors["gray.3"] || "gray"};
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

interface BorderedInputProps extends React.HTMLProps<HTMLButtonElement> {
  error?: boolean | string
  borderColor: string
}

export const BorderedTextInput: React.FunctionComponent<
  BorderedInputProps & any
> = ({ error, borderColor = "black", disabled, ...restProps }) => {
  if (error) {
    borderColor = "red"
  } else if (disabled) {
    borderColor = "gray.5"
  }
  return (
    <Card p={3} borderColor={borderColor} border="2px solid" borderRadius={3}>
      <TextInput disabled={disabled} {...restProps} />
    </Card>
  )
}

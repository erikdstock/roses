import styled from "styled-components"
import { space } from "styled-system"

const Input = styled.input.attrs({ type: "text" })`
  border: none;
  border-bottom: solid 1px ${p => p.theme.colors.inactiveGray};
  width: 100%;
  font-size: 0.85rem;
  padding-bottom: ${p => p.theme.space[1]};
  ${space}

  &::placeholder {
    color: ${p => p.theme.colors.lightGray};
  }
`

export { Input }

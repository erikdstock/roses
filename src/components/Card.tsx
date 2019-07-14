import styled from "@emotion/styled"
import React from "react"
import * as SS from "styled-system"
import { Box } from "./Layout"

interface CardKnownProps
  extends BoxKnownProps,
    SS.BorderProps,
    SS.BordersProps,
    SS.BorderColorProps,
    SS.BorderRadiusProps,
    SS.BoxShadowProps,
    SS.BackgroundImageProps,
    SS.BackgroundSizeProps,
    SS.BackgroundPositionProps,
    SS.BackgroundRepeatProps,
    SS.OpacityProps {
  variant?: SS.ResponsiveValue<string>
}
export interface CardProps
  extends CardKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof CardKnownProps> {}

export const Card: RosesSC<CardProps> = styled(Box)(
  SS.border,
  SS.borders,
  SS.borderColor,
  SS.borderRadius,
  SS.boxShadow,
  SS.backgroundImage,
  SS.backgroundSize,
  SS.backgroundPosition,
  SS.backgroundRepeat,
  SS.opacity
)

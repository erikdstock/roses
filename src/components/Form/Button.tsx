import React from 'react';
import { Button as ReButton } from 'rebass'
// TODO: Block button, figure out how to document props
export const Button = (props: {variant?: string}) => <ReButton variant="primary" {...props} />

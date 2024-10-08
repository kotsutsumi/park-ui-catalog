import { forwardRef } from 'react'
import { styled } from 'styled-system/jsx'
import { AnyString, ConditionalValue } from 'styled-system/types'

import { Spinner as StyledSpinner, type SpinnerProps as StyledSpinnerProps } from './styled/spinner'

export interface SpinnerProps extends StyledSpinnerProps {
    /**
     * For accessibility, it is important to add a fallback loading text.
     * This text will be visible to screen readers.
     * @default "Loading..."
     */
    label?: string
    colorPalette?: ConditionalValue<
        | AnyString
        | 'border'
        | 'bg'
        | `var(--${string})`
        | 'current'
        | 'black'
        | 'white'
        | 'transparent'
        | 'gray'
        | 'red'
        | 'gray.light'
        | 'gray.dark'
        | 'red.light'
        | 'red.dark'
        | 'fg'
    >
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
    const { label = 'Loading...', ...rest } = props

    return (
        <StyledSpinner ref={ref} borderBottomColor="transparent" borderLeftColor="transparent" {...rest}>
            {label && <styled.span srOnly>{label}</styled.span>}
        </StyledSpinner>
    )
})

Spinner.displayName = 'Spinner'

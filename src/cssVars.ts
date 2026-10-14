import type { CSSProperties } from 'react'

/** CSS custom properties (e.g. `--i`, `--d`) aren't part of CSSProperties, so this widens it for inline style props that set them. */
export type CSSVarStyle = CSSProperties & Record<`--${string}`, string | number>

import { Signal, useSignal } from "@preact/signals"
import PixelGrid from "element/PixelGrid.tsx"
import ColorPicker from "element/ColorPicker.tsx"

export default function Pixels () {
    const colorSelectedIndex = useSignal<number>(0)

    return (
        <>
            <PixelGrid />
            <ColorPicker selected={colorSelectedIndex} />
        </>
    )
} 
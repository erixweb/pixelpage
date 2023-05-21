import { COLORS } from "consts/consts.ts"
import type { Signal } from "@preact/signals"

export default function ColorPicker(
    props: {
        selectedColorIndex: Signal<number>
    }
) {

    const clickEvent = (color: string) => () => {
        console.log(color)
    }
    return (
        <div>
            {
                COLORS.map(color => (
                    <button
                        className="colors-btn"
                        onClick={clickEvent(color)}
                        style={`background-color: ${color};`}
                    />
                ))
            }
        </div>
    )
}
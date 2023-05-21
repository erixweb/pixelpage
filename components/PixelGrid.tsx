import { PIXEL_SIZE, WIDTH, HEIGHT, COLORS } from "consts/consts.ts"
import { useState } from "preact/hooks"

const initialTiles = Array.from({ length: WIDTH * HEIGHT }).fill("#fff")


export default function PixelGrid() {
    const [tiles, updateTiles] = useState(initialTiles)

    return (
        <div className="pixelgrid" style={`display: grid; grid-template-columns: repeat(${WIDTH}, 1fr); width: ${WIDTH * PIXEL_SIZE}px; height: ${WIDTH * PIXEL_SIZE}px; border: 1px solid #f3f3f3;`}>
            {tiles.map((color, index) => (
                <div
                    onClick={() => {
                        updateTiles((tiles) => {
                            const newTiles = [...tiles]
                            newTiles[index] = COLORS[Math.floor(Math.random() * 4)]
                            return newTiles
                        })
                    }}
                    className="pixel"
                    style={`width: ${PIXEL_SIZE}px; height: ${PIXEL_SIZE}px; background-color: ${color}`}
                />
            ))}
        </div>
    )
}
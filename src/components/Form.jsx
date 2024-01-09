import { useRef } from "react"
import { ShowShip } from "./showShip.jsx"
import { activeShip } from "../hooks/activeShip.js"
import { saveImage } from "../hooks/saveImage.js"

export const FormShip = () => {

    const inputRefP1 = useRef()
    const inputRefP2 = useRef()

    const { isSend, handleClick, setIsSend } = activeShip(inputRefP1, inputRefP2);

    const { image, imageP2, handleImage, handeClickRestart} = saveImage(setIsSend, inputRefP1, inputRefP2);

    return (
        <>
            <div className="Principal-Container mt-2">
                <main className="Container-Form">
                    <h2> Persona 1: </h2>

                    <section className="con-Person">
                        <input onChange={handleImage(1)} type="file" name="file" className="input-Image" id="ImagenInput"/>
                        <label htmlFor="ImagenInput" className="Boton" id="BFotoP1"> Foto P1 </label>

                        <input ref={inputRefP1} type="text" placeholder="Nombre Persona 1:"/>
                    </section>
            
                    <h2 className="mt-3"> Persona 2: </h2>

                    <section className="con-Person">
                        <input onChange={handleImage(2)} type="file" name="file" className="input-Image" id="ImagenInputP2"/>
                        <label htmlFor="ImagenInputP2" className="Boton" id="BFotoP2"> Foto P2 </label>

                        <input ref={inputRefP2} type="text" placeholder="Nombre Persona 2: "/>
                    </section>

                    <div className="container-Button">
                        <button className="Boton" onClick={handleClick}> Shipear </button>
                        <button className="Boton" onClick={handeClickRestart}> Otro Ship </button>
                    </div>
                </main>
            </div>
            {
                isSend ? 
                <ShowShip imageP1={image} imageP2={imageP2} nameP1={inputRefP1.current.value} nameP2={inputRefP2.current.value} /> 
                : null
            }
            
        </>
    )
}
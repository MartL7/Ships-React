import React from 'react';
import { changeImg } from '../logic/logic.js';
import { notShip } from '../logic/logic.js';

export const ShowShip = React.memo(({ imageP1, imageP2, nameP1, nameP2 }) => {

    const porcentage = notShip(nameP1, nameP2)
    
    const imgDefectP1= "https://img.freepik.com/fotos-premium/cachorros-siguen-siendo-pequenos-lindos_891817-32.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais"

    const imgDefectP2 = "https://i.pinimg.com/736x/1e/6d/83/1e6d83a2bd921c6a8ba25163bf17ae2f.jpg"

    const imageSrcP1 = imageP1 ? URL.createObjectURL(imageP1) : imgDefectP1;
    const imageSrcP2 = imageP2 ? URL.createObjectURL(imageP2) : imgDefectP2;

    let imageLoveToChange
    const imageLove = changeImg(porcentage, imageLoveToChange)

    return (
        <>
            <div className="Con-img">
                <div className="Container-Images">
                    <img src={imageSrcP1} />
                    <img src={imageLove} />
                    <img src={imageSrcP2} />
                </div>
            </div>

            <div className="Text-Ship">
                <section className="Text">
                    <p>El ship de {nameP1} con {nameP2} es de: {porcentage}%</p>
                </section>
            </div>
        </>
    )
});
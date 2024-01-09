import { useState } from "react";
import Swal from "sweetalert2";

export const activeShip = (inputRefP1, inputRefP2) => {

    const [isSend, setIsSend] = useState(false);

    const handleClick = () => {
        const valueP1 = inputRefP1.current.value
        const valueP2 = inputRefP2.current.value

        if(valueP1 === valueP2) {
            Swal.fire({
                title: '<span class="text-light"> Advertencia </span>',
                html: '<span class="text-light"> No puedes poner nombres iguales </span>',
                icon: 'warning',
                confirmButtonText: 'Regresar',
                footer: '<span class="text-light opacity-50"> Recuerda poner Nombres diferentes </span>',
                buttonsStyling: false,
                allowOutsideClick: false,
                timer: 5000,
                timerProgressBar: true,
                customClass: {
                    popup: "rounded-5 bg-dark",
                    confirmButton: "Boton",
                }
            })
            return
        }

        setIsSend(true)
    }

    return { isSend, handleClick, setIsSend }

}
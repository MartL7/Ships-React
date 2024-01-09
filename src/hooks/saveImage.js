import { useState } from "react";

export const saveImage = (setIsSend, inputRefP1, inputRefP2) => {

    const [image, setImage] = useState(null)
    const [imageP2, setImageP2] = useState(null)

    const handleImage = (index) => (e) => {
        if(index === 1) {
            const file = e.target.files[0];
            if(file) {
                setImage(file)
            }
        } 
        if(index === 2) {
            const file2 = e.target.files[0];
            if(file2) {
                setImageP2(file2)
            }
        }
      }

    const handeClickRestart = () => {
        if(setIsSend) {
            setIsSend(false)
        }
        setImage(null)
        setImageP2(null)
        inputRefP1.current.value = '';
        inputRefP2.current.value = '';
    }

    return { image, imageP2, handleImage, handeClickRestart }
}
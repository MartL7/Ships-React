import confetti from 'canvas-confetti';

// Logic of the Ships ✅
const randomPorcentage = (number) => {

    return (number === 2) ? Math.floor(Math.random() * 101) : Math.floor(Math.random() * 21) + 80;

}

export const changeImg = (porcentage, img) => {
    
    if(porcentage > 50 && porcentage < 100) {
        img = "https://i.gifer.com/Vh2.gif"
    } else if (porcentage <= 50) {
        img = "https://media.tenor.com/DnNxobCSQZkAAAAC/coraz%C3%B3n-roto.gif"
    } else {
        img = "https://usagif.com/wp-content/uploads/gif/heart-eyes-16.gif"
    }

    return img;
}

export const notShip = (nameP1, nameP2) => {

    let porcentage = randomPorcentage(2);

    const namesNotShip = {
        geovany: "Nombre1",
        leslie: "Nombre2",
        martin: "Nombre3",
        karen: "Nombre4",
        geovas: "Nombre5",
        andres: "Nombre6"
    }

    if (
        (namesNotShip[nameP1] === "Nombre1" && namesNotShip[nameP2] === "Nombre2") ||
        (namesNotShip[nameP1] === "Nombre3" && namesNotShip[nameP2] === "Nombre4") ||
        (namesNotShip[nameP1] === "Nombre2" && namesNotShip[nameP2] === "Nombre1") ||
        (namesNotShip[nameP1] === "Nombre4" && namesNotShip[nameP2] === "Nombre3") ||
        (namesNotShip[nameP1] === "Nombre5" && namesNotShip[nameP2] === "Nombre2") ||
        (namesNotShip[nameP1] === "Nombre2" && namesNotShip[nameP2] === "Nombre5") ||
        (namesNotShip[nameP1] === "Nombre6" && namesNotShip[nameP2] === "Nombre3") || 
        (namesNotShip[nameP1] === "Nombre3" && namesNotShip[nameP2] === "Nombre6")
    ) {
        porcentage = randomPorcentage(1);

        if(porcentage === 100) {
            confetti();
        }
    }

    return porcentage;
}
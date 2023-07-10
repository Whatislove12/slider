export const getRandom = () => {
    const min=1;
    const max=81;
    const generateBomb = [];

    do {
        let NumRandom=Math.floor(Math.random()*(max-min)+min);
        if(!generateBomb.includes(NumRandom)) {
            generateBomb.push(NumRandom);
        }
    }
    while(generateBomb.length<9);
    return generateBomb;
}
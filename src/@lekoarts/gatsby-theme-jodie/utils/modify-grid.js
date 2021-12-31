const modifyGrid = (data) => {
    console.log(data);
    const weMet = data.find(x => x.slug === '/we-met');
    const weTraveled = data.find(x => x.slug === '/we-traveled');
    const weGotCats = data.find(x => x.slug === '/we-got-cats');
    const weGotEngaged = data.find(x => x.slug === '/engagement');
    const info = data.find(x => x.slug === '/info');
    const sections = [info, weMet, weTraveled, weGotCats, weGotEngaged];
    return sections;
}

export default modifyGrid

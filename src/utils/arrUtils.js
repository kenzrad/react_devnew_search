function reduceAndSliceArr(arr) {
    if ( !arr || arr.length === 0 ) {
        return arr;
    }

    let reducedArr = Array.from(new Set(arr.reverse()));
    let slicedArr = reducedArr && reducedArr.length > 0 ? reducedArr.slice(0, 20).reverse() : [];
    return slicedArr;
}

module.exports = {
    reduceAndSliceArr,
}
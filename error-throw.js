
function addOne (numberToAddTo) {
    if (numberToAddTo === undefined) {
        throw new Error1 ('You must Provide a number to add')
    }
    
    return numberToAddTo + 1
}
try {
    //failing to provide a number results in an error
    let result = addOne()
}
catch (errorDetail) {
    console.log(errorDetail.message)
    console.log(errorDetail.name)
}





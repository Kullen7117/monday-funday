


try {
    // this is the code that will be handles if an error occurs
    var x = y


} catch (errorDetail) {
    // this block will runn when the block 'try' hits an error
    // per slide 8, we have properties of the errorDetail object
    // message, name, and stack
    console.log(errorDetail.message)
    console.log(errorDetail.name)
    
}
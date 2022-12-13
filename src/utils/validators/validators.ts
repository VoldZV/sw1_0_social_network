
export const required = (value: string) => {
    if(!value) return 'Field is required'
    return undefined
}

export const maxLengthCreator = (length: number) => {
    return (value: string) => {
        if(value.length > length) return `Max length is ${length}`
        return undefined
    }
}
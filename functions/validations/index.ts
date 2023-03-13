import { type Validation } from './validations.types'

function baseInfoCheck(info) {
    /** CHECK NULLITY */
    let isValue = info.value
    if (!isValue) return false
    /** CHECK EMPTY */
    let isEmpty = info.value.trim().length
    if (isEmpty) return false
}

const text: Validation = (info) => {
    /** BASE INFO VALUE CHECK */
    let successInfo = baseInfoCheck(info)
    if (!successInfo) return false
    /** CHECK MAX LENGTH */
    const maxLength = info.maxLength || 20
    if (info.value.length > maxLength) return false
    /** CHECK MIN LENGTH */
    const minLength = info.minLength || 4
    if (info.value.length < minLength) return false
    // OTHERWISE VALIDATED SUCCESSFULLY : RETURN 1
    return true
}

const email: Validation = (info) => {
    /** BASE INFO VALUE CHECK */
    let successInfo = baseInfoCheck(info)
    if (!successInfo) return false
    /** INCLUDES "@" & "." */
    if (!(info.value.includes('@') && info.value.includes('.'))) return false
    /** IS "." AFTER "@" */
    if (!info.value.split('@')[1].includes('.')) return false
    /** AT LEAST 2 CHARACTER BEFORE "@" */
    if (info.value.split('@')[0].length < 2) return false
    /** AT LEAST 2 CHARACTER BETWEEN "@" & "." */
    if (info.value.split('@')[1].split('.')[0].length < 2) return false
    /** AT LEAST 2 CHARACTER AFTER "." */
    if (info.value.split('@')[1].split('.')[1].length < 2) return false
    return true
}

const validations = {
    text,
    email,
}

export default validations

import type { IAddressSearchBox } from './AddressSearchBox.types'
import { useLoadScript, Autocomplete } from '@react-google-maps/api'
import { useRef, useState } from 'react'

const scriptOptions = {
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'],
}

const AddressSearchBox = (props: IAddressSearchBox) => {
    const { isLoaded, loadError } = useLoadScript(
        scriptOptions as { googleMapsApiKey: string; libraries: Array<any> }
    )
    const [address, setAddress] = useState<string>('')
    const [autoComplete, setAutoComplete] = useState<any>(null)
    const inputRef = useRef(null)

    function onKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            setAddress(inputRef.current.value)
            return false
        }
    }

    function onLoad(authCompleteObject) {
        setAutoComplete(authCompleteObject)
    }

    function onPlaceChanged() {
        if (autoComplete) {
            const place = autoComplete.getPlace()
            if (place.place_id) {
                console.log(place)
            }
        }
    }
    function onCopyAddressToClipBoard() {
        navigator.clipboard.writeText(address)
    }

    return (
        <>
            <div className="w-full max-w-sm mx-auto">
                {isLoaded ? (
                    loadError ? (
                        <p>{loadError.message}</p>
                    ) : (
                        <>
                            <Autocomplete
                                onLoad={onLoad}
                                fields={['place_id']}
                                onPlaceChanged={onPlaceChanged}
                            >
                                <input
                                    ref={inputRef}
                                    onKeyPress={onKeyPress}
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    className="w-full"
                                />
                            </Autocomplete>
                            <p>{address}</p>
                            <button onClick={onCopyAddressToClipBoard}>
                                copy
                            </button>
                        </>
                    )
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default AddressSearchBox

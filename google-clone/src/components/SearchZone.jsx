import { useState, useEffect } from "react"
import googleLogo from "../assets/img/google.png"
import magnifying from "../assets/img/magnifying.svg"
import VoiceIcon from "../element/VoiceIcon"



const GoogleLogo = () => {
    return (
        <div id="logo" className="row">
                <img src={googleLogo} alt="google-Logo" /> 
            </div>
    )
}

const TextSearch = () => {
    const [preview, setPreview] = useState("")

    useEffect(() => {

    }, [preview])

    return (
        <div id="text-search" className="row">
            <img className="magnifying" src={magnifying} alt="magnifying" />
            <input className="searchbox" type="text" 
            onChange={(e) => setPreview(e.target.value)} />
            <span>Preview: {preview}</span>
            <VoiceIcon />
        </div>
    )
}

const SearchZone = () => {

    return (
        <div className="search-zone">
            <GoogleLogo />
            <TextSearch />
        </div>
    )
}

export default SearchZone;
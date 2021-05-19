import "materialize-css";
import {useEffect, useState, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext"
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
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
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showLeftNavbar,
        showRightNavbar,
        showContent,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      return (
        <div className="configuration-container">
          <h1 className="heading">Layout</h1>
          <div className="inputs-container">
            <div className="input-container">
              <input
                className="checkbox"
                type="checkbox"
                id="Content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="Content" className="label">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                className="checkbox"
                type="checkbox"
                id="RightNavbar"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="RightNavbar" className="label">
                Right Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                className="checkbox"
                type="checkbox"
                id="LeftNavbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="LeftNavbar" className="label">
                Left Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
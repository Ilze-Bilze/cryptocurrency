import React from "react"
import variables from '../variables.module.scss'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
 
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
 
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo })
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <main className="m-auto flex min-h-screen flex-col items-center justify-between p-24">
          <h2>Oops, there is an error!</h2>
          <button
            style={{ backgroundColor: variables.primaryColor }}
            className='rounded-full py-2.5 px-3.5'
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </main>
      )
    }
 
    // Return children components in case of no error
 
    return this.props.children
  }
}
 
export default ErrorBoundary
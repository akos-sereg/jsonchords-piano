import * as React from 'react';
import { Component } from 'react';

export class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: null
    };
  }

  componentWillUnmount() {
    this.setState((prevState: any) => ({ ...prevState, error: null }));
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState((prevState: any) => ({ ...prevState, error }));
  }

  render() {
    if (this.state.error) {
      return <div data-automation-id={'error-boundary-text'}>Oops, something went wrong</div>;
    } else {
      return this.props.children;
    }
  }
}

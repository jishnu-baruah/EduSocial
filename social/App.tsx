import React, { Component, ErrorInfo } from 'react';
import { View, Text } from 'react-native';  // Ensure correct imports
import RootLayout from './app/_layout';  // Ensure this path is correct

class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <View><Text>Something went wrong.</Text></View>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <RootLayout />
    </ErrorBoundary>
  );
}

export default App;

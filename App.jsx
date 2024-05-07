// App.js
import React, { createContext, useState, useContext } from 'react';

// Define default theme
const defaultTheme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f2f2f2',
    hover: '#f5f5f5',
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeightBold: 'bold',
  },
  spacing: {
    padding: '12px',
    border: '1px solid #ddd',
  },
};

// Create theme context
const ThemeContext = createContext();

// Custom hook to consume theme
const useTheme = () => useContext(ThemeContext);

// Theme provider component
const ThemeProvider = ({ children, theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme || defaultTheme);

  const changeTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Themed table component
const ThemedTable = () => {
  const { theme } = useTheme();

  const { colors, typography, spacing } = theme;

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: colors?.background,
    color: colors?.primary,
    fontWeight: typography?.fontWeightBold,
    padding: spacing?.padding,
    border: spacing?.border,
  };

  const tdStyle = {
    padding: spacing?.padding,
    border: spacing?.border,
  };

  const hoverStyle = {
    backgroundColor: colors?.hover,
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr style={hoverStyle}>
          <td style={tdStyle}>John Doe</td>
          <td style={tdStyle}>john@example.com</td>
          <td style={tdStyle}>Admin</td>
        </tr>
        <tr style={hoverStyle}>
          <td style={tdStyle}>Jane Smith</td>
          <td style={tdStyle}>jane@example.com</td>
          <td style={tdStyle}>User</td>
        </tr>
      </tbody>
    </table>
  );
};

// App component
const App = () => {
  return (
    <div>
      <h1>Themed Table Example</h1>
      <ThemeProvider>
        <ThemedTable />
      </ThemeProvider>
      <ThemeProvider>
        <ThemedTable />
      </ThemeProvider>
      <ThemeProvider theme={{ colors: { background: 'lightblue' } }}>
        <ThemedTable />
      </ThemeProvider>
    </div>
  );
};

export default App;

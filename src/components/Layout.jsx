import React from 'react';
import '../index.css';
import { cn } from '../lib/utils';
import '@fontsource/bricolage-grotesque'; // Defaults to weight 400
import '@fontsource/space-mono'; // Defaults to weight 400

const Layout = ({ children }) => {
    return (
      <div 
        className={cn('antialiased')}
        style={{
          fontFamily: 'var(--font-heading), var(--font-body)',
        }}
      >
        {children}
      </div>
    );
  };
  
  export default Layout;
import React from "react";
import Home from './Home'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('Home'));
root.render(<Home />);
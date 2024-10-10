import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomRadio from './CustomRadio';
import NextQuestion from './NextQuestion';
import Exam from './Exam';
import JobBoard from './JobBoard';
import ContactForm from './ContactForm';
import GridLights from './GridLights';
// import Example from './Example';
import Like from './Like';
import Accordion from './accordion/Accordion';
import Exploler from './Exploler';
import Tictac from './tic-tac-toe/tic-tac-toe';
import UndoableCounter from './UndoableCounter';
import Tab from './Tab';
import GenerateTable from './GenerateTable';
import MultiPage from './MultiPage';
import MovieList from './context/MovieList';
import { MovieProvider } from './context/MovieContext';
import Nav from './context/Nav';
import AddMovie from './context/AddMovie';
import DebounceData from './DebounceData';
import SortableTable from './SortableTable';
import Breadcrumb from './breadcrumb/Breadcrumb';
import Folder from './Folder';
import TabInformation from './TabInformation';
import CartSwap from './cart-swap/CartSwap';
import ReactQuery from './react-query/ReactQuery';
import Example from './react-query/Example';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import InfiniteScroll from './InfiniteScroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
      <InfiniteScroll />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

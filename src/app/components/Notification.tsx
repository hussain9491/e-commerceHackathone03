// Install: npm install react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Trigger notifications
toast.success('Item added to cart!');
toast.error('Failed to add item.');

// Add this component to your root layout
<ToastContainer position="bottom-right" autoClose={3000} />
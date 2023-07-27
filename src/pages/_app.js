import '@/src/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from './crm/adminLayout/adminLayout';
 


export default function App({ Component, pageProps }) {
  return(
    <AdminLayout>
   <Component {...pageProps} />
   </AdminLayout>
  )
}

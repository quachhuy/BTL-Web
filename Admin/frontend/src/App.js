import {Admin, Resource} from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import {listProducts, editProduct, createProduct} from './components/Products'
import {listUsers, editUser, createUser} from './components/Users'
import authProvider from './components/authProvider'
import AdminPanel from '../src/components/Dashboard'
import userIcon from '@mui/icons-material/Group';
import productsIcon from '@mui/icons-material/ProductionQuantityLimits';
function App() {
  return (
    <div className="App">
      <Admin authProvider={authProvider} dashboard={AdminPanel} dataProvider={simpleRestProvider('http://localhost:3000') }   >
      <Resource name='users' 
        list={listUsers} 
        edit={editUser} 
        create={createUser}
        icon={userIcon}/>
        
        <Resource name='products' 
        list={listProducts} 
        edit={editProduct} 
        create={createProduct}
        icon={productsIcon}/>
        
      </Admin>
    </div>
    
  );
}

export default App;

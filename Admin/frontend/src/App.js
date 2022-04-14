import {Admin, Resource} from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import {listProducts, editProduct, createProduct} from './components/Products'
import {listUsers, editUser, createUser} from './components/Users'
import authProvider from './authProvider'
import AdminPanel from '../src/components/Dashboard'
function App() {
  return (
    <div className="App">
      <Admin authProvider={authProvider} dashboard={AdminPanel} dataProvider={simpleRestProvider('http://localhost:3000') }   >
      <Resource name='users' 
        list={listUsers} 
        edit={editUser} 
        create={createUser}/>
        
        <Resource name='products' 
        list={listProducts} 
        edit={editProduct} 
        create={createProduct}/>
        
      </Admin>
    </div>
    
  );
}

export default App;

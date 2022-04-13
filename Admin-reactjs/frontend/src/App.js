import {Admin, Resource} from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import {listProducts, editProduct, createProduct} from './components/Products'
import {listUsers, editUser, createUser} from './components/Users'
import authProvider from './authProvider';
function App() {
  return (
    <div className="App">
      <Admin dataProvider={simpleRestProvider('http://localhost:3000') } authProvider={authProvider}  >
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

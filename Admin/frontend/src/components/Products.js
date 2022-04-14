import { 
    List,
    Datagrid, 
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    DeleteButton,
    TextInput,
    Create,} 
    from "react-admin"
export const listProducts = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source='name' />
            <TextField source='price' />
            <TextField source='provider' />
            <EditButton basePath="/products" />
            <DeleteButton basePath="/products"/>
        </Datagrid>
    </List>
)

export const editProduct = (props) =>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='price' />
            <TextInput source='provider' />
        </SimpleForm>
    </Edit>
)
export const createProduct = (props) =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='price' />
            <TextInput source='provider' />
        </SimpleForm>
    </Create>
)
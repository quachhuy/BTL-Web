import { 
    List,
    Datagrid, 
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    DeleteButton,
    TextInput,
    Create } 
    from "react-admin"
export const listUsers = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source='name' />
            <TextField source='Company' />
            <TextField source='DateStart' />
            <EditButton basePath="/users" />
            <DeleteButton basePath="/users"/>

        </Datagrid>
    </List>
)

export const editUser = (props) =>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextField source='Company' />
            <TextField source='DateStart' />
        </SimpleForm>
    </Edit>
)
export const createUser = (props) =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextField source='Company' />
            <TextField source='DateStart' />
        </SimpleForm>
    </Create>
)
import { useState } from "react"
import { 
    List,
    Datagrid, 
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    DeleteButton,
    TextInput,
    Create,
    DateInput,
    EmailField} 
    from "react-admin"
export const listUsers = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source='name' />
            <EmailField source='Email' />
            <TextField source='published_at' />
            <EditButton basePath="/users" />
            <DeleteButton basePath="/users"/>
        </Datagrid>
    </List>
)

export const editUser = (props) =>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='Email' />
            <DateInput source='published_at' />
        </SimpleForm>
    </Edit>
)
export const createUser = (props) =>(
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='Email' />
            <DateInput source='published_at' />
        </SimpleForm>
    </Create>
)
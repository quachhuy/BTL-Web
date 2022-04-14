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
    ReferenceInput,
    SelectInput} 
    from "react-admin"
    const productsFilters = [
        <TextInput source="q" label="Search" alwaysOn />,
        <ReferenceInput source="id" label="Provider" reference="products">
            <SelectInput optionText="name" />
        </ReferenceInput>,
    ];
export const listProducts = (props) => (
    <List {...props} filters={productsFilters} >
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
import { Ul, Li, Box, Button, P } from "../Contacts/Contacts.styled"
import { useFetchContactsQuery, useDeleteContactMutation } from "../../contactsApi";
import { useState } from 'react';

const Contacts = () => {
    const { data, isFetching } = useFetchContactsQuery()
    const [deleteContact] = useDeleteContactMutation()
    const [filter, setFilter] = useState('')
    
    const nrlzdFilter = filter.toLowerCase();
    const getVisibleItems = data => data.filter(contact => contact.name.toLowerCase().includes(nrlzdFilter));
 

    console.log(data)

    return (
            <Box>
                <label>
                <p>Find contacts by name</p>
                <input type="text" name="name" value={filter} onChange={evt => setFilter(evt.target.value)}/>
                </label>

                <Ul>
                    {isFetching && <p>Loading...</p>}
                    {data && getVisibleItems(data).map(contact => {
                        return (
                            <Li key={contact.id}>
                                <P>{contact.name}: {contact.number}</P>
                                <Button type="button" onClick={()=>deleteContact(contact.id)}>Delete</Button>  
                            </Li>
                            )
                        })}
                </Ul>
            </Box>
    );
}

export default Contacts


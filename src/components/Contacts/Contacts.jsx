import React from "react";
import { Ul, Li, Box, Button, P } from "../Contacts/Contacts.styled"
import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";
import { useFetchContactsQuery, useDeleteContactMutation } from "../../contactsApi";

const Contacts = () => {
    const { data, isFetching } = useFetchContactsQuery()
    const [deleteContact] = useDeleteContactMutation()

    console.log(data)

    return (
            <Box>
                <Ul>
                    {isFetching && <p>Loading...</p>}
                    {data && data.map(contact => {
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

const getVisibleItems = (allItems, filter) => {
    const nrlzdFilter = filter.toLowerCase();
    return allItems.filter(contact => contact.name.toLowerCase().includes(nrlzdFilter));
}

const mapStateToProps = state => {
    const { filter, items } = state.contacts;
    const visibleItems = getVisibleItems(items, filter)

    return {
        contacts: visibleItems,
    }
}

export default connect(mapStateToProps)(Contacts)


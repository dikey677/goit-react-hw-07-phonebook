import React from "react";
import { Ul, Li, Box, Button, P } from "../Contacts/Contacts.styled"
import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";
import { useFetchContactsQuery } from "../../contactsApi";

const Contacts = ({  removeContact }) => {
    const { data, isFetching } = useFetchContactsQuery()

    console.log(data)

    return (
            <Box>
            <Ul>
                    {isFetching && <p>Loading...</p>}
                    {data && data.map(contact => {
                        return (
                            <Li key={contact.id}>
                                <P>{contact.name}: {contact.number}</P>
                                <Button type="button" onClick={() => removeContact(contact.id)}>Delete</Button>  
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

const mapDispatchToProps = dispatch => ({
    removeContact: (contactId) => dispatch(actions.DeleteContact(contactId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)


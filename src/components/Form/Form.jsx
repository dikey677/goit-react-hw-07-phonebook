import { FormBox, InputName, InputNumber } from "./Form.styled";
import { useState } from "react";
import { useCreateContactMutation } from "../../contactsApi";


function Form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [createContact] = useCreateContactMutation();
   
  const handleSubmit = evt => {
    evt.preventDefault();
    createContact({ name, number });
    setName('');
    setNumber('');
  }
  
  return (
      <FormBox onSubmit={handleSubmit}>
             Name
            <InputName
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                 value={name}
                 onChange={evt => setName(evt.target.value)}
             />
            
             Number
             <InputNumber
                 type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
                 value={number}
                 onChange={evt => setNumber(evt.target.value)}
             />
            
        <button type="submit">Add contacts</button>
      </FormBox>
    )
}

export default Form
 



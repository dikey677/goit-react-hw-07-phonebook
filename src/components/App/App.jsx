import Title from "../Title/Title";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import { Container } from "../Contacts/Contacts.styled";

export default function App() {
  return (
      <section>
        <Title title='Phonebook' />
        <Form />
      
        <Container>
          <div> 
            <Title title='Contacts' />
            <Contacts />
          </div>
        </Container>  
      </section>
    )
}




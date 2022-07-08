import Title from "../Title/Title";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import { Container } from "../Contacts/Contacts.styled";

export default function App() {
  return (
      <section>
        <Title title='Phonebook' />
        <Form />
        <Container>
          <div> 
            <Title title='Contacts' />
            <Filter />
          </div>
          
          <Contacts />
        </Container>  
      </section>
    )
}




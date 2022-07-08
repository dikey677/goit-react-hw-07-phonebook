import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";


const Filter = ({ value, onChange }) => {

    return (
        <label>
            <p>Find contacts by name</p>
            <input type="text" name="name" value={value} onChange={onChange}/>
        </label>
    );
}

const mapStateToProps = state => ({
    value: state.contacts.filter,
    
})

const mapDispatchToProps = dispatch => ({
    onChange: event => dispatch(actions.FilterContact(event.currentTarget.value))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Filter) 
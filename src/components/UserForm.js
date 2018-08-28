import React from 'react';
import InputMask from 'react-input-mask';
import { range } from "../Utils";

const required = (value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return 'Обязательно для заполнения';
    }
};

class UserForm extends React.Component {

    constructor( props ) {
        super(props);
        this.state = {
            user: props.user ? props.user : {}
        };
    }

    handleSubmit( event ){
        event.preventDefault();
        const data = event.target.elements;
        const { onSubmit } =  { ... this.props };

        onSubmit({
            fio: data.fio.value,
            birthDay: data.birthDay.value,
            birthMonth : data.birthMonth.value,
            birthYear : data.birthYear.value,
            address: data.address.value,
            town: data.town.value,
            phone: data.phone.value
        })
    }

    render() {
        const { user } = this.state;
        const { onCancel, onSubmit } =  { ... this.props };

        const beginBirthYear = 1958
        return (
            <div>

                <form onSubmit={ (e) => { this.handleSubmit(e) } } >

                    <label htmlFor="fio">ФИО*</label>
                    <input type="text" name="fio" maxLength={100} value={user.fio}/>


                    <label >Дата рождения</label>
                    <br/>
                    <select name="birthDay" value={user.birthDay} >
                        { range(31).map(function(i){
                            let value = i+1;
                            return    <option key={i}  >{value}</option>;
                        })}
                    </select>
                    <select  name="birthMonth" value={user.birthMonth}>
                        { range(12).map(function(i){
                            let value = i+1;
                            return    <option key={i} >{value}</option>;
                        })}
                    </select>
                    <select name="birthYear" value={user.birthYear} >
                        { range(60).map(function(i){
                            let value = i+beginBirthYear
                            return    <option  key={i}  >{value}</option>;
                        })}
                    </select>

                    <br/>

                    <label htmlFor="address">Адрес*</label>
                    <input type="text" name="address" value={user.address} />

                    <label htmlFor="town">Город*</label>
                    <input type="text" name="town"  value={user.town} />

                    <label htmlFor="phone">Телефон*</label>
                    <InputMask name="phone"  mask="+7(999) 999-99-99" type='text' value={user.phone}  />

                    <input type="submit" value="Сохранить" />

                    <input type="button" value="Отмена" style={{float:'right'}} onClick={ () => { onCancel() }}/>

                </form>

            </div>
        );
    }
}

export default UserForm;
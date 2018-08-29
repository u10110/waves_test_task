import React from 'react';
import InputMask from 'react-input-mask';
import { range } from "../Utils";


class UserForm extends React.Component {

    constructor( props ) {
        super(props);
        this.state = {
            user: props.user ? props.user : {},
            errors : {  }
        };
    }

    onChange( name, value ){

        let { user } = { ...this.state }
        user[ name ] = value
        this.setState( { user : user } )
    }

    handleSubmit( event ){
        event.preventDefault();
        const data = event.target.elements;
        const { onSubmit, onCancel } =  { ... this.props };
        let errors = {};
        const user = {
            fio: data.fio.value,
            birthDay: data.birthDay.value,
            birthMonth : data.birthMonth.value,
            birthYear : data.birthYear.value,
            address: data.address.value,
            town: data.town.value,
            phone: data.phone.value
        };

        if (!user.fio.toString().trim().length) {
            errors.fio = true;
        }

        if (!user.address.toString().trim().length) {
            errors.address = true;
        }

        if (!user.town.toString().trim().length) {
            errors.town = true;
        }

        if (!user.phone.toString().trim().length) {
            errors.phone = true;
        }

        if( Object.keys(errors).length > 0 ){
            this.setState( { errors : errors } )
        }else{
            onSubmit({
                fio: data.fio.value,
                birthDay: data.birthDay.value,
                birthMonth : data.birthMonth.value,
                birthYear : data.birthYear.value,
                address: data.address.value,
                town: data.town.value,
                phone: data.phone.value
            })
            onCancel()
        }
    }

    render() {
        const { user, errors } = this.state;
        const { onCancel } =  { ... this.props };

        const beginBirthYear = 1958
        return (
            <div style={ {width:'600px'}}>

                <form onSubmit={ (e) => { this.handleSubmit(e) } } >

                    <label htmlFor="fio">ФИО* <span className="error"> { errors.fio ? 'Обязательно для заполнения' : ' ' }</span> </label><br/>
                    <input type="text" name="fio" maxLength={100} value={user.fio}  onChange={ e => this.onChange( 'fio', e.target.value ) } />

                    <label >Дата рождения</label>
                    <br/>
                    <select name="birthDay" value={user.birthDay} onChange={ e => this.onChange( 'birthDay', e.target.value ) } >
                        { range(31).map(function(i){
                            let value = i+1;
                            return    <option key={i}  >{value}</option>;
                        })}
                    </select>
                    <select  name="birthMonth" value={user.birthMonth} onChange={ e => this.onChange( 'birthMonth', e.target.value ) } >
                        { range(12).map(function(i){
                            let value = i+1;
                            return    <option key={i} >{value}</option>;
                        })}
                    </select>
                    <select name="birthYear" value={user.birthYear} onChange={ e => this.onChange( 'birthYear', e.target.value ) } >
                        { range(60).map(function(i){
                            let value = i+beginBirthYear
                            return    <option  key={i}  >{value}</option>;
                        })}
                    </select>

                    <br/>

                    <label htmlFor="address">Адрес*  <span className="error"> { errors.address ? 'Обязательно для заполнения' : ' ' }</span></label>
                    <input type="text" name="address" value={user.address} onChange={ e => this.onChange( 'address', e.target.value ) } />

                    <label htmlFor="town">Город* <span className="error"> { errors.town ? 'Обязательно для заполнения' : ' ' }</span></label>
                    <input type="text" name="town"  value={user.town} onChange={ e => this.onChange( 'town', e.target.value ) } />

                    <label htmlFor="phone">Телефон* <span className="error"> { errors.phone ? 'Обязательно для заполнения' : ' ' }</span></label>
                    <InputMask name="phone"  mask="+7(999) 999-99-99" type='text' value={user.phone}  onChange={ e => this.onChange( 'phone', e.target.value ) } />

                    <input type="submit" value="Сохранить" />

                    <input type="button" value="Отмена" style={{float:'right'}} onClick={ () => { onCancel() }}/>

                </form>

            </div>
        );
    }
}

export default UserForm;
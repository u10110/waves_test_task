import React from 'react';
import InputMask from 'react-input-mask';
import { range } from "../Utils";
import Modal from "react-modal";



const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class UserForm extends React.Component {

    render() {
        const { modalIsOpen, user, errors } = this.props;
        let { addUser, onCancel } = this.props;

        const beginBirthYear = 1958;
        return (
           <div>

               <div align="right">
                   <button type="button" onClick={()=>{addUser()}} >Добавить пользователя</button>
               </div>

                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    ariaHideApp={false}
                >

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

                </Modal>

           </div> );

    }
}


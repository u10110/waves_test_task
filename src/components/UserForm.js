import React  from 'react';
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

function UserForm(props) {

        const { modalIsOpen, user = {}, errors= {}} = props;
        let {  onCancel, handleSubmit } = props;

        const beginBirthYear = 1958;

        return (
           <div>

                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    ariaHideApp={false}
                >

                <div style={ {width:'600px'}}>

                    <form onSubmit={ (e) => { handleSubmit(e) } } >

                        <label htmlFor="fio">ФИО* <span className="error"> { errors.fio ? 'Обязательно для заполнения' : ' ' }</span> </label><br/>
                        <input type="text" name="fio" maxLength={100} value={user.fio} />

                        <label >Дата рождения</label>
                        <br/>
                        <select name="birthDay" value={user.birthDay}  >
                            { range(31).map(function(i){
                                let value = i+1;
                                return    <option key={i}  >{value}</option>;
                            })}
                        </select>
                        <select  name="birthMonth" value={user.birthMonth} >
                            { range(12).map(function(i){
                                let value = i+1;
                                return    <option key={i} >{value}</option>;
                            })}
                        </select>
                        <select name="birthYear" value={user.birthYear}  >
                            { range(60).map(function(i){
                                let value = i+beginBirthYear
                                return    <option  key={i}  >{value}</option>;
                            })}
                        </select>

                        <br/>

                        <label htmlFor="address">Адрес*  <span className="error"> { errors.address ? 'Обязательно для заполнения' : ' ' }</span></label>
                        <input type="text" name="address" value={user.address}  />

                        <label htmlFor="town">Город* <span className="error"> { errors.town ? 'Обязательно для заполнения' : ' ' }</span></label>
                        <input type="text" name="town"  value={user.town}  />

                        <label htmlFor="phone">Телефон* <span className="error"> { errors.phone ? 'Обязательно для заполнения' : ' ' }</span></label>
                        <InputMask name="phone"  mask="+7(999) 999-99-99" type='text' value={user.phone}  />

                        <input type="submit" value="Сохранить" />

                        <input type="button" value="Отмена" style={{float:'right'}} onClick={ () => { onCancel() }}/>

                    </form>

                  </div>

                </Modal>

           </div> );


}

export default UserForm;

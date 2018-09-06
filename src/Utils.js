import React from "react";

export const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

export const User = () => {
    return {
        fio: 'Иванов Иван Иванович',
        birthDay: 10,
        birthMonth : 2,
        birthYear : 1990,
        address: 'фвфыв фыв фыв фыв ',
        town: 'Москва',
        phone: '8(947) 447-47-47'
    };
};

export function getUsers(len = 5553) {
    return range(len).map(d => {
        return {
            ...User(),
            children: range(1).map(User)
        };
    });
}

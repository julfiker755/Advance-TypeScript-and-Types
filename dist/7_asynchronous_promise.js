"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Strings Promise----
const makepromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data is fetch";
        if (data) {
            resolve(data);
        }
        else {
            reject('Data is not fetch');
        }
    });
};
const getpromise = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makepromise();
    console.log(data);
});
// boolean Promise----
const makepromise1 = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject('Data is not fetch');
        }
    });
};
const getpromise1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makepromise1();
    console.log(data);
});
// type objpromisetype={
//    data:string;
// }
const makepromise2 = () => {
    return new Promise((resolve, reject) => {
        const data = { data: 'Hello I am fetch data for websites' };
        if (data) {
            resolve(data);
        }
        else {
            reject('Data is not fetch');
        }
    });
};
const getpromise2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makepromise2();
    return data;
});
const fetchdata = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return res.json();
});
const getfetchdata = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetchdata();
    console.log(result);
});
getfetchdata();
//Exstra option--------------->>>>>>
// (async():Promise<void>=>{
//    const result=await fetchdata()
//    console.log(result)
// })()

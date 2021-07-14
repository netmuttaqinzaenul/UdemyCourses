import {makeObservable, observable} from 'mobx'

export default class ActivityStore {
    title = 'Hello from Mobx';
    city = 'Pekalongan';

    constructor() {
       makeObservable(this, {
           title: observable,
           city: observable
       })
    }
}
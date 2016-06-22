/**
 * Created by seann on 23/6/2016.
 */

import { Injectable } from "@angular/core";

@Injectable()
export class TodoItemService {
    private todoItems:Array<any>;

    constructor() {
        this.todoItems = [
                            { age: 40, name: 'Jordan Houston' },
                            { age: 23, name: 'Josh Beh' },
                            { age: 23, name: 'Joseph Canina' },
                            { age: 24, name: 'Alexandra Wilkins' },
                            { age: 22, name: 'Kiersten Costanzo' },
                            { age: 23, name: 'Ku Sherwood' },
                            { age: 25, name: 'Arta Halili' },
                            { age: 21, name: 'Patrick Cooney' },
                            { age: 21, name: 'Z.A. Perr' },
                            { age: 18, name: 'Tyler Mulligan' },
                            { age: 26, name: 'Dennis Dempsey' },
                            { age: 32, name: 'Francis Yeager' },
                            { age: 23, name: 'Phil Belardi' },
                            { age: 25, name: 'Bryan Roman' }
                        ];
    }

    public getTodoItems() {
        return this.todoItems;
    }
}
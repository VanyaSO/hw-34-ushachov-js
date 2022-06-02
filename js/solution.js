'use strict'

void function (){

    const table = document.createElement('table');
    let num = 0;

    for(let i = 0; i < 10; i += 1){
        const tr = document.createElement('tr');

        for(let a = 0; a < 10; a += 1){
            const td = document.createElement('td');
            td.innerHTML = num += 1;
            tr.append(td);
        }

        table.append(tr);

    }

    document.body.append(table);
}();
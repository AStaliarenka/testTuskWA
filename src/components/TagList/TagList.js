export default class TagList {
// class TagList {
    constructor() {
        this.data = [
            {label: 'Going to learn React', id: 1},
            {label: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam voluptatem laudantium, ea omnis ut atque culpa! Laudantium veniam reiciendis quia optio veritatis consequatur ut, ab, aliquid beatae maiores dolore possimus?', id: 2},
            {label: 'Hello brother', id: 3},
            {label: 'Hello mother', id: 4},
        ];
        this.readOnlyMode = false;
        this.maxId = this.data.length;

        this.separator = " ";

        this.tagList = document.querySelector('.tag-list');
        this.headerInput = document.querySelector('.header__input');
        this.btnAdd = document.querySelector('.header__button');
        this.readOnlyModeCheckbox = document.querySelector('.readonly__checkbox');

        // нужно было наверное формой делать и вешать сабмит на форму, но..
        this.btnAdd.addEventListener('click', (event) => {
            if (event.target && this.headerInput.value != "" && !this.readOnlyMode) {
                event.preventDefault();
                this.headerInput.value.split(this.separator).forEach(item => {
                    this.addListItem(item);
                });
                // addListItem(headerInput.value);
                this.headerInput.value = "";
        
                console.log(this.data);
            }
        });
        this.tagList.addEventListener('click', (event) => {
            if (event.target && (event.target.tagName == "BUTTON" || event.target.tagName == "IMG")) {
                event.preventDefault();
        
                if (event.target.tagName == "BUTTON") {
                    this.deleteListItem(event.target.parentElement.parentElement.getAttribute("id"));
                } else {
                    this.deleteListItem(event.target.parentElement.parentElement.parentElement.getAttribute("id"));
                }
            }
        });
    }

    updateIdAfterDelete = (id) => {
        const listItems = document.querySelectorAll('.list-item');
        for (let i = id-1; i < listItems.length; i++) {
            listItems[i].setAttribute("id", i+1);
        }
    }

    deleteListItem = (id) => {
        const listItems = document.querySelectorAll('.list-item');
    
        if (this.readOnlyMode) { return }
    
        listItems[id-1].remove();
    
        // console.log('delete item  id = ',id);
        // console.log('before delete item', data);
        this.data = [...this.data.slice(0, id-1), ...this.data.slice(id)];
        // not deep clone
        this.maxId--;
        for (let i = id - 1; i < this.maxId; i++) {
            this.data[i].id = i + 1;
        }
        console.log('after delete item',this.data);
        this.updateIdAfterDelete(id);
    }

    addListItem = (text) => {
        const element = document.createElement("li");
        
        element.classList.add('list-item');
        element.setAttribute("id", ++this.maxId);
    
        this.data.push({label: text, id: this.maxId});
    
        element.innerHTML = `
        <div class="list-item__row">
            <span class="list-item__text">${text}</span>
            <button type="button" class="list-item__trash">
            <img src="img/trash_delete_icon.svg">
            </button>
        </div>
        `
        this.tagList.append(element);
    }

    get List() {
        return this.data;
    }

    // объект в сеттер - массив объектов (структуры массива data)
    set List(obj) {
        this.data = obj;
    }

    onReadOnlyMode = () => {
        this.readOnlyMode = true;
        this.readOnlyModeCheckbox.checked = this.readOnlyMode;
    }

    offReadOnlyMode = () =>  {
        this.readOnlyMode = false;
        this.readOnlyModeCheckbox.checked = this.readOnlyMode;
    }

    toggleReadOnlyMode = () => {
        this.readOnlyModeCheckbox.checked = !this.readOnlyMode;
    }

    writeToLocalStorage = (data) => {
        localStorage.clear();
        const dataSt = JSON.stringify(data);
        // data.forEach((i, item) => {
        //     localStorage.setItem(list, item.label);
        // });
        localStorage.setItem('list', dataSt);
    }

    readFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('label'));
    }
}
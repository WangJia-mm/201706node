let vm = new Vue({
    el:'#app',
    data:{
        todo:{isSelected:false,title:''},
        todos:[
            {title:'回家洗碗',isSelected:false},
            {title:'给媳妇买包',isSelected:false}
        ],
        current:''
    },
    methods:{
        addTodo(){
            //将当前输入的内容 放入到数组中
            this.todos.push(this.todo);
            //将输入框中的内容删除
            this.todo = {isSelected:false,title:''};
        },
        remove(todo){
            this.todos = this.todos.filter(item=>item!==todo);
        },
        save(){
            this.current = ''; //将当前点击的 和任何一项都不相等则会变回默认状态
        },
        change(todo){ //当双击时将当前的元素保存到current变量上
            this.current = todo;
        },
        cancel(){ //当用户点击esc时 要做的是将当前项的值改回原有状态

        }
    },
    computed:{
        count(){ //计算未完成属性的个数
            return this.todos.filter(item=>!item.isSelected).length;
        }
    }
});
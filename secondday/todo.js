let vm = new Vue({
    el:'#app',
    data:{
        todo:{isSelected:false,title:''},
        todos:[
            {title:'回家洗碗',isSelected:false},
            {title:'给媳妇买包',isSelected:false}
        ],
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
        }
    },
    computed:{
        count(){
            return this.todos.filter(item=>!item.isSelected).length;
        }
    }
});
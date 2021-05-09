<template>
  <div class="home">
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in taskList" :key="index" :id="itemId(item)">
        <div v-if="item.done">
        <input type="checkbox" :id="index" :checked="item.done" @click="checkTask($event)"/>
        <label :for="index">{{ item.task }}</label>
        <span class="material-icons" @click="deleteTask(index)">
          &#xe872;
        </span>
        </div>
      </li>
    </ul>
    <button type="button" class="btn btn-danger" @click="deleteFinTasks()">
      <span class="material-icons">
        &#xe872;
      </span>
      delete all
    </button>
  </div>
</template>

<script>

export default {
  name: 'Completed',
  data () {
    return {
      taskList: []
    }
  },
  mounted () {
    if (localStorage.taskList) {
      this.taskList = JSON.parse(localStorage.taskList)
    }
  },
  methods: {
    checkTask ($event) {
      const index = $event.target.id
      this.taskList[index].done = !this.taskList[index].done
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    },
    itemId (item) {
      return !item.done ? 'zero' : ''
    },
    deleteTask (index) {
      this.taskList.splice(index, 1)
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    },
    deleteFinTasks () {
      this.taskList = this.taskList.filter(x => x.done === false)
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    }
  }
}
</script>

<style>
.home {
  margin-top: 20px;
}

#zero {
  padding: 0;
}

.input-group input {width: 75%; margin-right: 5%;}
.input-group button {width: 20%;}

.home .list-group-item {
  border: none;
  font-size: 20px;
  text-align: left;
}

[type="checkbox"] {margin-right: 10px;}
[type="checkbox"]:checked + label {text-decoration: line-through;}

.list-group .material-icons {float: right; color: grey;}
.list-group .material-icons:hover {cursor: pointer; color: black;}
.list-group .material-icons:active {text-shadow: 2px 2px 2px grey;}

.home .btn-danger {float: right; line-height: 34px;}
.btn-danger .material-icons {vertical-align: middle;}

@media only screen and (min-width: 768px) {
  .home {
    margin-top: 50px;
  }

  [type="checkbox"] {
    transform: scale(1.5);
  }
}

</style>

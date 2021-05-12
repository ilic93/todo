<template>
  <div class="home">
    <form name="taskForm" class="input-group" @submit.prevent="addTask()">
      <input type="text" placeholder="Add details" name="task">
      <button class="btn btn-primary" type="submit">Add</button>
    </form>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in taskList" :key="index" :id="itemId(item)">
        <div v-if="!item.done">
          <input type="checkbox" :id="index" :checked="item.done" @click="checkTask($event)"/>
          <label :for="index">{{ item.task }}</label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Active',
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
    addTask () {
      const task = document.querySelector('input').value
      if (task === '') return
      const newTask = {
        task,
        done: false
      }
      this.taskList.push(newTask)
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
      document.taskForm.reset()
    },
    checkTask ($event) {
      const index = $event.target.id
      this.taskList[index].done = !this.taskList[index].done
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    },
    itemId (item) {
      return item.done ? 'zero' : ''
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

@media only screen and (min-width: 768px) {
  .home {
    margin-top: 50px;
  }

  [type="checkbox"] {
    transform: scale(1.5);
  }
}
</style>

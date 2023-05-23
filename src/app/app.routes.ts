import { HomeComponent } from './home/home.component';
import { TodosComponent } from './2-todos/todos.component';
import { UsersComponent } from './users/users.component'; 

export const routes = [
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent }
];
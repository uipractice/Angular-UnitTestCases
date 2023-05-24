import { HomeComponent } from "./routingTestcase/home/home.component";
import { SearchComponent } from "./routingTestcase/search/search.component";


export const routes = [
  {path:'',rediredtTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent}
  
];
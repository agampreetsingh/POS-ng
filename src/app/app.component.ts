import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginData } from './loginData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loginData:LoginData=null;
model: any={};
  flag : string = 'a';


  constructor(private loginservice: LoginService) { }
login(username,password)
{
  console.log("In login "+sessionStorage.getItem("posSessionId"));
   this.loginservice.login(username,password).subscribe(data=>{
    sessionStorage.setItem("posSessionId",JSON.stringify({data}));
    this.loginData=JSON.parse(sessionStorage.getItem("posSessionId"));
    console.log(this.loginData)
  });
  this.ngOnInit();
}
ngOnInit()
{
  //sessionStorage.removeItem("posSessionId");
  

  this.loginData=JSON.parse(sessionStorage.getItem("posSessionId"));

}
  refreshCart() {
    this.flag += "a";
  }
}

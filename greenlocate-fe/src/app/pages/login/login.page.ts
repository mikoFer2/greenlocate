import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MapControllerService } from 'src/app/services/mapcontroller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username!: string;
  password!: string;
  pass!: string;

  mdl_rut: string = '';
  mdl_contrasena: string = '';
  
  constructor(
    private router: Router,
    private taskService: MapControllerService,
    private alertController: AlertController
  ) 
  { }

  async login() {
    const response = await this.taskService.getPass(this.username );
    console.log("mi response: ", response.Contrasena)
    
    //falta validar si existe usuario y el manejo de errores
    if (this.password === response.Contrasena) {
      this.router.navigate(['/inicio']);
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid username or password.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  crearusuario(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['registro'])
  }

}

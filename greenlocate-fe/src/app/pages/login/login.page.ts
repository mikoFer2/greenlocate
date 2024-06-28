import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MapControllerService } from 'src/app/services/mapcontroller.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  form!: FormGroup;
  pass!: string;

  mdl_rut: string = '';
  mdl_contrasena: string = '';
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private taskService: MapControllerService,
    private alertController: AlertController
  ) { 
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      username: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is not valid');
    }
  }

  async login() {
    const username = this.form.get('username')?.value ?? '';
    const password = this.form.get('password')?.value ?? '';

    try {
      const response = await this.taskService.getPass(username);
      const validaUsuario = await this.taskService.getUser(username);

      if (username === validaUsuario.Rut && password === response.Contrasena) {
        this.router.navigate(['/inicio']);
      } else {
        const alert = await this.alertController.create({
          header: 'Login Fallado',
          message: 'Invalid username or password.',
          buttons: ['OK']
        });
  
        await alert.present();
      }
    } catch (error) {
      console.error('Error al validar contrasena desde el servicio:', error);
      const alert = await this.alertController.create({
        header: 'Login Fallado',
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

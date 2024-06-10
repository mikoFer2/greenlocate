import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MapControllerService } from 'src/app/services/mapcontroller.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private taskService: MapControllerService,
    private alertController: AlertController
  ) { 
    this.form = this.formBuilder.group({
      rut: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContrasena: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Validador personalizado para verificar que las contraseñas coincidan
  passwordMatchValidator(formGroup: FormGroup) {
    const contrasena = formGroup.get('contrasena')?.value;
    const confirmarContrasena = formGroup.get('confirmarContrasena')?.value;

    if (contrasena !== confirmarContrasena) {
      formGroup.get('confirmarContrasena')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmarContrasena')?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is not valid');
    }
  }

  async registro() {
    
    const response = await this.taskService.registeUser({
      rut: this.form.get('rut')?.value ?? '',
      nombre: this.form.get('nombre')?.value ?? '',
      apellido: this.form.get('apellido')?.value ?? '',
      email: this.form.get('email')?.value ?? '',
      contrasena: this.form.get('contrasena')?.value ?? ''
    });

    if (response.status == 'OK') {
      const alert = await this.alertController.create({
        header: 'registro exitoso!',
        message: response.message,
        buttons: ['OK']
      });
  
      await alert.present();

      this.router.navigate(['/inicio']);
    } else if(response.status == 'NOK') {
      const alert = await this.alertController.create({
        header: 'registro Fallido',
        message: 'Error al registrar usuario desde el servidor.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'registro Fallido',
        message: 'Invalid form.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }

  salir(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['login'])
  }
  registrarse(){
    let extras: NavigationExtras = {
      replaceUrl: true
    }
    
    this.router.navigate(['inicio'])
  }
}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./pages/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'comentario',
    loadChildren: () => import('./pages/comentario/comentario.module').then( m => m.ComentarioPageModule)
  },
  {
    path: 'resena',
    loadChildren: () => import('./pages/resena/resena.module').then( m => m.ResenaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cambio-contrasena',
    loadChildren: () => import('./pages/cambio-contrasena/cambio-contrasena.module').then( m => m.CambioContrasenaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cancha',
    loadChildren: () => import('./pages/cancha/cancha.module').then( m => m.CanchaPageModule)
  },
  {
    path: 'balancin',
    loadChildren: () => import('./pages/balancin/balancin.module').then( m => m.BalancinPageModule)
  },
  {
    path: 'columpio',
    loadChildren: () => import('./pages/columpio/columpio.module').then( m => m.ColumpioPageModule)
  },
  {
    path: 'maquina',
    loadChildren: () => import('./pages/maquina/maquina.module').then( m => m.MaquinaPageModule)
  },
  {
    path: 'mesa',
    loadChildren: () => import('./pages/mesa/mesa.module').then( m => m.MesaPageModule)
  },
  {
    path: 'asiento',
    loadChildren: () => import('./pages/asiento/asiento.module').then( m => m.AsientoPageModule)
  },
  {
    path: 'pileta',
    loadChildren: () => import('./pages/pileta/pileta.module').then( m => m.PiletaPageModule)
  },
  {
    path: 'resbalin',
    loadChildren: () => import('./pages/resbalin/resbalin.module').then( m => m.ResbalinPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

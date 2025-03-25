import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PurposeComponent } from './pages/purpose/purpose.component';
import { ServicesComponent } from './pages/services/services.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'servicios', component: ServicesComponent },
    { path: 'proposito', component: PurposeComponent },
];


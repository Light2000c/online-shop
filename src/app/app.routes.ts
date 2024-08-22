import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { AccountComponent } from './pages/account/account.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminCartComponent } from './admin/admin-cart/admin-cart.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminFavouriteComponent } from './admin/admin-favourite/admin-favourite.component';
import { TeamMembersComponent } from './admin/team-members/team-members.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminTransactionComponent } from './admin/admin-transaction/admin-transaction.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
   {
    path: "",
    component: HomeComponent
   },
   {
      path: "shop",
      component: ProductComponent
   },
   {
      path: "cart",
      component: CartComponent
   },
   {
      path: "favourite",
      component: FavouriteComponent
   },
   {
      path: "shop/:id",
      component: ProductDetailsComponent
   },
   {
      path: "search",
      component: SearchComponent
   },
   {
      path: "about",
      component: AboutComponent
   },
   {
      path: "contact-us",
      component: ContactUsComponent
   },
   {
      path: "account",
      component: AccountComponent
   },
   {
      path: "login",
      component: LoginComponent
   },
   {
      path: "register",
      component: RegisterComponent
   },
   {
      path: "admin/dashboard",
      component: DashboardComponent
   },
   {
      path: "admin/product",
      component: AdminProductComponent
   },
   {
      path: "admin/cart",
      component: AdminCartComponent
   },
   {
      path: "admin/favourite",
      component: AdminFavouriteComponent
   },
   {
      path: "admin/order",
      component: AdminOrderComponent
   },
   {
      path: "admin/transaction",
      component: AdminTransactionComponent
   },
   {
      path: "admin/team-member",
      component: TeamMembersComponent
   },
   {
      path: "admin/user",
      component: UsersComponent
   },
];

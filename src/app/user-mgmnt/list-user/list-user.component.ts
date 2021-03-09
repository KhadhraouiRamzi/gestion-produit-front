import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/utils/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  users : User[] = [];
  use : User ;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger = new Subject();

  constructor(private userService: UserService,private r : Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){

    this.userService.getUsersList().subscribe(res => {
      this.users = res;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
      if (this.users) {
        alert("Edit User avec succès ");
      }
     });
  }
  else 
  {
    
    this.userService.getUsersList().subscribe(res => {
      this.users = res;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }
    


  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  delete(p: User) {
    if (window.confirm("êtes-vous sûr suprrimer l'utilisateur "+p.nom+" ?")) {
      this.userService.deleteUser(p.id).subscribe(res => {
      //  alert('User deleted !');
        //

        
        this.userService.getUsersList().subscribe(res => {
          this.users = res;
          
          // rerender datatable
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
          });
          
        });
        
    
      })
      
    }
  }


  details (u:User)
  {
    this.currentUser = u;
    this.displayBasic = true;
  }

  modifier(u: User){

      {
      this.r.navigate(['/edit-user/'+u.id]);
      console.log(u);
      u =new User();

      
    }

  }

  displayBasic: boolean;
  currentUser : User;

  
  showTransactions(id: string)
  {
    this.r.navigate(['/list-produit/'+id]);
  }


  ajouter()
  {
    this.r.navigate(['/add-user/']);
  }
}
